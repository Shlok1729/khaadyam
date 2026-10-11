import type { Metadata } from "next";
import { Tenor_Sans, Noto_Sans_Kannada, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const notoKannada = Noto_Sans_Kannada({
  weight: ["400", "500", "600"],
  subsets: ["kannada"],
  variable: "--font-kannada",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khaadyam (ಖಾದ್ಯಂ) · The Taste Your Home Kept",
  description:
    "Authentic Davangere home-kitchen heritage recipes. Chutney Pudis, Gojjus, Masalas, Pickles, and curated regional meal boxes with monthly subscriptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tenorSans.variable} ${notoKannada.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#1D1A17]">{children}</body>
    </html>
  );
}
