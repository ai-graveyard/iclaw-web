"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

const icons: ReactNode[] = [
  <svg key="pen" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>,
  <svg key="code" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>,
  <svg key="gear" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="m15.2 7.6 2.4-2.4" />
    <path d="M18 12h4" />
    <path d="m15.2 16.4 2.4 2.4" />
    <path d="M12 18v4" />
    <path d="m4.9 19.1 2.4-2.4" />
    <path d="M2 12h4" />
    <path d="m4.9 4.9 2.4 2.4" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
  <svg key="chart" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 5 5-9" />
  </svg>,
];

const styles = [
  { gradient: "from-[#2997ff]/10 to-[#2997ff]/5", border: "border-[#2997ff]/20", color: "#2997ff" },
  { gradient: "from-[#bf5af2]/10 to-[#bf5af2]/5", border: "border-[#bf5af2]/20", color: "#bf5af2" },
  { gradient: "from-[#ff9f0a]/10 to-[#ff9f0a]/5", border: "border-[#ff9f0a]/20", color: "#ff9f0a" },
  { gradient: "from-[#30d158]/10 to-[#30d158]/5", border: "border-[#30d158]/20", color: "#30d158" },
];

export default function AIPowerSection() {
  const { t } = useLanguage();
  const capabilityItems = t("aiPower.capabilities") as { title: string; desc: string }[];
  const tags = t("aiPower.tags") as string[];

  return (
    <section id="ai-power" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#bf5af2] text-lg font-medium mb-4">{t("aiPower.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("aiPower.heading") as string}
          </h2>
          <p className="text-xl text-[var(--gray-400)] max-w-2xl mx-auto">
            {t("aiPower.desc") as string}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilityItems.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl bg-gradient-to-br ${styles[i].gradient} border ${styles[i].border} p-10 h-full overflow-hidden`}
              >
                <div
                  className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    color: styles[i].color,
                    background: `${styles[i].color}15`,
                  }}
                >
                  {icons[i]}
                </div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-[var(--gray-300)] text-lg leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Agent / Workflow / Automation badges */}
        <FadeIn delay={0.4} className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-[var(--gray-300)] border border-[var(--gray-600)] hover:border-[var(--gray-400)] hover:text-[var(--foreground)] transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
