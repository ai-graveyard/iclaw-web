"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const specs = [
  { label: "OS", value: "Linux" },
  { label: "Processor", value: "RK / Allwinner Quad-core" },
  { label: "Memory", value: "4 GB" },
  { label: "Storage", value: "32 GB + SD" },
  { label: "Software", value: "OpenClaw" },
  { label: "Connectivity", value: "WiFi" },
  { label: "Noise", value: "Silent operation" },
  { label: "Footprint", value: "Compact desktop" },
];

export default function DesignSection() {
  return (
    <section id="design" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#a1a1a6] text-lg font-medium mb-4">Design</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Crafted with precision.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            A desktop AI server that looks as good as it performs. Minimal,
            silent, and built to last.
          </p>
        </FadeIn>

        {/* Product showcase */}
        <FadeIn delay={0.2}>
          <div className="relative max-w-4xl mx-auto mb-20">
            <motion.div
              whileInView={{ scale: [0.96, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/iclaw-design.png"
                alt="iClaw industrial design - premium aluminum body"
                fill
                className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
              />
            </motion.div>
          </div>
        </FadeIn>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <FadeIn key={spec.label} delay={i * 0.1}>
              <div className="text-center py-4">
                <p className="text-[#86868b] text-sm mb-2">{spec.label}</p>
                <p className="text-white text-lg font-semibold">{spec.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
