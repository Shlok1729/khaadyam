"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const { lang } = useKhaadyam();

  return (
    <footer className="w-full bg-[#5F252D] text-[#F4EFE6] px-6 md:px-12 pt-16 pb-12 border-t border-[#76303B]">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image
                src="/logo.png"
                alt="Khaadyam Logo"
                width={52}
                height={36}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90 transition-transform group-hover:scale-105"
              />
              <span className="font-serif-brand text-3xl md:text-4xl tracking-tight text-[#F4EFE6]">
                {lang === "kn" ? "ಖಾದ್ಯಂ" : "khaadyam"}<span className="text-[#F4EFE6]">.</span>
              </span>
            </Link>
            <p className="text-sm md:text-base text-[#D9C3C0] max-w-sm leading-relaxed">
              {lang === "kn"
                ? "ನಿಮ್ಮ ಮನೆಯು ಉಳಿಸಿಕೊಂಡ ಅಸಲಿ ರುಚಿ. ದಾವಣಗೆರೆಯ ಪಾರಂಪರಿಕ ಅಡುಗೆಮನೆಯಿಂದ."
                : "The taste your home kept. Regional Karnataka food heritage from Davangere home-kitchens."}
            </p>
            <div className="pt-2">
              <span className="text-2xl text-[#EADCD8] block font-serif-brand">
                {lang === "kn" ? "ಊಟ ಆಯ್ತಾ?" : "Did you eat?"}
              </span>
              <span className="text-xs text-[#D9C3C0] italic">
                {lang === "kn"
                  ? "(ಪ್ರತಿಯೊಂದು ಭಾರತೀಯ ಮನೆಯನ್ನು ಕಟ್ಟಿದ ಅಕ್ಕರೆಯ ಮಾತು.)"
                  : "(The greeting that built every Indian home.)"}
              </span>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9C3C0]">
              {lang === "kn" ? "ಅಂಗಡಿ" : "Shop"}
            </span>
            <ul className="space-y-2 text-xs md:text-sm text-[#F4EFE6]/80">
              <li>
                <Link href="/#shop" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ತಟ್ಟೆಯಂತೆ (ಊಟದ ತಟ್ಟೆಗಳು)" : "By Meal (Curated moments)"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ವಿಭಾಗದಂತೆ (೮ ವಿಭಾಗಗಳು)" : "By Category (The 8 families)"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಚಟ್ನಿ ಪುಡಿಗಳು" : "Chutney Pudis"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಭರಣಿ ಉಪ್ಪಿನಕಾಯಿ" : "Earthen Bharani Pickles"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಸಂಡಿಗೆ ಮತ್ತು ಹಪ್ಪಳ" : "Sun-dried Sandige"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Subscriptions */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9C3C0]">
              {lang === "kn" ? "ಚಂದಾದಾರಿಕೆ" : "Subscribe"}
            </span>
            <ul className="space-y-2 text-xs md:text-sm text-[#F4EFE6]/80">
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಸಿದ್ಧಪಡಿಸಿದ ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ" : "Ready-made monthly boxes"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ನಿಮ್ಮದೇ ಪಟ್ಟಿ ತಯಾರಿಸಿ" : "Build your own custom list"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಹೆಜ್ಜೆ ಗುರುತು (The Step)" : "The Step (Tenure tracker)"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್" : "UPI AutoPay e-Mandate"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen & Story */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9C3C0]">
              {lang === "kn" ? "ದಾವಣಗೆರೆ ಅಡುಗೆಮನೆ" : "Davangere Kitchen"}
            </span>
            <ul className="space-y-2 text-xs md:text-sm text-[#F4EFE6]/80">
              <li>
                <Link href="/our-story" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ನಮ್ಮ ಪರಂಪರೆ" : "Our heritage recipes"}
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಮಣ್ಣಿನಿಂದ ತಟ್ಟೆಯವರೆಗೆ" : "Soil to plate circle"}
                </Link>
              </li>
              <li>
                <Link href="/#memory-wall" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ನೆನಪಿನ ಗೋಡೆ" : "The Memory Wall"}
                </Link>
              </li>
              <li>
                <Link href="/gift-a-basket" className="hover:text-white transition-smooth">
                  {lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ" : "Gift a Basket"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#76303B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9C3C0]">
          <div className="flex items-center gap-2">
            <span>© 2026 Khaadyam Foods Private Limited.</span>
            <span>·</span>
            <span>Davangere & Bengaluru, Karnataka.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F4EFE6] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{lang === "kn" ? "ವಾಟ್ಸಾಪ್ ಅಡುಗೆಮನೆ ಸಂಪರ್ಕ" : "WhatsApp Kitchen Door"}</span>
            </a>
            <span>·</span>
            <span>{lang === "kn" ? "ಅಮ್ಮನ ಅಸಲಿ ಪಾಕವಿಧಾನಗಳು." : "All recipes kept by Amma."}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
