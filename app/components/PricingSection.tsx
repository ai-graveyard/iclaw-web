"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function PricingSection() {
  const { t } = useLanguage();
  const [showPayModal, setShowPayModal] = useState(false);
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);

  const modal = t("pricing.modal") as {
    title: string;
    amount: string;
    note: string;
    register: string;
    close: string;
  };

  const features = t("pricing.features") as string[];
  const enterprise = t("pricing.enterprise") as {
    name: string;
    desc: string;
    features: string[];
    cta: string;
    modal: {
      title: string;
      note: string;
      close: string;
    };
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

              <button
                onClick={() => setShowPayModal(true)}
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium bg-[#2997ff] text-white hover:bg-[#0077ed] hover:shadow-[0_0_30px_rgba(41,151,255,0.3)] transition-all duration-300 cursor-pointer"
              >
                {t("pricing.cta") as string}
              </button>
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

              <button
                onClick={() => setShowEnterpriseModal(true)}
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium border border-[var(--gray-600)] text-[var(--foreground)] hover:border-[var(--gray-400)] transition-all duration-300 cursor-pointer"
              >
                {enterprise.cta}
              </button>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPayModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowPayModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl p-8 max-w-sm w-full text-center bg-[var(--card-bg,#1d1d1f)] border border-[var(--gray-600)]"
            >
              {/* Close button */}
              <button
                onClick={() => setShowPayModal(false)}
                className="absolute top-4 right-4 text-[var(--gray-400)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                {modal.title}
              </h3>

              {/* QR Code */}
              <div className="bg-white rounded-2xl p-4 inline-block mb-4">
                <Image
                  src="/pay.png"
                  alt="WeChat Pay QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <p className="text-lg font-medium text-[#2997ff] mb-3">
                {modal.amount}
              </p>

              <p className="text-sm text-[var(--gray-400)] mb-4">
                {modal.note}
              </p>

              <a
                href="https://my.feishu.cn/base/ZuNEbOvUnaEBYtsqMRwc1X8Vn4f?from=from_copylink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-[#2997ff] hover:underline mb-4"
              >
                {modal.register} →
              </a>

              <div>
                <button
                  onClick={() => setShowPayModal(false)}
                  className="w-full py-2.5 rounded-full text-sm font-medium border border-[var(--gray-600)] text-[var(--foreground)] hover:border-[var(--gray-400)] transition-all duration-300 cursor-pointer"
                >
                  {modal.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enterprise Contact Modal */}
      <AnimatePresence>
        {showEnterpriseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowEnterpriseModal(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl p-8 max-w-sm w-full text-center bg-[var(--card-bg,#1d1d1f)] border border-[var(--gray-600)]"
            >
              <button
                onClick={() => setShowEnterpriseModal(false)}
                className="absolute top-4 right-4 text-[var(--gray-400)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                {enterprise.modal.title}
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

              <p className="text-sm text-[var(--gray-400)] mb-6">
                {enterprise.modal.note}
              </p>

              <button
                onClick={() => setShowEnterpriseModal(false)}
                className="w-full py-2.5 rounded-full text-sm font-medium border border-[var(--gray-600)] text-[var(--foreground)] hover:border-[var(--gray-400)] transition-all duration-300 cursor-pointer"
              >
                {enterprise.modal.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
