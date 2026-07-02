"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  size?: number;
};

export default function FloatingShape({
  className = "",
  size = 140,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-xl border border-violet-500/20 rotate-12" />

        <div className="absolute inset-4 rounded-xl border border-violet-500/20 -rotate-12" />
      </div>
    </motion.div>
  );
}