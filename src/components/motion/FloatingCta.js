import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../i18n/LanguageContext";
import "./floatingcta.css";

export const FloatingCta = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.includes("/contact")) return null;

  return (
    <motion.div
      className="floating_cta"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
    >
      <Link to="/contact" className="floating_cta_btn">
        <span className="floating_cta_pulse" aria-hidden="true" />
        {t("home.contactBtn")}
      </Link>
    </motion.div>
  );
};
