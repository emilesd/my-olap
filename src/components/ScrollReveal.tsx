"use client";

import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const offset = offsets[direction];

  const hidden: Variant = {
    opacity: 0,
    ...(offset.x !== undefined && { x: offset.x }),
    ...(offset.y !== undefined && { y: offset.y }),
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offset = offsets[direction];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...(offset.x !== undefined && { x: offset.x }),
          ...(offset.y !== undefined && { y: offset.y }),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
