import React, { useMemo, useState, useCallback, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { dataportfolio } from "../../content_option";
import { Reveal } from "../../components/motion";
import { EASE_OUT } from "../../components/motion/motionConfig";
import { useTranslation } from "../../i18n/LanguageContext";

const FILTERS = [
  { id: "all", labelKey: "portfolio.filterAll" },
  { id: "web", labelKey: "portfolio.filterWeb" },
  { id: "code", labelKey: "portfolio.filterCode" },
  { id: "shop", labelKey: "portfolio.filterShop" },
  { id: "app", labelKey: "portfolio.filterApp" },
];

const SIZE_CYCLE = ["wide", "tall", "default", "tall", "default", "wide"];

const getSize = (index) => SIZE_CYCLE[index % SIZE_CYCLE.length];

const scrollVariants = {
  wide: { opacity: 0, y: 48, scale: 0.96 },
  tall: { opacity: 0, x: -36, scale: 0.97 },
  default: { opacity: 0, y: 36, scale: 0.98 },
};

const PortfolioCard = ({ data, index, t }) => {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const title = t(`portfolio.items.${data.key}`);
  const tagsLine = (data.tags || []).join(" • ");
  const size = getSize(index);
  const from = scrollVariants[size] || scrollVariants.default;

  const handlePointerMove = useCallback(
    (e) => {
      if (reducedMotion) return;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const xRot = (py - 0.5) * -10;
      const yRot = (px - 0.5) * 10;
      setTransform(
        `perspective(1100px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`
      );
      setSpotlight({ x: px * 100, y: py * 100 });
    },
    [reducedMotion]
  );

  const resetTilt = () => {
    setHovered(false);
    setTransform(
      "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <motion.div
      layout
      className={`po_card_wrap is-${size}`}
      initial={reducedMotion ? false : from}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        ease: EASE_OUT,
        delay: reducedMotion ? 0 : Math.min((index % 6) * 0.06, 0.3),
      }}
    >
      <a
        ref={cardRef}
        className={`po_dest_card is-${size} ${hovered ? "is-active" : ""}`}
        href={data.link}
        target="_blank"
        rel="noreferrer"
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={resetTilt}
        style={{ transform }}
        aria-label={`${t("portfolio.open")}: ${title}`}
      >
        <div className="po_dest_media">
          <div
            className="po_dest_bg"
            style={{ backgroundImage: `url(${data.img})` }}
          />
          <div
            className="po_dest_spotlight"
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(127, 255, 209, 0.2), transparent 42%)`,
              opacity: hovered && !reducedMotion ? 1 : 0,
            }}
          />
        </div>
        <div className="po_dest_overlay" />
        <div className="po_dest_top">
          <span className="po_dest_index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="po_dest_badge">
            {(data.tags && data.tags[0]) || "Web"}
          </span>
        </div>
        <div className="po_dest_content">
          <p className="po_dest_stats">{tagsLine}</p>
          <h3 className="po_dest_title">{title}</h3>
          <p className="po_dest_blurb">{t(`portfolio.blurbs.${data.key}`)}</p>
          <span className="po_dest_cta">
            {t("portfolio.viewProject")}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return dataportfolio;
    return dataportfolio.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <HelmetProvider>
      <Container className="About-header portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("portfolio.pageTitle")} | {t("meta.title")}
          </title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>
        <Reveal>
          <Row className="mb-4 mt-3 pt-md-3">
            <Col lg="9">
              <h1 className="display-4 mb-3">{t("portfolio.pageTitle")}</h1>
              <p className="portfolio_subtitle">{t("portfolio.subtitle")}</p>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="po_toolbar">
            <div className="po_filters" role="tablist" aria-label="filters">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  className={`po_filter ${filter === item.id ? "active" : ""}`}
                  onClick={() => setFilter(item.id)}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
            <p className="po_count">
              {t("portfolio.count", { count: filtered.length })}
            </p>
          </div>
        </Reveal>

        <div className="po_grid mb-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((data, i) => (
              <PortfolioCard key={data.key} data={data} index={i} t={t} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </HelmetProvider>
  );
};
