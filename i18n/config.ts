export const defaultLocale = "no";

export const locales = ["en", "no"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  no: "Norsk",
} as const;
