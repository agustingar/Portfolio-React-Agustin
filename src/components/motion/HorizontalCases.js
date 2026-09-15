import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "./horizontalcases.css";

const getDesktopPin = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 768px)").matches;

export const HorizontalCases = ({
  eyebrow,
  title,
  items = [],
  visitLabel = "See case",
}) => {
  const reducedMotion = useReducedMotion();
  const [pinMode, setPinMode] = useState(getDesktopPin);
  const [maxShift, setMaxShift] = useState(0);
  const ref = useRef(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setPinMode(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!pinMode || reducedMotion) return undefined;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const overflow = Math.max(track.scrollWidth - window.innerWidth + 48, 0);
      setMaxShift(overflow);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinMode, reducedMotion, items.length]);

  if (!items.length) return null;

  const head = (
    <div className="hz_cases_head">
      <p className="hz_cases_eyebrow">{eyebrow}</p>
      <h2 className="hz_cases_title">{title}</h2>
    </div>
  );

  const cards = items.map((item, i) => (
    <a
      key={item.id}
      className="hz_card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="hz_card_num">{String(i + 1).padStart(2, "0")}</span>
      <div className="hz_card_media_wrap">
        <div
          className="hz_card_media"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="hz_card_media_shade" />
      </div>
      <div className="hz_card_body">
        <p className="hz_card_tags">{item.tags}</p>
        <h3>{item.title}</h3>
        <span>{visitLabel} →</span>
      </div>
    </a>
  ));

  if (reducedMotion || !pinMode) {
    return (
      <div className="hz_cases hz_cases--static">
        {head}
        <div className="hz_cases_track hz_cases_track--swipe">{cards}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="hz_cases">
      <div className="hz_cases_sticky">
        {head}
        <motion.div ref={trackRef} className="hz_cases_track" style={{ x }}>
          {cards}
        </motion.div>
      </div>
    </div>
  );
};
