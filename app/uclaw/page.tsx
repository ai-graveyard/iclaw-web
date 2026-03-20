"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function UClawPage() {
  const { t } = useLanguage();
  const features = t("uclawPage.features") as unknown as {
    title: string;
    desc: string;
  }[];
  const specs = t("uclawPage.specs") as unknown as {
    label: string;
    value: string;
  }[];
  const useCases = t("uclawPage.useCases") as unknown as {
    title: string;
    desc: string;
  }[];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--gray-900)]" />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#30d158]/20 to-[#2997ff]/20 blur-[120px]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              uClaw
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-6"
          >
            {t("uclawPage.subtitle") as string}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl text-[var(--gray-400)] max-w-2xl mx-auto mb-10"
          >
            {t("uclawPage.desc") as string}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center bg-[#30d158] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#28a745] transition-all duration-300 hover:shadow-[0_0_30px_rgba(48,209,88,0.3)]"
            >
              {t("uclawPage.buy") as string}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-[var(--gray-600)] text-[var(--foreground)] px-8 py-3.5 rounded-full text-lg font-medium hover:border-[var(--gray-400)] transition-all duration-300"
            >
              {t("uclawPage.backHome") as string}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="relative z-10 mt-16 mb-8 w-full max-w-xl mx-auto px-6"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/uclaw-product.png"
              alt="uClaw"
              fill
              className="object-contain object-center drop-shadow-[0_20px_60px_rgba(48,209,88,0.15)]"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-32 px-6">
        <div className="section-divider max-w-6xl mx-auto mb-32" />
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#30d158] text-lg font-medium mb-4">
              {t("uclawPage.featuresLabel") as string}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              {t("uclawPage.featuresHeading") as string}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--gray-400)] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 px-6">
        <div className="section-divider max-w-6xl mx-auto mb-32" />
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-[#bf5af2] text-lg font-medium mb-4">
              {t("uclawPage.useCasesLabel") as string}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              {t("uclawPage.useCasesHeading") as string}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--gray-400)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="section-divider max-w-6xl mx-auto mb-32" />
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-[var(--gray-300)] text-lg font-medium mb-4">
              {t("uclawPage.specsLabel") as string}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              {t("uclawPage.specsHeading") as string}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center py-4">
                  <p className="text-[var(--gray-400)] text-sm mb-2">
                    {spec.label}
                  </p>
                  <p className="text-[var(--foreground)] text-lg font-semibold">
                    {spec.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
