import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import LanguageToggle from "../components/languagetoggle";
import { useTranslation } from "../i18n/LanguageContext";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const { t } = useTranslation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <LanguageToggle />
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      {t("nav.home")}
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      {t("nav.portfolio")}
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      {t("nav.about")}
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {t("nav.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3 ">
            <div className="d-flex  ">
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noreferrer"
                className="lat"
              >
                {t("nav.linkedin")}
              </a>
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noreferrer"
                className="lat"
              >
                {t("nav.github")}
              </a>
            </div>
            <p className="copyright m-0">
              {t("nav.copyright", {
                name: logotext,
                year: new Date().getFullYear(),
              })}
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
