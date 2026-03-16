"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function DesignSection() {
  const { t } = useLanguage();
  const specItems = t("design.specs") as { label: string; value: string }[];

  return (
    <section id="design" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[var(--gray-300)] text-lg font-medium mb-4">{t("design.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("design.heading") as string}
          </h2>
          <p className="text-xl text-[var(--gray-400)] max-w-2xl mx-auto">
            {t("design.desc") as string}
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
                alt={t("design.imageAlt") as string}
                fill
                className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
              />
            </motion.div>
          </div>
        </FadeIn>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specItems.map((spec, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center py-4">
                <p className="text-[var(--gray-400)] text-sm mb-2">{spec.label}</p>
                <p className="text-[var(--foreground)] text-lg font-semibold">{spec.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
