"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function IClawPage() {
  const { t } = useLanguage();
  const features = t("iclawPage.features") as unknown as {
    title: string;
    desc: string;
  }[];
  const specs = t("iclawPage.specs") as unknown as {
    label: string;
    value: string;
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
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2997ff]/20 to-[#bf5af2]/20 blur-[120px]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              iClaw
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-6"
          >
            {t("iclawPage.subtitle") as string}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl text-[var(--gray-400)] max-w-2xl mx-auto mb-10"
          >
            {t("iclawPage.desc") as string}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center bg-[#2997ff] text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-all duration-300 hover:shadow-[0_0_30px_rgba(41,151,255,0.3)]"
            >
              {t("iclawPage.preorder") as string}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center border border-[var(--gray-600)] text-[var(--foreground)] px-8 py-3.5 rounded-full text-lg font-medium hover:border-[var(--gray-400)] transition-all duration-300"
            >
              {t("iclawPage.backHome") as string}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="relative z-10 mt-16 mb-8 w-full max-w-3xl mx-auto px-6"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/iclaw-product.png"
              alt="iClaw"
              fill
              className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.15)]"
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
            <p className="text-[#2997ff] text-lg font-medium mb-4">
              {t("iclawPage.featuresLabel") as string}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              {t("iclawPage.featuresHeading") as string}
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

      {/* Design & Specs */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="section-divider max-w-6xl mx-auto mb-32" />
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-[var(--gray-300)] text-lg font-medium mb-4">
              {t("iclawPage.specsLabel") as string}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              {t("iclawPage.specsHeading") as string}
            </h2>
          </FadeIn>

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
                  alt="iClaw Design"
                  fill
                  className="object-contain object-center drop-shadow-[0_20px_60px_rgba(41,151,255,0.12)]"
                />
              </motion.div>
            </div>
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
