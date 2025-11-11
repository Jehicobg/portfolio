import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jehicob Guerrero",
  description:
    "I'm a Senior Front-End Developer, passionate about creating accessible web experiences while paying attention to every detail.",
  alternates: {
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_PUBLISH_SITE}/en`,
      "es-ES": `${process.env.NEXT_PUBLIC_PUBLISH_SITE}/es`,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale: locale });

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased text-slate-400`}>
        <NextIntlClientProvider locale={locale} messages={messages?.seo}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
