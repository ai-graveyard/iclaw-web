"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

const colors = ["#2997ff", "#bf5af2", "#30d158", "#ff9f0a", "#ff453a", "#64d2ff"];

export default function UseCasesSection() {
  const { t } = useLanguage();
  const useCaseItems = t("useCases.items") as { role: string; tasks: string[] }[];

  return (
    <section id="use-cases" className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#ff9f0a] text-lg font-medium mb-4">{t("useCases.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {t("useCases.heading") as string}
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            {t("useCases.desc") as string}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseItems.map((uc, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500">
                <div
                  className="w-3 h-3 rounded-full mb-5"
                  style={{ backgroundColor: colors[i] }}
                />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {uc.role}
                </h3>
                <ul className="space-y-2.5">
                  {uc.tasks.map((task, j) => (
                    <li
                      key={j}
                      className="text-[#86868b] text-sm flex items-start gap-2"
                    >
                      <span className="text-[#424245] mt-1">—</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
