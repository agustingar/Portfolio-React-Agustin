import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "./motionConfig";

export const TextReveal = ({
  text = "",
  as = "span",
  className = "",
  delay = 0,
}) => {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] || motion.span;
  const words = String(text).split(" ");

  if (reducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={`text_reveal ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span className="text_reveal_word" key={`${word}-${i}`}>
          <motion.span
            className="text_reveal_inner"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.045,
              ease: EASE_OUT,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Component>
  );
};
