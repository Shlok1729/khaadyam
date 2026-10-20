"use client";

import React from "react";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { Sparkles, ArrowRight } from "lucide-react";

export function StorySection() {
  const { lang } = useKhaadyam();

  return (
    <section id="story" className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FAF9F5] border-b border-[#D9CFBF]/70">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        {/* Story Intro with Balanced Split & Eyebrow Tag */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-12 border-b border-[#D9CFBF]">
          {/* Left Column: Eyebrow + Main Title */}
          <div className="flex flex-col gap-3 max-w-2xl">
            {/* Pill badge brought down as an eyebrow tag directly above Our Story */}
            <div className="inline-flex items-center gap-2 text-xs text-[#5F252D] font-semibold bg-[#F4EFE6] px-3.5 py-1.5 rounded-full border border-[#D9CFBF] w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#5F252D]" />
              <span>
                {lang === "kn"
                  ? "೭೦ ವರ್ಷಗಳ ಅಡುಗೆ ಪರಂಪರೆ · ದಾವಣಗೆರೆ"
                  : "70 Years of Family Heritage · Davangere"}
              </span>
            </div>

            <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1A17] leading-tight">
              {lang === "kn" ? (
                <>
                  ದಾವಣಗೆರೆಯ ಅಡುಗೆಮನೆ. <br />
                  <span className="italic text-[#5F252D]">ಮಣ್ಣಿನಿಂದ ತಟ್ಟೆಯವರೆಗೆ, ಒಂದೇ ಪವಿತ್ರ ವೃತ್ತ.</span>
                </>
              ) : (
                <>
                  A kitchen in Davangere. <br />
                  <span className="italic text-[#5F252D]">From soil to plate, one circle.</span>
                </>
              )}
            </h1>
          </div>

          {/* Right Column: Davangere Heritage Seal + Balanced Description */}
          <div className="flex flex-col gap-4 max-w-md lg:self-end">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#F4EFE6] border border-[#D9CFBF] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#5F252D] text-[#FAF9F5] flex flex-col items-center justify-center font-serif-brand shrink-0 text-center leading-none shadow-xs">
                <span className="text-[9px] uppercase tracking-widest text-[#EADCD8]/80 font-sans">ESTD</span>
                <span className="text-base font-bold text-[#FAF9F5]">1954</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#5F252D] uppercase tracking-wider">
                  {lang === "kn" ? "ದಾವಣಗೆರೆ ಪರಂಪರೆ ಮುದ್ರೆ" : "Davangere Kitchen Seal"}
                </span>
                <span className="text-[11px] text-[#6B6157] mt-0.5">
                  {lang === "kn" ? "ಮೂರು ತಲೆಮಾರುಗಳ ಸಂರಕ್ಷಿತ ಪಾಕವಿಧಾನಗಳು" : "Three generations of preserved ancestral recipes"}
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5A5048] leading-relaxed">
              {lang === "kn"
                ? "ಅಮ್ಮನಿಗೆ ಪರಂಪರೆಯಿಂದ ಬಂದ ಪಾಕವಿಧಾನಗಳು. ಯಾವುದೇ ಕೃತಕ ರಾಸಾಯನಿಕಗಳಿಲ್ಲದೆ, ಕೈಯಲ್ಲೇ ಕುಟ್ಟಿದ ಅಸಲಿ ಹದ."
                : "Recipes Amma inherited, cooked the exact way they were cooked seventy years ago. Zero chemicals, zero commercial shortcuts."}
            </p>
          </div>
        </div>

        {/* The 4-Step Horizontal Ancestral Journey / Timeline */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#D9CFBF]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5F252D]">
              {lang === "kn" ? "ಹಂತ-ಹಂತದ ಪಯಣ (೪ ಹಂತಗಳು)" : "The 4-Step Ancestral Circle"}
            </span>
            <span className="text-xs text-[#7A6E63]">
              {lang === "kn" ? "ಮಣ್ಣಿನಿಂದ ತಟ್ಟೆಯವರೆಗೆ" : "From Soil to Plate"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="relative bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-5 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-serif-brand text-2xl font-bold text-[#5F252D]/70 group-hover:text-[#5F252D] transition-colors">
                  01
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#764D30] border border-[#E2D9CA]">
                  {lang === "kn" ? "ಹಂತ ೧" : "Step 01"}
                </span>
              </div>
              <div>
                <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                  {lang === "kn" ? "ಬಿಸಿಲಿನ ಸಂಸ್ಕಾರ" : "Harvest & Sun-Dry"}
                </h3>
                <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                  {lang === "kn"
                    ? "ಸ್ಥಳೀಯ ರೈತರಿಂದ ತಂದ ಬ್ಯಾಡಗಿ ಮೆಣಸು, ಗುರೆಳ್ಳು ಮತ್ತು ಕಾಳುಗಳನ್ನು ಹಳ್ಳಿಯ ತಾರಸಿ ಮೇಲೆ ಬೆಳಗಿನ ಸೂರ್ಯನ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಲಾಗುತ್ತದೆ."
                    : "Native Byadgi chillies, niger seeds, and lentils sun-cured on open terracotta terraces to seal volatile oils naturally."}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-5 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-serif-brand text-2xl font-bold text-[#5F252D]/70 group-hover:text-[#5F252D] transition-colors">
                  02
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#764D30] border border-[#E2D9CA]">
                  {lang === "kn" ? "ಹಂತ ೨" : "Step 02"}
                </span>
              </div>
              <div>
                <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                  {lang === "kn" ? "ಕಬ್ಬಿಣದ ಹುರಿ ಮತ್ತು ಕುಟ್ಟು" : "Slow Roast & Pound"}
                </h3>
                <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                  {lang === "kn"
                    ? "ಭಾರವಾದ ಕಬ್ಬಿಣದ ಬಾಣಲೆಗಳಲ್ಲಿ ಹದವಾಗಿ ಹುರಿದು, ಕಲ್ಲಿನ ಒರಳಿನಲ್ಲಿ ಕೈಯಾರೆ ಕುಟ್ಟಲಾಗುತ್ತದೆ. ನಯವಾದ ಪುಡಿಯಾಗದೆ ತಿನಿಸಿನ ಗರಿಗರಿ ಉಳಿಯುತ್ತದೆ."
                    : "Toasted on heavy seasoned cast-iron over low flame, then rhythmic stone-pounded for authentic coarse crunch."}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-5 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-serif-brand text-2xl font-bold text-[#5F252D]/70 group-hover:text-[#5F252D] transition-colors">
                  03
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#764D30] border border-[#E2D9CA]">
                  {lang === "kn" ? "ಹಂತ ೩" : "Step 03"}
                </span>
              </div>
              <div>
                <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                  {lang === "kn" ? "ಭರಣಿ ಮಾಗುವಿಕೆ" : "Bharani Ageing"}
                </h3>
                <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                  {lang === "kn"
                    ? "ಉಪ್ಪಿನಕಾಯಿಗಳು ಬಿಳಿ-ಕಂದು ಪಿಂಗಾಣಿ ಭರಣಿಗಳಲ್ಲಿ ಕಲ್ಲುಪ್ಪು ಮತ್ತು ಗಾಣದ ಎಣ್ಣೆಯಲ್ಲಿ ೯೦ ದಿನಗಳ ಕಾಲ ನೈಸರ್ಗಿಕವಾಗಿ ಮಾಗುತ್ತವೆ."
                    : "Bathed in cold-pressed sesame oil and sea salt inside earthen ceramic bharanis, rested for 90 patient days."}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-5 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-serif-brand text-2xl font-bold text-[#5F252D]/70 group-hover:text-[#5F252D] transition-colors">
                  04
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#764D30] border border-[#E2D9CA]">
                  {lang === "kn" ? "ಹಂತ ೪" : "Step 04"}
                </span>
              </div>
              <div>
                <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                  {lang === "kn" ? "ತಾಜಾ ಕಟ್ಟುವುದು" : "Fresh Packing"}
                </h3>
                <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                  {lang === "kn"
                    ? "ಯಾವುದೇ ರಾಸಾಯನಿಕ ಸಂರಕ್ಷಕಗಳಿಲ್ಲದೆ, ದಾವಣಗೆರೆಯ ಅಡುಗೆಮನೆಯಿಂದ ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ ೨೪-೪೮ ಗಂಟೆಗಳಲ್ಲಿ ರವಾನೆ."
                    : "Small-batch packed at our Davangere hearth in aroma-lock pouches and dispatched directly within 24–48 hours."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Callout with Italic Serif Quote & Amma's Heritage Wax Seal */}
        <div className="bg-[#EFE5D8] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#D9CFBF] shadow-xs">
          <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
            <h3 className="font-serif-brand italic text-2xl sm:text-3xl md:text-4xl text-[#5F252D] font-normal leading-snug">
              {lang === "kn"
                ? "“ಮನೆಯ ರುಚಿಯಂತೆ ಅನ್ನಿಸದಿದ್ದರೆ, ಆ ಅಡುಗೆ ಅಡುಗೆಮನೆಯಿಂದ ಹೊರಹೋಗಬಾರದು.”"
                : "“If the food doesn't taste like home, it shouldn't leave the kitchen.”"}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6157] font-medium tracking-wide">
              {lang === "kn"
                ? "— ಅಮ್ಮ, ಮುಖ್ಯ ಪಾಕಶಾಸ್ತ್ರಜ್ಞರು, ಖಾದ್ಯಂ, ದಾವಣಗೆರೆ"
                : "— Amma, Head of Culinary Traditions at Khaadyam, Davangere"}
            </p>
          </div>

          {/* Traditional Kannada Signature / Heritage Seal Mark */}
          <div className="w-36 h-36 rounded-full border-2 border-[#5F252D]/30 bg-gradient-to-br from-[#FAF9F5] via-[#F5EBE1] to-[#EBDCCF] p-2 shadow-md flex flex-col items-center justify-center text-center shrink-0 relative overflow-hidden select-none">
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#5F252D]/40 pointer-events-none" />
            <span className="font-kannada text-xs font-semibold text-[#5F252D] tracking-wider">
              ಅಮ್ಮನ ಹಸ್ತ
            </span>
            <span className="font-serif-brand text-sm font-bold text-[#1D1A17] tracking-tight mt-0.5">
              AMMA'S SEAL
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#764D30] font-sans font-medium mt-0.5">
              Davangere · 1954
            </span>
            <div className="w-6 h-0.5 bg-[#5F252D]/30 my-1 rounded-full" />
            <span className="text-[8px] text-[#5A5048] uppercase tracking-wider font-semibold">
              Pure Heritage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
