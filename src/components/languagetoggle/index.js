import React from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import "./style.css";

const LanguageToggle = () => {
  const { language, setLang, t } = useTranslation();

  return (
    <div
      className="nav_ac lang_toggle"
      role="group"
      aria-label={t("lang.label")}
    >
      <button
        type="button"
        className={`lang_btn ${language === "es" ? "active" : ""}`}
        onClick={() => setLang("es")}
        aria-pressed={language === "es"}
      >
        {t("lang.es")}
      </button>
      <span className="lang_divider">|</span>
      <button
        type="button"
        className={`lang_btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={language === "en"}
      >
        {t("lang.en")}
      </button>
    </div>
  );
};

export default LanguageToggle;
