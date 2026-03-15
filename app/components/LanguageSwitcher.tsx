"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-white/[0.06] rounded-full p-0.5 text-xs font-medium">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-white/[0.12] text-white"
            : "text-[#86868b] hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === "zh"
            ? "bg-white/[0.12] text-white"
            : "text-[#86868b] hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
}
