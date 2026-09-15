import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "./scrollstory.css";

const getDesktopPin = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 768px)").matches;

export const ScrollStory = ({ eyebrow, title, panels = [], hint }) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const [pinMode, setPinMode] = useState(getDesktopPin);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setPinMode(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!panels.length || !pinMode || reducedMotion) return;
    const max = panels.length - 1;
    const idx = Math.min(max, Math.max(0, Math.round(v * max)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  if (!panels.length) return null;

  if (reducedMotion || !pinMode) {
    return (
      <div className="scroll_story scroll_story--static">
        <div className="scroll_story_inner scroll_story_inner--stack">
          <p className="scroll_story_eyebrow">{eyebrow}</p>
          <h2 className="scroll_story_title">{title}</h2>
          <div className="scroll_story_static_grid">
            {panels.map((panel) => (
              <article key={panel.id} className="scroll_story_static_card">
                {panel.image ? (
                  <div className="scroll_story_media_wrap">
                    <div
                      className="scroll_story_media is-active"
                      style={{ backgroundImage: `url(${panel.image})` }}
                    />
                    <div className="scroll_story_media_shade" />
                  </div>
                ) : null}
                <p className="scroll_story_tag">{panel.tag}</p>
                <h3>{panel.heading}</h3>
                <p>{panel.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="scroll_story"
      style={{ "--story-steps": Math.max(panels.length, 1) }}
    >
      <div className="scroll_story_sticky">
        <div className="scroll_story_inner">
          <div className="scroll_story_copy">
            <p className="scroll_story_eyebrow">{eyebrow}</p>
            <h2 className="scroll_story_title">{title}</h2>
            <div className="scroll_story_progress" aria-hidden="true">
              <motion.span style={{ width: progressWidth }} />
            </div>
            <div className="scroll_story_dots" role="tablist" aria-label={title}>
              {panels.map((panel, i) => (
                <button
                  key={panel.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`scroll_story_dot ${i === active ? "is-active" : ""}`}
                  onClick={() => {
                    if (!ref.current) return;
                    const rect = ref.current.getBoundingClientRect();
                    const top =
                      window.scrollY +
                      rect.top +
                      (rect.height * i) / Math.max(panels.length - 1, 1);
                    window.scrollTo({ top, behavior: "smooth" });
                  }}
                />
              ))}
            </div>
            <div className="scroll_story_panels">
              {panels.map((panel, i) => (
                <article
                  key={panel.id}
                  className={`scroll_story_panel ${
                    i === active ? "is-active" : ""
                  }`}
                  aria-hidden={i !== active}
                >
                  <p className="scroll_story_tag">{panel.tag}</p>
                  <h3>{panel.heading}</h3>
                  <p>{panel.text}</p>
                  <span className="scroll_story_index">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(panels.length).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
            {hint ? <p className="scroll_story_hint">{hint}</p> : null}
          </div>

          <div className="scroll_story_visual" aria-hidden="true">
            {panels.map((panel, i) => (
              <div
                key={panel.id}
                className={`scroll_story_media ${
                  i === active ? "is-active" : ""
                }`}
                style={{ backgroundImage: `url(${panel.image})` }}
              />
            ))}
            <div className="scroll_story_media_shade" />
            <div className="scroll_story_frame" />
          </div>
        </div>
      </div>
    </div>
  );
};
