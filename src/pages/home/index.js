import React, { useCallback, useMemo, useRef } from "react";
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
  HorizontalCases,
  Magnetic,
  Reveal,
  ScrollStory,
  TextReveal,
} from "../../components/motion";
import { EASE_OUT } from "../../components/motion/motionConfig";
import { useTranslation } from "../../i18n/LanguageContext";

const STORY_KEYS = ["craft", "product", "apps"];
const FOCUS_STACK = [
  "Wordpress",
  "React",
  "React Native",
  "Shopify",
  "PrestaShop",
  "PHP",
  "Node.js",
  "Firebase",
  "Expo",
  "Laravel",
];

export const Home = () => {
  const reducedMotion = useReducedMotion();
  const { t, language } = useTranslation();
  const heroRef = useRef(null);
  const splitRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: splitProgress } = useScroll({
    target: splitRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reducedMotion ? "0%" : "18%"]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reducedMotion ? 1 : 1.08]
  );
  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reducedMotion ? "0%" : "-8%"]
  );
  const splitLeftX = useTransform(
    splitProgress,
    [0, 1],
    [reducedMotion ? "0%" : "-12%", "8%"]
  );
  const splitRightX = useTransform(
    splitProgress,
    [0, 1],
    [reducedMotion ? "0%" : "12%", "-8%"]
  );

  const scrollToHighlights = useCallback(() => {
    const target = document.getElementById("home-highlights");
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [reducedMotion]);

  const featured = useMemo(
    () =>
      featuredKeys
        .map((key) => dataportfolio.find((item) => item.key === key))
        .filter(Boolean),
    []
  );

  const storyPanels = useMemo(() => {
    const byKey = Object.fromEntries(
      dataportfolio.map((item) => [item.key, item])
    );
    const imageMap = {
      craft: byKey.selectyourvet || byKey.lechuzas || featured[0],
      product: byKey.waqua || byKey.anartxy || featured[1],
      apps: byKey.partfri || byKey.guardify || featured[2],
    };
    return STORY_KEYS.map((key) => {
      const project = imageMap[key];
      return {
        id: key,
        tag: t(`home.story.${key}.tag`),
        heading: t(`home.story.${key}.heading`),
        text: t(`home.story.${key}.text`),
        image: project?.img || introdata.your_img_url,
      };
    });
  }, [featured, t]);

  const caseItems = useMemo(
    () =>
      featured.map((item) => ({
        id: item.key,
        title: t(`portfolio.items.${item.key}`),
        tags: (item.tags || []).slice(0, 2).join(" / "),
        image: item.img,
        href: item.link,
      })),
    [featured, t]
  );

  const marqueeItems = [...techStack, ...techStack];
  const talkLoop = `${t("home.talkMarquee")}${t("home.talkMarquee")}`;

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
                  <div className="home_hero_meta">
                    <span className="home_available">
                      <span className="home_available_dot" aria-hidden="true" />
                      {t("home.available")}
                    </span>
                    <span className="home_folio">{t("home.folioLabel")}</span>
                  </div>
                </Reveal>

                <motion.div className="home_giant" style={{ x: titleX }}>
                  <p className="home_giant_line">
                    <span>{t("home.heroLine1")}</span>
                    <span className="home_giant_dash" aria-hidden="true">
                      ——
                    </span>
                    <span className="home_giant_accent">
                      {t("home.heroLine2")}
                    </span>
                  </p>
                  <h1 className="home_giant_main">{t("home.heroLine3")}</h1>
                </motion.div>

                <h2 className="mb-1x home_hero_name">
                  <TextReveal text={t("home.title")} delay={0.08} />
                </h2>
                <Reveal delay={0.2}>
                  <h3 className="fluidz-48 mb-1x title home_typewriter">
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
                  </h3>
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

        <div ref={splitRef} className="home_split">
          <p className="home_split_eyebrow">{t("home.splitEyebrow")}</p>
          <motion.h2 className="home_split_left" style={{ x: splitLeftX }}>
            {t("home.splitLeft")}
          </motion.h2>
          <motion.h2 className="home_split_right" style={{ x: splitRightX }}>
            {t("home.splitRight")}
          </motion.h2>
          <Reveal>
            <p className="home_split_text">{t("home.splitText")}</p>
          </Reveal>
        </div>

        <div id="home-highlights" className="home_highlights">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">
                {t("home.highlightsTitle")}
              </p>
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
                  <p className="home_stat_label">
                    {t(`home.stats.${stat.key}`)}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="home_highlights_grid">
              {highlightKeys.map((key, i) => (
                <Reveal
                  key={key}
                  delay={0.1 + i * 0.1}
                  className="home_card_wrap"
                >
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

        <ScrollStory
          eyebrow={t("home.storyEyebrow")}
          title={t("home.storyTitle")}
          panels={storyPanels}
          hint={t("home.scrollHint")}
        />

        <div className="home_values">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">{t("home.valuesTitle")}</p>
              <h2 className="home_highlights_title">
                {t("home.valuesSubtitle")}
              </h2>
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

        <HorizontalCases
          eyebrow={t("home.casesEyebrow")}
          title={t("home.casesTitle")}
          items={caseItems}
          visitLabel={t("home.seeCase")}
        />

        <div className="home_featured home_featured--cta">
          <div className="home_highlights_inner">
            <Reveal delay={0.05}>
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
              <h2 className="home_highlights_title">
                {t("home.processSubtitle")}
              </h2>
            </Reveal>
            <div className="home_process_grid">
              {processKeys.map((key, i) => (
                <Reveal
                  key={key}
                  delay={0.08 * i}
                  className="home_process_item"
                >
                  <span className="home_process_num">0{i + 1}</span>
                  <h3>{t(`home.process.${key}.title`)}</h3>
                  <p>{t(`home.process.${key}.text`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_interests">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">
                {t("home.interestsTitle")}
              </p>
              <h2 className="home_highlights_title">
                {t("home.interestsSubtitle")}
              </h2>
            </Reveal>
            <div className="home_focus_grid">
              {FOCUS_STACK.map((item, i) => (
                <Reveal key={item} delay={0.03 * i} className="home_focus_chip">
                  <span>{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="home_testimonials">
          <div className="home_highlights_inner">
            <Reveal>
              <p className="home_highlights_eyebrow">
                {t("home.testimonialsTitle")}
              </p>
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

        <div className="home_talk_marquee" aria-hidden="true">
          <div className="home_talk_track">{talkLoop}</div>
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
