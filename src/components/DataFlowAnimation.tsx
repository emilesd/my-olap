"use client";

import { motion, type Variants } from "framer-motion";

const inputs = [
  { label: "ERP" },
  { label: "CSV" },
  { label: "XLS" },
];

const outputs = [
  { label: "Reports" },
  { label: "Analytics" },
  { label: "AI Agents" },
];

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, delay: 0.3 + i * 0.2, ease: "easeInOut" as const },
      opacity: { duration: 0.3, delay: 0.3 + i * 0.2 },
    },
  }),
};

const outputPathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1, delay: 1.6 + i * 0.15, ease: "easeInOut" as const },
      opacity: { duration: 0.3, delay: 1.6 + i * 0.15 },
    },
  }),
};

const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.1 + i * 0.12, ease: "easeOut" as const },
  }),
};

const outputNodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 2.2 + i * 0.12, ease: "easeOut" as const },
  }),
};

function FlowDot({ path, delay }: { path: string; delay: number }) {
  return (
    <motion.circle
      r={2.5}
      className="fill-blue-400"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        offsetDistance: ["0%", "100%"],
      }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut" as const,
      }}
      style={{ offsetPath: `path('${path}')` }}
    />
  );
}

export default function DataFlowAnimation() {
  const inputPaths = inputs.map((_, i) => `M 92 ${46 + i * 58} C 145 ${46 + i * 58}, 145 95, 180 95`);
  const outputPaths = outputs.map((_, i) => {
    const targetY = 38 + i * 58;
    return `M 250 95 C 285 95, 285 ${targetY}, 318 ${targetY}`;
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      <svg viewBox="0 0 430 190" className="w-full h-auto" fill="none">
        {/* Input nodes and paths */}
        {inputs.map((node, i) => {
          const y = 46 + i * 58;
          return (
            <g key={`in-${node.label}`}>
              {/* Node */}
              <motion.rect custom={i} variants={nodeVariants} x={20} y={y - 16} width={72} height={32} rx={6} className="fill-white/10 stroke-blue-300/40" strokeWidth={1} />
              <motion.text custom={i} variants={nodeVariants} x={56} y={y + 4} textAnchor="middle" className="fill-blue-200 text-[11px] font-medium">{node.label}</motion.text>

              {/* Path to cube */}
              <motion.path custom={i} variants={pathVariants} d={inputPaths[i]} className="stroke-blue-400/50" strokeWidth={1.5} strokeLinecap="round" />

              {/* Animated dot */}
              <FlowDot path={inputPaths[i]} delay={2.5 + i * 0.6} />
            </g>
          );
        })}

        {/* Central MyOlap cube */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" as const }}
          style={{ transformOrigin: "215px 95px" }}
        >
          <rect x={180} y={70} width={70} height={50} rx={10} className="fill-accent/25 stroke-accent" strokeWidth={1.5} />
          {/* Pulse ring */}
          <motion.rect
            x={180} y={70} width={70} height={50} rx={10}
            className="fill-transparent stroke-accent/30"
            strokeWidth={1}
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            style={{ transformOrigin: "215px 95px" }}
          />
          <text x={215} y={91} textAnchor="middle" className="fill-white text-[10px] font-bold tracking-wider">MyOlap</text>
          <text x={215} y={107} textAnchor="middle" className="fill-blue-300/60 text-[8px]">OLAP Cube</text>
        </motion.g>

        {/* Output paths and nodes */}
        {outputs.map((node, i) => {
          const y = 38 + i * 58;
          return (
            <g key={`out-${node.label}`}>
              {/* Path from cube */}
              <motion.path custom={i} variants={outputPathVariants} d={outputPaths[i]} className="stroke-blue-400/50" strokeWidth={1.5} strokeLinecap="round" />

              {/* Animated dot flowing out */}
              <FlowDot path={outputPaths[i]} delay={3.5 + i * 0.6} />

              {/* Output node */}
              <motion.rect custom={i} variants={outputNodeVariants} x={318} y={y - 16} width={80} height={32} rx={6} className="fill-white/10 stroke-blue-300/40" strokeWidth={1} />
              <motion.text custom={i} variants={outputNodeVariants} x={358} y={y + 4} textAnchor="middle" className="fill-blue-200 text-[11px] font-medium">{node.label}</motion.text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
