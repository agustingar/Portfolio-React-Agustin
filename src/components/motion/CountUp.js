import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export const CountUp = ({
  to = 0,
  suffix = "",
  prefix = "",
  duration = 1.4,
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setValue(to);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};
