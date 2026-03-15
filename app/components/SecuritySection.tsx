"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function SecuritySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#30d158]/10 border border-[#30d158]/20 mb-8">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#30d158"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#30d158] text-lg font-medium mb-4">
            Security & Privacy
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Your data stays yours.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-16">
            iClaw runs entirely on your local network. Your conversations,
            files, and AI models never leave your device.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Processing",
              desc: "All AI computation happens on-device. No cloud, no latency, no data leaks.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              ),
            },
            {
              title: "Encrypted Storage",
              desc: "All local data is encrypted at rest using industry-standard protocols.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
            },
            {
              title: "Zero Telemetry",
              desc: "No tracking, no analytics, no usage data collection. Absolute privacy.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.3 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 text-center h-full"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#30d158]/10 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
