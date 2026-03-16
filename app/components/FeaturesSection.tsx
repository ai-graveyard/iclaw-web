"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";
import { ReactNode } from "react";

const icons: ReactNode[] = [
  <svg key="box" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
    <polyline points="7.5 19.79 7.5 14.6 3 12" />
    <polyline points="21 12 16.5 14.6 16.5 19.79" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>,
  <svg key="shield" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg key="sun" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>,
  <svg key="monitor" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
];

const colors = ["#2997ff", "#30d158", "#ff9f0a", "#bf5af2"];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const featureItems = t("features.items") as { title: string; desc: string }[];

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#2997ff] text-lg font-medium mb-4">
            {t("features.label") as string}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)]">
            {t("features.heading1") as string}
            <br />
            <span className="text-[var(--gray-400)]">{t("features.heading2") as string}</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureItems.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 group">
                <div
                  className="mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: colors[i] }}
                >
                  {icons[i]}
                </div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--gray-400)] text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
