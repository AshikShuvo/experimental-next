import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "no"],
  defaultLocale: (process.env.VERCEL_DEFAULT_LOCALE as "en" | "no") ?? "no",
  pathnames: {
    "/": "/",
    "/pathnames": {
      no: "/pfadnamen",
    },
  },
});
