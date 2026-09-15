import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useReducedMotion } from "motion/react";
import {
  worktimeline,
  skills,
  servicesKeys,
  education,
  languages,
  introdata,
  stats,
  socialprofils,
} from "../../content_option";
import AgustinGarciaCV from "../../assets/pdf/AgustinCV2025.pdf";
import { CountUp, Magnetic, Reveal, TextReveal } from "../../components/motion";
import { EASE_OUT } from "../../components/motion/motionConfig";
import { useTranslation } from "../../i18n/LanguageContext";

const SkillBar = ({ name, value, delay = 0 }) => {
  const reducedMotion = useReducedMotion();
  return (
    <div className="about_skill">
      <h3 className="progress-title">{name}</h3>
      <div className="progress">
        <motion.div
          className="progress-bar"
          initial={reducedMotion ? false : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay, ease: EASE_OUT }}
        >
          <div className="progress-value">{value}%</div>
        </motion.div>
      </div>
    </div>
  );
};

export const About = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <section className="about_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("about.pageTitle")} | {t("meta.title")}
          </title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>

        <div className="about_hero">
          <Container>
            <Row className="align-items-center g-4">
              <Col lg="7">
                <Reveal>
                  <p className="about_hero_eyebrow">{t("about.heroEyebrow")}</p>
                  <h1 className="about_hero_title">
                    <TextReveal text={t("about.heroTitle")} />
                  </h1>
                  <p className="about_hero_lead">{t("about.aboutme")}</p>
                  <div className="about_focus_row">
                    <span className="about_focus_label">
                      {t("about.focusLabel")}
                    </span>
                    <span className="about_focus_chip">{t("about.focusWeb")}</span>
                    <span className="about_focus_chip">
                      {t("about.focusShop")}
                    </span>
                    <span className="about_focus_chip">
                      {t("about.focusApps")}
                    </span>
                  </div>
                  <div className="about_hero_actions">
                    <Magnetic>
                      <a
                        href={AgustinGarciaCV}
                        download="Agustin_Garcia_Llorca_CV.pdf"
                        className="ac_btn btn"
                      >
                        {t("about.download")}
                      </a>
                    </Magnetic>
                    <a
                      href={socialprofils.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="about_hero_link"
                    >
                      LinkedIn →
                    </a>
                  </div>
                </Reveal>
              </Col>
              <Col lg="5">
                <Reveal delay={0.1}>
                  <div className="about_portrait_wrap">
                    <div
                      className="about_portrait"
                      style={{
                        backgroundImage: `url(${introdata.your_img_url})`,
                      }}
                      role="img"
                      aria-label="Agustín García"
                    />
                    <div className="about_portrait_frame" aria-hidden="true" />
                    <div className="about_now about_now--float">
                      <p className="about_now_label">{t("about.nowTitle")}</p>
                      <p className="about_now_text">{t("about.nowText")}</p>
                    </div>
                  </div>
                </Reveal>
              </Col>
            </Row>

            <div className="about_stats">
              {stats.map((stat, i) => (
                <Reveal key={stat.key} delay={0.05 * i} className="about_stat">
                  <p className="about_stat_value">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="about_stat_label">
                    {t(`home.stats.${stat.key}`)}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>

        <Container className="About-header about_body">
          <Row className="sec_sp">
            <Col lg="5">
              <Reveal>
                <h3 className="color_sec py-4">{t("about.timeline")}</h3>
              </Reveal>
            </Col>
            <Col lg="7">
              <div className="about_timeline">
                {worktimeline.map((data, i) => (
                  <Reveal key={data.key} delay={0.06 * i}>
                    <article className="about_timeline_item">
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
                  </Reveal>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <Reveal>
                <h3 className="color_sec py-4">{t("about.education")}</h3>
              </Reveal>
            </Col>
            <Col lg="7">
              <div className="about_timeline">
                {education.map((item, i) => (
                  <Reveal key={item.key} delay={0.06 * i}>
                    <article className="about_timeline_item">
                      <span className="about_timeline_dot" aria-hidden="true" />
                      <div className="about_timeline_meta">
                        <span className="about_timeline_date">{item.date}</span>
                      </div>
                      <h4>{item.place}</h4>
                      <p>{t(`about.educationItems.${item.key}`)}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Col>
          </Row>

          <Reveal delay={0.08}>
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

          <Row className="sec_sp">
            <Col lg="5">
              <Reveal>
                <h3 className="color_sec py-4">{t("about.skills")}</h3>
              </Reveal>
            </Col>
            <Col lg="7">
              {skills.map((data, i) => (
                <SkillBar
                  key={data.name}
                  name={data.name}
                  value={data.value}
                  delay={Math.min(i * 0.05, 0.3)}
                />
              ))}
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <Reveal>
                <h3 className="color_sec py-4">{t("about.services")}</h3>
              </Reveal>
            </Col>
            <Col lg="7">
              <div className="about_services_grid">
                {servicesKeys.map((key, i) => (
                  <Reveal key={key} delay={0.06 * i}>
                    <article className="about_service_card">
                      <span className="about_service_num">0{i + 1}</span>
                      <h5 className="service__title">
                        {t(`services.${key}.title`)}
                      </h5>
                      <p className="service_desc">
                        {t(`services.${key}.description`)}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
