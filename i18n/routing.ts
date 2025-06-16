import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale:
    (process.env.VERCEL_DEFAULT_LOCALE as "en" | "no") ?? defaultLocale,
  localePrefix: "as-needed",
});
