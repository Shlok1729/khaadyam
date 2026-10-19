"use client";

import React from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const { lang, setShopDoor } = useKhaadyam();

  const handleServeMeal = () => {
    setShopDoor("meal");
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleBrowseFamilies = () => {
    setShopDoor("category");
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#FAF9F5] pt-8 pb-16 md:pt-12 md:pb-24 px-4 md:px-8 border-b border-[#D9CFBF]/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        {/* Simplified Clean Tracked-out Eyebrow Label */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#5F252D]">
          <span className="inline-block w-6 h-[1.5px] bg-[#5F252D]/60" />
          {lang === "kn" ? (
            <span className="font-kannada tracking-wider">ಬನ್ನಿ · ಕೂತ್ಕೊಳ್ಳಿ · ಊಟ ಮಾಡಿ</span>
          ) : (
            <span>COME IN · SIT DOWN · EAT</span>
          )}
        </div>

        {/* Hero Main Grid: Left Editorial + Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-end">
          {/* Left Column: Title and Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5 md:gap-6">
            <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.6rem] font-normal leading-[1.08] text-[#1D1A17] tracking-tight">
              {lang === "kn" ? (
                <span className="font-kannada block leading-tight">
                  ಪ್ರತಿಯೊಂದು ಮನೆಯಲ್ಲೂ ಒಬ್ಬ ಅಮ್ಮ ಇರುತ್ತಾಳೆ.
                  <span className="block italic font-normal text-[#5F252D] mt-1 sm:mt-1.5">
                    ಖಾದ್ಯಂ ಆಕೆಯು ಉಳಿಸಿಕೊಂಡ ರುಚಿ.
                  </span>
                </span>
              ) : (
                <>
                  <span className="block">Every home has an Amma.</span>
                  <span className="block italic font-normal text-[#5F252D] mt-1 sm:mt-1.5">
                    Khaadyam is the taste she kept.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#5A5048] font-normal leading-relaxed max-w-xl">
              {lang === "kn" ? (
                <span className="font-kannada">
                  ದಾವಣಗೆರೆಯ ಅಡುಗೆಮನೆಯಲ್ಲಿ ತಲೆಮಾರುಗಳಿಂದ ಉಳಿದುಬಂದ ಅಸಲಿ ರುಚಿ. ಕೈಯಲ್ಲೇ ಕುಟ್ಟಿದ ಚಟ್ನಿ ಪುಡಿಗಳು, ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ಮಾಗಿಸಿದ ಉಪ್ಪಿನಕಾಯಿ ಮತ್ತು ಹಬ್ಬದ ಊಟದ ಸವಿ ನಿಮ್ಮ ಮನೆಗೆ.
                </span>
              ) : (
                "Recipes passed from hand to hand in Davangere. Freshly ground powders, bharani-matured pickles, and whole curated plates sent fresh to your doorstep every month."
              )}
            </p>

            {/* Action CTAs with Supporting Microcopy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 pt-2">
              {/* Primary CTA */}
              <div className="flex-1 sm:flex-initial flex flex-col">
                <button
                  onClick={handleServeMeal}
                  className="group bg-[#5F252D] hover:bg-[#471920] text-[#F4EFE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-base font-medium transition-smooth shadow-md hover:shadow-lg flex items-center justify-between sm:justify-center gap-3 cursor-pointer"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-medium text-sm sm:text-base leading-tight">
                      {lang === "kn" ? "ಇಡೀ ತಟ್ಟೆ ಬಡಿಸಿ" : "Serve me a whole meal"}
                    </span>
                    <span className="text-[11px] text-[#EADCD8]/80 font-normal tracking-wide mt-0.5">
                      {lang === "kn" ? "ಕ್ಯುರೇಟೆಡ್ ಮಾಸಿಕ ತಟ್ಟೆಗಳು" : "Curated subscription boxes"}
                    </span>
                  </div>
                  <ArrowDown className="w-4 h-4 text-[#F4EFE6] group-hover:translate-y-1 transition-transform flex-shrink-0" />
                </button>
              </div>

              {/* Secondary CTA */}
              <div className="flex-1 sm:flex-initial flex flex-col">
                <button
                  onClick={handleBrowseFamilies}
                  className="group bg-transparent hover:bg-[#5F252D] text-[#1D1A17] hover:text-[#F4EFE6] border-[1.5px] border-[#5F252D] px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-base font-medium transition-smooth flex items-center justify-between sm:justify-center gap-3 cursor-pointer"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-medium text-sm sm:text-base leading-tight">
                      {lang === "kn" ? "೮ ಆಹಾರ ವಿಭಾಗಗಳನ್ನು ನೋಡಿ" : "See the 8 food families"}
                    </span>
                    <span className="text-[11px] text-[#5A5048] group-hover:text-[#F4EFE6]/80 font-normal tracking-wide transition-colors mt-0.5">
                      {lang === "kn" ? "ಪುಡಿಗಳು, ಉಪ್ಪಿನಕಾಯಿ ಮತ್ತು ಮಸಾಲೆಗಳು" : "Explore powders, pickles & masalas"}
                    </span>
                  </div>
                  <span className="text-sm font-semibold transition-transform group-hover:translate-x-1 flex-shrink-0">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Warli Art Video with Arched Pedestal & Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end w-full relative">
            {/* Soft Architectural Arched Backdrop */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[14/11] rounded-t-[120px] sm:rounded-t-[180px] rounded-b-3xl bg-gradient-to-b from-[#F5ECE2] via-[#EFE6DA] to-[#E6D7C7] border border-[#D9CFBF]/60 shadow-sm flex items-center justify-center p-6 sm:p-8 pb-4 overflow-visible">
              {/* Floating Badge 1: Quality / Trust Rating */}
              <div className="absolute -top-3 sm:-top-4 left-2 sm:-left-3 bg-[#FAF9F5]/95 backdrop-blur-md border border-[#D9CFBF] shadow-md rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-2.5 z-10 transition-transform hover:scale-105 select-none">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D] font-bold text-xs sm:text-sm">
                  ★
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#1D1A17] flex items-center gap-1">
                    4.9 <span className="text-[#5F252D] text-[10px] sm:text-xs">★★★★★</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#5A5048]">
                    {lang === "kn" ? "೧,೨೦೦+ ಮನೆಗಳ ಮೆಚ್ಚುಗೆ" : "From 1,200+ South Indian homes"}
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Authentic Bharani Jar Food Cue */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-1 sm:-right-3 bg-[#FAF9F5]/95 backdrop-blur-md border border-[#D9CFBF] shadow-md rounded-2xl p-2 sm:p-2.5 pr-3 sm:pr-4 flex items-center gap-2.5 sm:gap-3 z-10 transition-transform hover:scale-105 select-none">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#D9CFBF]/90 bg-[#FAF9F5] flex-shrink-0 shadow-sm">
                  <img
                    src="/bharani.jpg"
                    alt="Traditional Ceramic Bharani Jar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#5F252D] tracking-tight">
                    {lang === "kn" ? "ಮಣ್ಣಿನ ಭರಣಿ ಮಾಗುವಿಕೆ" : "Ceramic Bharani-Matured"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#5A5048]">
                    {lang === "kn" ? "ಕಲ್ಲಿನಲ್ಲಿ ಅರೆದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ" : "Stone-ground · Zero preservatives"}
                  </span>
                </div>
              </div>

              {/* Video with seamless blend, no rectangular box or shadow */}
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  src="/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain mix-blend-multiply pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Cultural Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Card 1 */}
          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-smooth">
            <div className="h-44 rounded-xl bg-gradient-to-br from-[#EADCD8] to-[#E9DFCE] border border-[#D9CFBF]/60 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
              <Sparkles className="w-6 h-6 text-[#5F252D] mb-2 opacity-80" />
              <span className="font-serif-brand text-xl text-[#5F252D]">
                {lang === "kn" ? "ಅಮೃತ ಹಸ್ತ" : "Mother's Hands"}
              </span>
              <span className="text-xs text-[#5A5048] mt-1">
                {lang === "kn" ? "ತಟ್ಟೆಗೆ ಬಡಿಸುವ ಪ್ರೀತಿಯ ಊಟ" : "A meal being served, hands only"}
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#5F252D] uppercase tracking-wider mb-1">
                {lang === "kn" ? "ತಟ್ಟೆ" : "The Plate"}
              </div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                {lang === "kn" ? "ಮನೆಯಂತೆಯೇ ಬಡಿಸುವ ರುಚಿ" : "Served like home"}
              </h3>
              <p className="text-sm text-[#5A5048] mt-1 leading-relaxed">
                {lang === "kn"
                  ? "ಬಿಸಿ ಅನ್ನ, ಕರಗುವ ತುಪ್ಪ ಮತ್ತು ಸುವಾಸನೆಯ ಗುರೆಳ್ಳು ಚಟ್ನಿ ಪುಡಿ."
                  : "Hot steamed rice, melting ghee, and freshly toasted Gurellu Chutney Pudi served by Amma."}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-smooth">
            <div className="h-44 rounded-xl bg-gradient-to-br from-[#E9DFCE] to-[#D9CFBF] border border-[#D9CFBF]/60 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center mb-2">
                <span className="text-lg">☀️</span>
              </div>
              <span className="font-serif-brand text-xl text-[#764D30]">
                {lang === "kn" ? "ಬಿಸಿಲಿನ ಸಂಸ್ಕಾರ" : "Sun-Cured Spices"}
              </span>
              <span className="text-xs text-[#5A5048] mt-1">
                {lang === "kn" ? "ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಬ್ಯಾಡಗಿ ಮೆಣಸು" : "Native spices drying in the sun"}
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#5F252D] uppercase tracking-wider mb-1">
                {lang === "kn" ? "ಕೈಕುಟ್ಟಿದ ಮಸಾಲೆ" : "Stone-Ground"}
              </div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                {lang === "kn" ? "ದಾವಣಗೆರೆಯ ಮಣ್ಣಿನ ಸುವಾಸನೆ" : "Davangere soil"}
              </h3>
              <p className="text-sm text-[#5A5048] mt-1 leading-relaxed">
                {lang === "kn"
                  ? "ಕಬ್ಬಿಣದ ಬಾಣಲೆಯಲ್ಲಿ ಹದವಾಗಿ ಹುರಿದು, ಬೀಸುವ ಕಲ್ಲಿನಲ್ಲಿ ಅರೆದ ಅಸಲಿ ಪುಡಿಗಳು."
                  : "Zero industrial mills. Spices roasted on iron kadhais and ground on stone chakki for aroma."}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-smooth">
            <div className="h-44 rounded-xl bg-gradient-to-br from-[#EDE5D6] to-[#EADCD8] border border-[#D9CFBF]/60 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#506D41]/20 flex items-center justify-center mb-2">
                <span className="text-lg">🌿</span>
              </div>
              <span className="font-serif-brand text-xl text-[#506D41]">
                {lang === "kn" ? "ತಿಂಗಳ ನೆಮ್ಮದಿ" : "Monthly Replenish"}
              </span>
              <span className="text-xs text-[#5A5048] mt-1">
                {lang === "kn" ? "ತಿಂಗಳಿಗೊಮ್ಮೆ ಬರುವ ತಾಜಾ ಪೆಟ್ಟಿಗೆ" : "Fresh jars on your table every month"}
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#506D41] uppercase tracking-wider mb-1">
                {lang === "kn" ? "ಚಂದಾದಾರಿಕೆ" : "Subscriptions"}
              </div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal">
                {lang === "kn" ? "ಖಾಲಿಯಾಗದ ಭರಣಿ" : "Never an empty jar"}
              </h3>
              <p className="text-sm text-[#5A5048] mt-1 leading-relaxed">
                {lang === "kn"
                  ? "೬, ೯ ಅಥವಾ ೧೨ ತಿಂಗಳು ಆರಿಸಿ. ನಿಮ್ಮ ಅಡುಗೆಮನೆಗೆ ಪ್ರತಿ ತಿಂಗಳು ನೇರವಾಗಿ ತಲುಪುತ್ತದೆ."
                  : "Choose 6, 9 or 12 months. Your pantry arrives right on the 5th, 15th, or 25th of every month."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
