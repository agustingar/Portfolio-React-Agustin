import React, { createContext, useContext, useEffect, useState } from "react";
import es from "./locales/es";
import en from "./locales/en";

const translations = { es, en };

const LanguageContext = createContext(null);

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

export const LanguageProvider = ({ children }) => {
  const savedLang = localStorage.getItem("language");
  const browserLang = navigator.language?.startsWith("es") ? "es" : "en";
  const [language, setLanguage] = useState(savedLang || browserLang);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key, vars = {}) => {
    let value =
      getNestedValue(translations[language], key) ||
      getNestedValue(translations.es, key) ||
      key;

    Object.entries(vars).forEach(([varKey, varValue]) => {
      value = value.replace(`{{${varKey}}}`, varValue);
    });

    return value;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const setLang = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, t, toggleLanguage, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
};
