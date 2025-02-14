import { Assistant } from "next/font/google";
import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
import "./globals.scss";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/toast";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const assistant = Assistant({
  subsets: ["latin"], // Specify the character subsets
  weight: ["200", "300", "400", "600", "800"], // Specify font weights to include
  display: "swap", // Use "swap" to reduce layout shift
  fallback: ["sans-serif"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ToastProvider>
            <Navbar />
            <Toaster />
            <div className={`main-layout ${assistant.className}`}>
              {children}
            </div>
            <Footer />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
