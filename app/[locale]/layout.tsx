import type { Metadata } from "next";
import "../../styles/globals.scss";
import { getLocale } from "next-intl/server";
import { rinsideCompressed, rinsideNarrow } from "@/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "no" }];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${rinsideCompressed.variable} ${rinsideNarrow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
