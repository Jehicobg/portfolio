import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Jehicob Guerrero",
  description: "This is mmy portfolio :)",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased text-slate-400`}>
        <NextIntlClientProvider locale={locale} messages={messages?.seo}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
