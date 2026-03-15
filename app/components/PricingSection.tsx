"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

const featuredIndex = 1;

export default function PricingSection() {
  const { t } = useLanguage();

  const plans = t("pricing.plans") as { name: string; price: string; desc: string; features: string[]; cta: string }[];

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#2997ff] text-lg font-medium mb-4">{t("pricing.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {t("pricing.heading") as string}
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            {t("pricing.desc") as string}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isFeatured = i === featuredIndex;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    isFeatured
                      ? "bg-gradient-to-b from-[#2997ff]/10 to-transparent border-2 border-[#2997ff]/30"
                      : "glass-card"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2997ff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {t("pricing.mostPopular") as string}
                    </span>
                  )}

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[#86868b] text-sm mb-6">{plan.desc}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="text-sm text-[#a1a1a6] flex items-center gap-3"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isFeatured ? "#2997ff" : "#424245"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      isFeatured
                        ? "bg-[#2997ff] text-white hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(41,151,255,0.3)]"
                        : "border border-[#424245] text-white hover:border-[#86868b]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
