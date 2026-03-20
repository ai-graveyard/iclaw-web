"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProductSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#30d158] text-lg font-medium mb-4">
            {t("product.label") as string}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("product.heading") as string}
          </h2>
          <p className="text-xl text-[var(--gray-400)] max-w-2xl mx-auto">
            {t("product.desc") as string}
          </p>
        </FadeIn>

        {/* Two products side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* iClaw - Desktop AI (first) */}
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col items-center text-center">
              <motion.div
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full aspect-[4/3] mb-6"
              >
                <Image
                  src="/iclaw-product.png"
                  alt={t("product.iclaw.imageAlt") as string}
                  fill
                  className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
                />
              </motion.div>
              <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                {t("product.iclaw.name") as string}
              </h3>
              <p className="text-[#30d158] font-medium mb-3">
                {t("product.iclaw.tagline") as string}
              </p>
              <p className="text-[var(--gray-400)] text-base leading-relaxed">
                {t("product.iclaw.desc") as string}
              </p>
            </div>
          </FadeIn>

          {/* uClaw - USB AI (second) */}
          <FadeIn delay={0.4}>
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col items-center text-center">
              <motion.div
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full aspect-[4/3] mb-6"
              >
                <Image
                  src="/uclaw-product.png"
                  alt={t("product.uclaw.imageAlt") as string}
                  fill
                  className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
                />
              </motion.div>
              <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                {t("product.uclaw.name") as string}
              </h3>
              <p className="text-[#30d158] font-medium mb-3">
                {t("product.uclaw.tagline") as string}
              </p>
              <p className="text-[var(--gray-400)] text-base leading-relaxed">
                {t("product.uclaw.desc") as string}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
