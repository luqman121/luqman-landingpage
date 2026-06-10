import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hermes AI — موظف AI ذكي لبزنسك",
  description: "أركب لك موظف AI ذكي يخدم عملائك، يرد تلقائياً، يجمع الليدز، ويتابع المبيعات. يشتغل مع واتساب، تيليجرام، إيميل، Google Sheets، وCRM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className={`${cairo.className} antialiased transition-colors duration-500`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
