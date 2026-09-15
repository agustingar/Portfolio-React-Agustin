import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, revealOffsets } from "./motionConfig";

export const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as = "div",
  amount = 0.15,
}) => {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const offset = revealOffsets[direction] || revealOffsets.up;

  return (
    <Component
      className={className}
      initial={reducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        delay: reducedMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </Component>
  );
};
