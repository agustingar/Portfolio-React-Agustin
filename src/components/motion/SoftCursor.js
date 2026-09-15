import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import "./softcursor.css";

export const SoftCursor = () => {
  const reducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return undefined;

    document.body.classList.add("has_soft_cursor");

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      setHovering(
        Boolean(
          target.closest(
            "a, button, .po_dest_card, .home_feat_row, .hz_card, .scroll_story_dot"
          )
        )
      );
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      document.body.classList.remove("has_soft_cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [reducedMotion]);

  if (!enabled || reducedMotion) return null;

  return (
    <>
      <motion.div
        className={`soft_cursor_dot ${hovering ? "is-hover" : ""}`}
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className={`soft_cursor_ring ${hovering ? "is-hover" : ""}`}
        animate={{ x: pos.x - 18, y: pos.y - 18 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.35 }}
      />
    </>
  );
};
