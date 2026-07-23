"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  size?: number;
};

export default function FloatingShape({
  className = "",
  size = 180,
}: Props) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [-18, 18, -18],
        x: [-8, 8, -8],
        rotate: [-12, 12, -12],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        fill="none"
      >
        {/* Outer diamond */}
        <polygon
          points="100,10 190,100 100,190 10,100"
          stroke="rgb(139 92 246 / .18)"
          strokeWidth="1.5"
        />

        {/* Inner diamond */}
        <polygon
          points="100,40 160,100 100,160 40,100"
          stroke="rgb(139 92 246 / .28)"
          strokeWidth="1.2"
        />

        {/* Square */}
        <rect
          x="55"
          y="55"
          width="90"
          height="90"
          stroke="rgb(139 92 246 / .20)"
          strokeWidth="1"
          transform="rotate(45 100 100)"
        />

        {/* Cross lines */}
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke="rgb(139 92 246 / .10)"
        />

        <line
          x1="10"
          y1="100"
          x2="190"
          y2="100"
          stroke="rgb(139 92 246 / .10)"
        />

        {/* Center glow */}
        <circle
          cx="100"
          cy="100"
          r="3"
          fill="#8b5cf6"
        />
      </svg>
    </motion.div>
  );
}