"use client";

import React from "react";
import Link from "next/link";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { GiftTableSection } from "@/components/GiftTableSection";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function GiftABasketPage() {
  const { lang } = useKhaadyam();

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F5]">
      {/* Top Breadcrumb & Page Banner */}
      <div className="w-full bg-[#F4EFE6] border-b border-[#D9CFBF] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-[#6B6157]">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-[#5F252D] transition-smooth font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "kn" ? "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ" : "Back to Home"}</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#5F252D]">
              {lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ (Gift a Basket)" : "Gift a Basket"}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#5F252D] font-semibold bg-[#FAF9F5] px-3.5 py-1.5 rounded-full border border-[#D9CFBF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {lang === "kn"
                ? "ಉಚಿತ ಕೈಬರಹ ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಸೇರಿಸಲಾಗಿದೆ"
                : "Complimentary Handwritten Postcard Included"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Gift Curation Section */}
      <GiftTableSection />

      {/* Gifting Care & Trust Notes */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5F252D]">
              {lang === "kn" ? "ಉಡುಗೊರೆ ಪೆಟ್ಟಿಗೆಯ ವಿಶೇಷತೆ" : "The Khaadyam Gifting Promise"}
            </span>
            <h3 className="font-serif-brand text-2xl md:text-3xl text-[#1D1A17]">
              {lang === "kn"
                ? "ದೂರದಲ್ಲಿದ್ದರೂ ಮನೆಯ ಪ್ರೀತಿ ತಲುಪಿಸುವ ರೀತಿ"
                : "How Amma packs every gift box"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Promise 1: Handwritten With Real Ink (Fountain Pen Nib) */}
            <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col gap-3 hover:border-[#D0C2AE] transition-smooth shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#5F252D]/10 border border-[#5F252D]/20 flex items-center justify-center text-[#5F252D]">
                <svg
                  className="w-6 h-6 text-[#5F252D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Calligraphy Fountain Pen Nib */}
                  <path d="M12 2L19 9L15 13L12 10L9 13L5 9L12 2Z" fill="#5F252D" fillOpacity="0.08" />
                  <path d="M12 10V18" />
                  <circle cx="12" cy="15" r="1.2" fill="currentColor" />
                  <path d="M19 9L21 21L12 18L3 21L5 9" />
                </svg>
              </div>
              <h4 className="font-serif-brand text-lg text-[#1D1A17]">
                {lang === "kn" ? "ಅಸಲಿ ಕೈಬರಹ ಕಾರ್ಡ್" : "Handwritten With Real Ink"}
              </h4>
              <p className="text-xs text-[#5A5048] leading-relaxed">
                {lang === "kn"
                  ? "ಯಾವುದೇ ಕಂಪ್ಯೂಟರ್ ಪ್ರಿಂಟ್ ಅಲ್ಲ. ಅಮ್ಮನ ತಂಡವೇ ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ನಿಜವಾದ ಶಾಯಿಯಲ್ಲಿ ಅಂಚೆ ಕಾರ್ಡ್ ಮೇಲೆ ಬರೆಯುತ್ತದೆ."
                  : "Zero digital printouts. Amma's kitchen team writes your personal note word-for-word in real ink on a heavy textured postcard."}
              </p>
            </div>

            {/* Promise 2: No Price Tags Inside (Crossed-Out Rupee Tag) */}
            <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col gap-3 hover:border-[#D0C2AE] transition-smooth shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#5F252D]/10 border border-[#5F252D]/20 flex items-center justify-center text-[#5F252D]">
                <svg
                  className="w-6 h-6 text-[#5F252D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Price Tag Outline */}
                  <path d="M12.5 3H6a2 2 0 0 0-2 2v6.5a2 2 0 0 0 .59 1.41l7.5 7.5a2 2 0 0 0 2.82 0l4.5-4.5a2 2 0 0 0 0-2.82l-7.5-7.5A2 2 0 0 0 12.5 3z" />
                  <circle cx="8" cy="7" r="1.5" fill="currentColor" />
                  {/* Crossed-out Rupee Slash */}
                  <line x1="12" y1="10" x2="18" y2="16" stroke="#8B3A44" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="13" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="font-serif-brand text-lg text-[#1D1A17]">
                {lang === "kn" ? "ಬೆಲೆಯ ಚೀಟಿ ಇಲ್ಲದೆ ರವಾನೆ" : "No Price Tags Inside"}
              </h4>
              <p className="text-xs text-[#5A5048] leading-relaxed">
                {lang === "kn"
                  ? "ಪೆಟ್ಟಿಗೆಯೊಳಗೆ ಯಾವುದೇ ಬಿಲ್ ಅಥವಾ ಬೆಲೆಯ ವಿವರ ಇರುವುದಿಲ್ಲ. ಡಿಜಿಟಲ್ ರಸೀದಿ ನೇರವಾಗಿ ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ಮಾತ್ರ ಬರುತ್ತದೆ."
                  : "We ensure invoices and price tags are never placed inside the gift box. Digital receipts go directly and privately to you."}
              </p>
            </div>

            {/* Promise 3: Airtight Heritage Seal (Airtight Wax Seal with Ribbons) */}
            <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col gap-3 hover:border-[#D0C2AE] transition-smooth shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#5F252D]/10 border border-[#5F252D]/20 flex items-center justify-center text-[#5F252D]">
                <svg
                  className="w-6 h-6 text-[#5F252D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Scalloped Wax Seal Medallion */}
                  <circle cx="12" cy="10" r="6.5" fill="#5F252D" fillOpacity="0.08" />
                  <circle cx="12" cy="10" r="3" strokeWidth="1.4" />
                  <path d="M12 4v2M12 14v2M6 10h2M16 10h2" strokeWidth="1.2" />
                  {/* Hanging Wax Seal Ribbons */}
                  <path d="M9.5 16L8 21.5L12 19.5L16 21.5L14.5 16" fill="#5F252D" fillOpacity="0.1" />
                </svg>
              </div>
              <h4 className="font-serif-brand text-lg text-[#1D1A17]">
                {lang === "kn" ? "ಸುವಾಸನೆ ಉಳಿಯುವ ಸೀಲ್" : "Airtight Heritage Seal"}
              </h4>
              <p className="text-xs text-[#5A5048] leading-relaxed">
                {lang === "kn"
                  ? "ಪ್ರತಿ ಚಟ್ನಿ ಪುಡಿ ಮತ್ತು ಗೊಜ್ಜು ಗಾಳಿ ಸೋಕದಂತೆ ಸೀಲ್ ಆಗಿರುತ್ತದೆ. ಪ್ರಯಾಣದಲ್ಲಿ ಯಾವುದೇ ಸೋರುವಿಕೆ ಇರುವುದಿಲ್ಲ."
                  : "Every podi and preserve is sealed in multi-layer airtight pouches inside festive rigid boxes so freshness lasts 6+ months."}
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5F252D] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {lang === "kn"
                  ? "ಅಂಗಡಿ ಮತ್ತು ಮಾಸಿಕ ಚಂದಾದಾರಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
                  : "Explore our daily pantry shop and monthly subscriptions"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
