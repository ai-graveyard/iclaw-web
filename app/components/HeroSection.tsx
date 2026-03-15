"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2997ff]/20 to-[#bf5af2]/20 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#30d158]/15 to-[#2997ff]/10 blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6">
            {t("hero.title") as string}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-6"
        >
          {t("hero.subtitle") as string}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto mb-10"
        >
          {t("hero.desc") as string}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#2997ff] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-all duration-300 hover:shadow-[0_0_30px_rgba(41,151,255,0.3)]"
          >
            {t("hero.preorder") as string}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center border border-[#424245] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:border-[#86868b] transition-all duration-300"
          >
            {t("hero.learnMore") as string}
          </a>
        </motion.div>
      </div>

      {/* Product visual */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mt-16 mb-8 w-full max-w-3xl mx-auto px-6"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src="/iclaw-hero.png"
            alt={t("hero.imageAlt") as string}
            fill
            className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.15)]"
            priority
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#424245] flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#86868b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
