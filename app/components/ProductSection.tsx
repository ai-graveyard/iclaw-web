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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {t("product.heading") as string}
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            {t("product.desc") as string}
          </p>
        </FadeIn>

        {/* Product visual */}
        <FadeIn delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/iclaw-product.png"
                alt={t("product.imageAlt") as string}
                fill
                className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
