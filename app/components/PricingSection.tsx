"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function PricingSection() {
  const { t } = useLanguage();

  const features = t("pricing.features") as string[];
  const enterprise = t("pricing.enterprise") as {
    name: string;
    desc: string;
    features: string[];
    cta: string;
  };

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#2997ff] text-lg font-medium mb-4">{t("pricing.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("pricing.heading") as string}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* iClaw Card */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl p-10 bg-gradient-to-b from-[#2997ff]/10 to-transparent border-2 border-[#2997ff]/30 text-center h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2">iClaw</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-[var(--foreground)]">
                  {t("pricing.price") as string}
                </span>
              </div>
              <p className="text-[var(--gray-400)] text-sm mb-8">{t("pricing.desc") as string}</p>

              <ul className="space-y-3 mb-8 flex-1 text-left">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[var(--gray-300)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2997ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium bg-[#2997ff] text-white hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(41,151,255,0.3)] transition-all duration-300"
              >
                {t("pricing.cta") as string}
              </a>
            </motion.div>
          </FadeIn>

          {/* Enterprise Card */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative glass-card rounded-3xl p-10 text-center h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2">{enterprise.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold gradient-text">∞</span>
              </div>
              <p className="text-[var(--gray-400)] text-sm mb-8">{enterprise.desc}</p>

              <ul className="space-y-3 mb-8 flex-1 text-left">
                {enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[var(--gray-300)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#424245" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium border border-[var(--gray-600)] text-[var(--foreground)] hover:border-[var(--gray-400)] transition-all duration-300"
              >
                {enterprise.cta}
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
