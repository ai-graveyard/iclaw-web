"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export default function ComparisonSection() {
  const { t } = useLanguage();

  const rows = t("comparison.rows") as { feature: string; cloud: string; local: string; iclaw: string }[];

  return (
    <section className="relative py-32 px-6">
      <div className="section-divider max-w-6xl mx-auto mb-32" />
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <p className="text-[#ff453a] text-lg font-medium mb-4">{t("comparison.label") as string}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
            {t("comparison.heading") as string}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left text-[var(--gray-400)] text-sm font-medium py-4 pr-6 w-1/4" />
                  <th className="text-center text-[var(--gray-400)] text-sm font-medium py-4 px-4 w-1/4">
                    {t("comparison.headers.cloudAI") as string}
                  </th>
                  <th className="text-center text-[var(--gray-400)] text-sm font-medium py-4 px-4 w-1/4">
                    {t("comparison.headers.selfHosted") as string}
                  </th>
                  <th className="text-center text-sm font-medium py-4 pl-4 w-1/4">
                    <span className="gradient-text-blue font-semibold">
                      {t("comparison.headers.iclaw") as string}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[var(--border)] hover:bg-[var(--card-bg)] transition-colors"
                  >
                    <td className="text-[var(--foreground)] font-medium py-5 pr-6 text-sm">
                      {row.feature}
                    </td>
                    <td className="text-[var(--gray-400)] text-center py-5 px-4 text-sm">
                      {row.cloud}
                    </td>
                    <td className="text-[var(--gray-400)] text-center py-5 px-4 text-sm">
                      {row.local}
                    </td>
                    <td className="text-[#2997ff] text-center py-5 pl-4 text-sm font-medium">
                      {row.iclaw}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
