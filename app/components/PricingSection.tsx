"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function PricingSection() {
  const { t } = useLanguage();

  const features = t("pricing.features") as string[];

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#2997ff] text-lg font-medium mb-4">{t("pricing.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("pricing.heading") as string}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl p-10 sm:p-12 bg-gradient-to-b from-[#2997ff]/10 to-transparent border-2 border-[#2997ff]/30 text-center"
          >
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-2">iClaw</h3>
            <div className="mb-2">
              <span className="text-5xl sm:text-6xl font-bold text-[var(--foreground)]">
                {t("pricing.price") as string}
              </span>
            </div>
            <p className="text-[var(--gray-400)] text-base mb-10">{t("pricing.desc") as string}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[var(--gray-300)]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2997ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-full text-base font-medium bg-[#2997ff] text-white hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(41,151,255,0.3)] transition-all duration-300"
            >
              {t("pricing.cta") as string}
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
