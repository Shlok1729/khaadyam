"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const {
    plateItemCount,
    setIsPlateOpen,
    lang,
    setLang,
  } = useKhaadyam();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#5F252D] text-[#F4EFE6] px-4 py-2 text-xs md:text-sm font-medium tracking-wide flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#EADCD8]">
              {lang === "kn" ? "ಹೊಸ್ತಿಲು" : "The Threshold"}
            </span>
            <span className="hidden sm:inline text-white/40">·</span>
            <span className="hidden sm:inline">
              {lang === "kn"
                ? "ಪ್ರತಿಯೊಂದು ಮನೆಯಲ್ಲೂ ಒಬ್ಬ ಅಮ್ಮ ಇರುತ್ತಾಳೆ. ಖಾದ್ಯಂ ಆಕೆಯ ಕೈರುಚಿ."
                : "Every home has an Amma. Khaadyam is the taste she kept."}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-[#EADCD8]">
              {lang === "kn" ? "ದಾವಣಗೆರೆಯಲ್ಲಿ ಸಿದ್ಧವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ" : "Freshly ground in Davangere"}
            </span>
            <span className="text-[#EADCD8]/70">
              {lang === "kn" ? "₹499 ಮೇಲ್ಪಟ್ಟ ಆರ್ಡರ್‌ಗಳಿಗೆ ಉಚಿತ ವಿತರಣೆ" : "Free shipping on plates over ₹499"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#D9CFBF]/70 transition-smooth">
        <div className="max-w-7xl mx-auto h-20 px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Khaadyam Logo"
              width={48}
              height={33}
              className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="font-serif-brand text-2xl md:text-3xl font-normal tracking-tight text-[#1D1A17] group-hover:text-[#5F252D] transition-smooth">
                {lang === "kn" ? "ಖಾದ್ಯಂ" : "khaadyam"}<span className="text-[#5F252D] font-bold">.</span>
              </span>
              <span className={`text-[11px] text-[#5A5048] -mt-0.5 tracking-wider ${lang === "kn" ? "font-kannada" : ""}`}>
                {lang === "kn" ? "ಅಮ್ಮನ ಕೈರುಚಿ" : "The taste your home kept"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#1D1A17] ${lang === "kn" ? "font-kannada text-base" : ""}`}>
            <a
              href="#shop"
              className="hover:text-[#5F252D] transition-smooth relative py-1 hover:border-b-2 hover:border-[#5F252D]"
            >
              {lang === "kn" ? "ಅಂಗಡಿ" : "Shop"}
            </a>
            <a
              href="#subscribe"
              className="hover:text-[#5F252D] transition-smooth relative py-1 hover:border-b-2 hover:border-[#5F252D]"
            >
              {lang === "kn" ? "ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ" : "Subscribe"}
            </a>
            <a
              href="#gift"
              className="hover:text-[#5F252D] transition-smooth relative py-1 hover:border-b-2 hover:border-[#5F252D]"
            >
              {lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ" : "Gift a Table"}
            </a>
            <a
              href="#story"
              className="hover:text-[#5F252D] transition-smooth relative py-1 hover:border-b-2 hover:border-[#5F252D]"
            >
              {lang === "kn" ? "ನಮ್ಮ ಕತೆ" : "Our Story"}
            </a>
            <a
              href="#memory-wall"
              className="hover:text-[#5F252D] transition-smooth relative py-1 hover:border-b-2 hover:border-[#5F252D]"
            >
              {lang === "kn" ? "ನೆನಪಿನ ಗೋಡೆ" : "Memory Wall"}
            </a>
          </nav>

          {/* Right Controls: Language & Plate Trigger */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="inline-flex items-center p-1 bg-[#E9DFCE]/60 rounded-full border border-[#D9CFBF] text-xs font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition-smooth cursor-pointer ${
                  lang === "en"
                    ? "bg-[#5F252D] text-[#F4EFE6] shadow-xs"
                    : "text-[#5A5048] hover:text-[#1D1A17]"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("kn")}
                className={`px-3 py-1 rounded-full font-kannada transition-smooth cursor-pointer ${
                  lang === "kn"
                    ? "bg-[#5F252D] text-[#F4EFE6] shadow-xs"
                    : "text-[#5A5048] hover:text-[#1D1A17]"
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            {/* The Plate (Cart) Button */}
            <button
              onClick={() => setIsPlateOpen(true)}
              className="relative flex items-center gap-2 bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-4 py-2.5 rounded-full text-sm font-medium transition-smooth shadow-sm cursor-pointer group"
              aria-label="Open your plate"
            >
              <ShoppingBag className="w-4 h-4 text-[#EADCD8] group-hover:scale-110 transition-smooth" />
              <span>{lang === "kn" ? "ತಟ್ಟೆ" : "Plate"}</span>
              {plateItemCount > 0 && (
                <span className="ml-0.5 bg-[#C99436] text-[#1D1A17] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {plateItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1D1A17] hover:text-[#5F252D] transition-smooth"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F4EFE6] border-b border-[#D9CFBF] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-[#1D1A17] py-2 border-b border-[#E2D9CA]"
            >
              <span>{lang === "kn" ? "ಅಂಗಡಿ" : "Shop"}</span>
              <ArrowRight className="w-4 h-4 text-[#6B6157]" />
            </a>
            <a
              href="#subscribe"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-[#1D1A17] py-2 border-b border-[#E2D9CA]"
            >
              <span>{lang === "kn" ? "ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ" : "Subscribe"}</span>
              <ArrowRight className="w-4 h-4 text-[#6B6157]" />
            </a>
            <a
              href="#gift"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-[#1D1A17] py-2 border-b border-[#E2D9CA]"
            >
              <span>{lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ" : "Gift a Table"}</span>
              <ArrowRight className="w-4 h-4 text-[#6B6157]" />
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-[#1D1A17] py-2 border-b border-[#E2D9CA]"
            >
              <span>{lang === "kn" ? "ನಮ್ಮ ಕತೆ" : "Our Story"}</span>
              <ArrowRight className="w-4 h-4 text-[#6B6157]" />
            </a>
            <a
              href="#memory-wall"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-[#1D1A17] py-2"
            >
              <span>{lang === "kn" ? "ನೆನಪಿನ ಗೋಡೆ" : "Memory Wall"}</span>
              <ArrowRight className="w-4 h-4 text-[#6B6157]" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
