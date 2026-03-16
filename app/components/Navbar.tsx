"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("nav.features") as string, href: "#features" },
    { label: t("nav.aiPower") as string, href: "#ai-power" },
    { label: t("nav.useCases") as string, href: "#use-cases" },
    { label: t("nav.design") as string, href: "#design" },
    { label: t("nav.pricing") as string, href: "#pricing" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
          <a href="#" className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            iClaw
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--gray-400)] hover:text-[var(--foreground)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <ThemeSwitcher />
            <a
              href="#pricing"
              className="text-sm bg-[var(--nav-btn-bg)] text-[var(--nav-btn-text)] px-5 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              {t("nav.buyNow") as string}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--foreground)] transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--mobile-menu-bg)] backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-2xl text-[var(--foreground)] font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="inline-flex w-fit text-lg bg-[var(--nav-btn-bg)] text-[var(--nav-btn-text)] px-8 py-3 rounded-full font-medium mt-4"
              >
                {t("nav.buyNow") as string}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
