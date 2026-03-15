"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#2997ff]/15 via-[#bf5af2]/15 to-[#30d158]/15 blur-[120px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Start building
            <br />
            <span className="gradient-text">with AI.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto mb-12">
            AI belongs to everyone. Join thousands who are already using iClaw to
            power their work and creativity.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Pre-order Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-[#424245] text-white px-10 py-4 rounded-full text-lg font-medium hover:border-[#86868b] transition-all duration-300"
            >
              Join Community
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
