"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function VisionSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 animated-gradient-bg" />

      <div className="relative max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="text-[#bf5af2] text-lg font-medium mb-4">Our Vision</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            AI shouldn&apos;t belong
            <br />
            only to engineers.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-3xl mx-auto mb-16 leading-relaxed">
            We believe everyone deserves access to AI — without needing a
            computer science degree. iClaw puts the power of a personal AI
            factory in your hands.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Accessible",
                desc: "No coding, no configuration. Just plug in and start creating.",
              },
              {
                number: "02",
                title: "Private",
                desc: "Your data stays on your device. Always under your control.",
              },
              {
                number: "03",
                title: "Powerful",
                desc: "Run state-of-the-art AI models locally with desktop-grade performance.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-left"
              >
                <span className="text-sm text-[#2997ff] font-mono">
                  {item.number}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#86868b] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
