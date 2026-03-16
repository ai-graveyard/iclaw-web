"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-[var(--card-bg)] rounded-full p-0.5 text-xs font-medium">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-[var(--card-hover)] text-[var(--foreground)]"
            : "text-[var(--gray-400)] hover:text-[var(--foreground)]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === "zh"
            ? "bg-[var(--card-hover)] text-[var(--foreground)]"
            : "text-[var(--gray-400)] hover:text-[var(--foreground)]"
        }`}
      >
        中文
      </button>
    </div>
  );
}
