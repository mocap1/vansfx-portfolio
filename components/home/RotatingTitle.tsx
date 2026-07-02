"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "VIDEO EDITOR",
  "MOTION DESIGNER",
  "PRODUCTION MANAGER",
];

export default function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={titles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-violet-400"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}