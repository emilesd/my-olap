"use client";

import { motion, type Variants } from "framer-motion";

const nodes = [
  { label: "ERP", x: 0, y: 0 },
  { label: "CSV", x: 0, y: 1 },
  { label: "XLS", x: 0, y: 2 },
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

const pulseVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 1.5 + i * 0.15, ease: "easeOut" as const },
  }),
};

export default function DataFlowAnimation() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full max-w-md mx-auto"
    >
      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none">
        {/* Source nodes */}
        {nodes.map((node, i) => (
          <g key={node.label}>
            <motion.rect
              custom={i}
              variants={pulseVariants}
              x={20}
              y={30 + i * 65}
              width={72}
              height={32}
              rx={6}
              className="fill-white/10 stroke-blue-300/40"
              strokeWidth={1}
            />
            <motion.text
              custom={i}
              variants={pulseVariants}
              x={56}
              y={50 + i * 65}
              textAnchor="middle"
              className="fill-blue-200 text-[11px] font-medium"
            >
              {node.label}
            </motion.text>

            {/* Flow lines from source to cube */}
            <motion.path
              custom={i}
              variants={pathVariants}
              d={`M 92 ${46 + i * 65} C 150 ${46 + i * 65}, 150 100, 185 100`}
              className="stroke-blue-400/50"
              strokeWidth={1.5}
              strokeLinecap="round"
            />

            {/* Animated dot traveling along path */}
            <motion.circle
              r={3}
              className="fill-blue-400"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 2,
                delay: 2 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              style={{
                offsetPath: `path('M 92 ${46 + i * 65} C 150 ${46 + i * 65}, 150 100, 185 100')`,
              }}
            />
          </g>
        ))}

        {/* Central OLAP cube icon */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "215px 100px" }}
        >
          <rect x={185} y={75} width={60} height={50} rx={8} className="fill-accent/20 stroke-accent" strokeWidth={1.5} />
          <text x={215} y={96} textAnchor="middle" className="fill-white text-[9px] font-bold tracking-wider">
            MyOlap
          </text>
          <text x={215} y={112} textAnchor="middle" className="fill-blue-300/70 text-[8px]">
            OLAP Cube
          </text>
        </motion.g>

        {/* Output lines from cube to results */}
        {[
          { label: "Reports", y: 40 },
          { label: "Analytics", y: 100 },
          { label: "Power BI", y: 160 },
        ].map((out, i) => (
          <g key={out.label}>
            <motion.path
              custom={i}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 0.8, delay: 1.8 + i * 0.15, ease: "easeInOut" as const },
                    opacity: { duration: 0.3, delay: 1.8 + i * 0.15 },
                  },
                },
              }}
              d={`M 245 100 C 280 100, 280 ${out.y}, 310 ${out.y}`}
              className="stroke-blue-400/50"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
            <motion.rect
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.5 + i * 0.15 }}
              x={310}
              y={out.y - 16}
              width={72}
              height={32}
              rx={6}
              className="fill-white/10 stroke-blue-300/40"
              strokeWidth={1}
              style={{ transformOrigin: `346px ${out.y}px` }}
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.7 + i * 0.15 }}
              x={346}
              y={out.y + 4}
              textAnchor="middle"
              className="fill-blue-200 text-[11px] font-medium"
            >
              {out.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
