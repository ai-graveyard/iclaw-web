"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

export type Locale = "en" | "zh";

const translations: Record<Locale, typeof en> = { en, zh };

type TranslationValue = string | string[] | Record<string, unknown> | unknown[];

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference or detect browser language
    const saved = localStorage.getItem("iclaw-lang") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("iclaw-lang", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string): TranslationValue => {
      const value = getNestedValue(
        translations[locale] as unknown as Record<string, unknown>,
        key
      );
      if (value === undefined) {
        // Fallback to English
        const fallback = getNestedValue(
          translations.en as unknown as Record<string, unknown>,
          key
        );
        return (fallback as TranslationValue) ?? key;
      }
      return value as TranslationValue;
    },
    [locale]
  );

  // Prevent hydration mismatch: render English until client-side locale is determined
  const contextValue: LanguageContextType = {
    locale: mounted ? locale : "en",
    setLocale,
    t: mounted
      ? t
      : (key: string) => {
          const value = getNestedValue(
            translations.en as unknown as Record<string, unknown>,
            key
          );
          return (value as TranslationValue) ?? key;
        },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
