import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { pageTransition, reducedPageTransition } from "./motionConfig";

export const AnimatedPage = ({ children }) => {
  const reducedMotion = useReducedMotion();
  const config = reducedMotion ? reducedPageTransition : pageTransition;

  return (
    <motion.div
      initial={config.initial}
      animate={config.animate}
      exit={config.exit}
      transition={config.transition}
    >
      {children}
    </motion.div>
  );
};
