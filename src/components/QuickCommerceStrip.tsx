"use client";

import React from "react";
import { Zap, MapPin, ArrowUpRight } from "lucide-react";
import { useKhaadyam } from "@/context/KhaadyamContext";

export function QuickCommerceStrip() {
  const { lang } = useKhaadyam();

  return (
    <section className="w-full pt-4 pb-10 md:pt-6 md:pb-12 px-4 md:px-8 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-5 md:py-5 md:px-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 shadow-xs">
        {/* Left Column: Headline, Hyper-local badge, and explanation */}
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5F252D] bg-[#5F252D]/10 px-2.5 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-[#5F252D] fill-current" />
              <span>{lang === "kn" ? "ತ್ವರಿತ ಮರುಪೂರಣ ಬಾಗಿಲು" : "Instant Refill Door"}</span>
            </div>

            {/* Hyper-local city indicator */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#764D30] border border-[#E2D9CA] text-[10px] font-semibold tracking-wide">
              <MapPin className="w-3 h-3 text-[#5F252D]" />
              <span>{lang === "kn" ? "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮಾತ್ರ · ೧೦-೧೫ ನಿಮಿಷ" : "Bengaluru Only · 10–15 Min Delivery"}</span>
            </span>
          </div>

          <h3 className="font-serif-brand text-xl md:text-2xl text-[#1D1A17] font-normal tracking-tight">
            {lang === "kn" ? "ಇವತ್ತಿನ ಊಟಕ್ಕೆ ತಕ್ಷಣ ಪುಡಿ ಬೇಕೇ?" : "In a hurry for tonight's meal?"}
          </h3>

          <p className="text-xs md:text-sm text-[#5A5048] leading-relaxed">
            {lang === "kn"
              ? "ಬಿಸಿ ಅನ್ನಕ್ಕೆ ಗುರೆಳ್ಳು ಅಥವಾ ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ ಊಟದ ಮೊದಲೇ ಬೇಕಿದ್ದರೆ, ಬೆಂಗಳೂರಿನ ಸ್ವಿಗ್ಗಿ ಅಥವಾ ಬ್ಲಿಂಕಿಟ್ ಮೂಲಕ ಕೇವಲ ೧೦-೧೫ ನಿಮಿಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತಲುಪುತ್ತದೆ."
              : "Need freshly ground Gurellu or Shenga Chutney Pudi before dinner? Order through Swiggy Instamart or Blinkit for 10–15 minute doorstep dispatch across Bengaluru."}
          </p>
        </div>

        {/* Right Column: Interactive Quick-Commerce Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
          {/* Swiggy Instamart Button */}
          <a
            href="https://www.swiggy.com/instamart"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial bg-white hover:bg-[#FAF9F5] border border-[#E2D9CA] hover:border-[#FC8019] text-[#1D1A17] px-4 py-2.5 rounded-xl shadow-2xs hover:shadow-sm transition-all flex items-center justify-between sm:justify-start gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FC8019] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-[#1D1A17] group-hover:text-[#FC8019] transition-colors leading-tight">
                  Swiggy Instamart
                </span>
                <span className="text-[10px] text-[#7A6E63] font-normal">
                  {lang === "kn" ? "೧೦ ನಿಮಿಷ ವಿತರಣೆ" : "10-min grocery exit"}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6E63] group-hover:text-[#FC8019] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          {/* Blinkit Button */}
          <a
            href="https://blinkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial bg-white hover:bg-[#FAF9F5] border border-[#E2D9CA] hover:border-[#E8B826] text-[#1D1A17] px-4 py-2.5 rounded-xl shadow-2xs hover:shadow-sm transition-all flex items-center justify-between sm:justify-start gap-3 cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F8CB46] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-[#1D1A17] group-hover:text-[#764D30] transition-colors leading-tight">
                  Blinkit
                </span>
                <span className="text-[10px] text-[#7A6E63] font-normal">
                  {lang === "kn" ? "ತ್ವರಿತ ಆರ್ಡರ್" : "Instant grocery cart"}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7A6E63] group-hover:text-[#764D30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
