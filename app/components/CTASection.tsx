"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#2997ff]/15 via-[#bf5af2]/15 to-[#30d158]/15 blur-[120px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--foreground)] mb-8">
            {t("cta.heading1") as string}
            <br />
            <span className="gradient-text">{t("cta.heading2") as string}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl sm:text-2xl text-[var(--gray-400)] max-w-2xl mx-auto mb-12">
            {t("cta.desc") as string}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              {t("cta.preorder") as string}
            </a>
            <button
              onClick={() => setShowCommunityModal(true)}
              className="inline-flex items-center justify-center border border-[var(--gray-600)] text-[var(--foreground)] px-10 py-4 rounded-full text-lg font-medium hover:border-[var(--gray-400)] transition-all duration-300 cursor-pointer"
            >
              {t("cta.community") as string}
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Community Modal */}
      <AnimatePresence>
        {showCommunityModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowCommunityModal(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl p-8 max-w-sm w-full text-center glass-modal"
            >
              <button
                onClick={() => setShowCommunityModal(false)}
                className="absolute top-4 right-4 text-[var(--gray-400)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                {t("cta.modal.title") as string}
              </h3>

              <div className="bg-white rounded-2xl p-4 inline-block mb-4">
                <Image
                  src="/user_qr.jpg"
                  alt="WeChat QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <p className="text-sm text-[var(--foreground)] opacity-70">
                {t("cta.modal.note") as string}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
