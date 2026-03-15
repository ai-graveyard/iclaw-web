import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iClaw — AI Belongs to Everyone",
  description:
    "iClaw is your personal AI computer. Run AI locally, keep your data private, and unlock the power of AI for everyone.",
  keywords: ["AI", "personal AI", "local AI", "AI computer", "privacy", "iClaw"],
  openGraph: {
    title: "iClaw — AI Belongs to Everyone",
    description:
      "Your personal AI computer. Run AI locally with complete privacy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
