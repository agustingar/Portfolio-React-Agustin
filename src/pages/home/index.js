import React, { useCallback, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  dataportfolio,
  featuredKeys,
  highlightKeys,
  introdata,
  processKeys,
  stats,
  techStack,
  testimonialKeys,
  valueKeys,
} from "../../content_option";
import { Link } from "react-router-dom";
import {
  CountUp,
  Magnetic,
  Reveal,
  TextReveal,
} from "../../components/motion";
import { EASE_OUT } from "../../components/motion/motionConfig";
import { useTranslation } from "../../i18n/LanguageContext";

export const Home = () => {
  const reducedMotion = useReducedMotion();
  const { t, language } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reducedMotion ? "0%" : "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 1.08]);

  const scrollToHighlights = useCallback(() => {
    const target = document.getElementById("home-highlights");
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [reducedMotion]);

  const featured = featuredKeys
    .map((key) => dataportfolio.find((item) => item.key === key))
    .filter(Boolean);

  const marqueeItems = [...techStack, ...techStack];

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("meta.title")}</title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>

        <div
          ref={heroRef}
          className="intro_sec d-block d-lg-flex align-items-center"
        >
          <motion.div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{
              backgroundImage: `url(${introdata.your_img_url})`,
              y: imageY,
              scale: imageScale,
            }}
            initial={reducedMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <div className="h_bg_frame" aria-hidden="true" />
            <div className="h_bg_glow" aria-hidden="true" />
          </motion.div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <Reveal delay={0.05}>
                  <span className="home_available">
                    <span className="home_available_dot" aria-hidden="true" />
                    {t("home.available")}
                  </span>
                </Reveal>
                <h2 className="mb-1x">
                  <TextReveal text={t("home.title")} delay={0.08} />
                </h2>
                <Reveal delay={0.2}>
                  <h1 className="fluidz-48 mb-1x title">
                    <Typewriter
                      key={language}
                      options={{
                        strings: [
                          t("home.animated.first"),
                          t("home.animated.second"),
                          t("home.animated.third"),
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="mb-1x">{t("home.description")}</p>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="intro_btn-action pb-5">
                    <Magnetic>
                      <Link to="/portfolio" className="text_2">
                        <div id="button_p" className="ac_btn btn">
                          {t("home.portfolioBtn")}
                        </div>
                      </Link>
                    </Magnetic>
                    <Magnetic>
                      <Link to="/contact">
                        <div id="button_h" className="ac_btn btn">
                          {t("home.contactBtn")}
                        </div>
                      </Link>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="scroll_hint"
            onClick={scrollToHighlights}
            aria-label={t("home.scroll")}
          >
            <span className="scroll_hint_label">{t("home.scroll")}</span>
            <span className="scroll_hint_line" aria-hidden="true" />
          </button>
        </div>

        <div className="home_marquee" aria-hidden="true">
          <div className="home_marquee_track">
            {marqueeItems.map((item, i) => (
              <span key={`${item}-${i}`} className="home_marquee_item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div id="home-highlights" className="home_highlights">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.highlightsTitle")}</p>
              <h2 className="home_highlights_title">
                <TextReveal text={t("home.highlightsSubtitle")} />
              </h2>
            </Reveal>

            <div className="home_stats">
              {stats.map((stat, i) => (
                <Reveal key={stat.key} delay={0.08 * i} className="home_stat">
                  <p className="home_stat_value">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="home_stat_label">{t(`home.stats.${stat.key}`)}</p>
                </Reveal>
              ))}
            </div>

            <div className="home_highlights_grid">
              {highlightKeys.map((key, i) => (
                <Reveal key={key} delay={0.1 + i * 0.1} className="home_card_wrap">
                  <article className="home_card">
                    <span className="home_card_index">0{i + 1}</span>
                    <h3>{t(`home.highlights.${key}.title`)}</h3>
                    <p>{t(`home.highlights.${key}.text`)}</p>
                    <span className="home_card_glow" aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_values">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.valuesTitle")}</p>
              <h2 className="home_highlights_title">{t("home.valuesSubtitle")}</h2>
            </Reveal>
            <div className="home_values_grid">
              {valueKeys.map((key, i) => (
                <Reveal key={key} delay={0.08 * i} className="home_value_card">
                  <span className="home_value_num">0{i + 1}</span>
                  <h3>{t(`home.values.${key}.title`)}</h3>
                  <p>{t(`home.values.${key}.text`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_featured">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.featuredTitle")}</p>
              <h2 className="home_highlights_title">{t("home.featuredSubtitle")}</h2>
            </Reveal>
            <div className="home_featured_grid">
              {featured.map((item, i) => (
                <Reveal key={item.key} delay={0.08 * i} className="home_featured_wrap">
                  <a
                    className="home_featured_card"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="home_featured_media"
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="home_featured_body">
                      <span className="home_featured_tag">
                        {(item.tags && item.tags[0]) || "Web"}
                      </span>
                      <h3>{t(`portfolio.items.${item.key}`)}</h3>
                      <p className="home_featured_blurb">
                        {t(`portfolio.blurbs.${item.key}`)}
                      </p>
                      <span className="home_featured_link">
                        {t("portfolio.viewProject")} →
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="home_highlights_cta">
                <Magnetic>
                  <Link to="/portfolio" className="ac_btn btn home_cta_btn">
                    {t("home.seeWork")}
                  </Link>
                </Magnetic>
                <Link to="/about" className="home_cta_link">
                  {t("home.aboutCta")} →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="home_process">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.processTitle")}</p>
              <h2 className="home_highlights_title">{t("home.processSubtitle")}</h2>
            </Reveal>
            <div className="home_process_grid">
              {processKeys.map((key, i) => (
                <Reveal key={key} delay={0.08 * i} className="home_process_item">
                  <span className="home_process_num">0{i + 1}</span>
                  <h3>{t(`home.process.${key}.title`)}</h3>
                  <p>{t(`home.process.${key}.text`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_testimonials">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.testimonialsTitle")}</p>
              <h2 className="home_highlights_title">
                {t("home.testimonialsSubtitle")}
              </h2>
            </Reveal>
            <div className="home_testimonials_grid">
              {testimonialKeys.map((key, i) => (
                <Reveal key={key} delay={0.1 * i} className="home_quote">
                  <p className="home_quote_text">
                    “{t(`home.testimonials.${key}.quote`)}”
                  </p>
                  <div className="home_quote_meta">
                    <strong>{t(`home.testimonials.${key}.author`)}</strong>
                    <span>{t(`home.testimonials.${key}.role`)}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_cta_band">
          <Reveal>
            <h2>
              <TextReveal text={t("home.ctaBandTitle")} />
            </h2>
            <p>{t("home.ctaBandText")}</p>
            <Magnetic>
              <Link to="/contact" className="ac_btn btn">
                {t("home.contactBtn")}
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </HelmetProvider>
  );
};
