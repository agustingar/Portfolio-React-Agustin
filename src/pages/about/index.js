import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  worktimeline,
  skills,
  servicesKeys,
  education,
  languages,
} from "../../content_option";
import AgustinGarciaCV from "../../assets/pdf/AgustinCV2025.pdf";
import { Reveal } from "../../components/motion";
import { useTranslation } from "../../i18n/LanguageContext";

export const About = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("about.pageTitle")} | {t("meta.title")}
          </title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>
        <Reveal>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">{t("about.pageTitle")}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.05}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.aboutTitle")}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{t("about.aboutme")}</p>
                <div className="about_now">
                  <p className="about_now_label">{t("about.nowTitle")}</p>
                  <p className="about_now_text">{t("about.nowText")}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.1}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.timeline")}</h3>
            </Col>
            <Col lg="7">
              <div className="about_timeline">
                {worktimeline.map((data) => (
                  <article className="about_timeline_item" key={data.key}>
                    <span className="about_timeline_dot" aria-hidden="true" />
                    <div className="about_timeline_meta">
                      <span className="about_timeline_date">
                        {t(`about.work.${data.key}.date`)}
                      </span>
                      <span className="about_timeline_role">
                        {t(`about.work.${data.key}.role`)}
                      </span>
                    </div>
                    <h4>{t(`about.work.${data.key}.company`)}</h4>
                    <p>{data.where}</p>
                  </article>
                ))}
              </div>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.12}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.education")}</h3>
            </Col>
            <Col lg="7">
              <div className="about_timeline">
                {education.map((item) => (
                  <article className="about_timeline_item" key={item.key}>
                    <span className="about_timeline_dot" aria-hidden="true" />
                    <div className="about_timeline_meta">
                      <span className="about_timeline_date">{item.date}</span>
                    </div>
                    <h4>{item.place}</h4>
                    <p>{t(`about.educationItems.${item.key}`)}</p>
                  </article>
                ))}
              </div>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.14}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.languages")}</h3>
            </Col>
            <Col lg="7">
              <div className="about_langs">
                {languages.map((lang) => (
                  <div className="about_lang_chip" key={lang.key}>
                    <strong>{t(`about.langNames.${lang.key}`)}</strong>
                    <span>{t(`about.langLevels.${lang.level}`)}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.15}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.skills")}</h3>
            </Col>
            <Col lg="7">
              {skills.map((data, i) => {
                return (
                  <div key={i}>
                    <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.value}%`,
                        }}
                      >
                        <div className="progress-value">{data.value}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={0.2}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.services")}</h3>
            </Col>
            <Col lg="7">
              {servicesKeys.map((key, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">
                      {t(`services.${key}.title`)}
                    </h5>
                    <p className="service_desc">
                      {t(`services.${key}.description`)}
                    </p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Reveal>
      </Container>
      <Reveal delay={0.25}>
        <a href={AgustinGarciaCV} download="Agustin_Garcia_Llorca_CV.pdf">
          <div className="button justify-content-center">
            {t("about.download")
              .split("")
              .map((letter, i) => (
                <div className="box" key={i}>
                  {letter}
                </div>
              ))}
          </div>
        </a>
      </Reveal>
    </HelmetProvider>
  );
};
