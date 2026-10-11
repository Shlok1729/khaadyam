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
    <section className="relative w-full bg-[#FAF9F5] pt-12 pb-20 md:pt-16 md:pb-28 px-4 md:px-8 border-b border-[#D9CFBF]/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Threshold Banner */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-[#5A5048]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5F252D] bg-[#E9DFCE] px-3 py-1 rounded-full">
            {lang === "kn" ? "ಹೊಸ್ತಿಲು" : "The Threshold"}
          </span>
          <div className="flex items-center gap-3 text-sm md:text-base font-medium">
            {lang === "kn" ? (
              <span className="font-kannada">ಬನ್ನಿ / ಕೂತ್ಕೊಳ್ಳಿ / ಊಟ ಮಾಡಿ</span>
            ) : (
              <span>Come in / Sit down / Eat</span>
            )}
          </div>
        </div>

        {/* Hero Title and Editorial Copy */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-7xl font-normal leading-[1.08] text-[#1D1A17] tracking-tight">
            {lang === "kn" ? (
              <span className="font-kannada leading-tight">
                ಪ್ರತಿಯೊಂದು ಮನೆಯಲ್ಲೂ ಒಬ್ಬ ಅಮ್ಮ ಇರುತ್ತಾಳೆ. <br />
                <span className="italic font-normal text-[#5F252D]">
                  ಖಾದ್ಯಂ ಆಕೆಯು ಉಳಿಸಿಕೊಂಡ ರುಚಿ.
                </span>
              </span>
            ) : (
              <>
                Every home has an Amma. <br />
                <span className="italic font-normal text-[#5F252D]">
                  Khaadyam is the taste she kept.
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-2xl text-[#5A5048] font-normal leading-relaxed max-w-2xl">
            {lang === "kn" ? (
              <span className="font-kannada">
                ದಾವಣಗೆರೆಯ ಅಡುಗೆಮನೆಯಲ್ಲಿ ತಲೆಮಾರುಗಳಿಂದ ಉಳಿದುಬಂದ ಅಸಲಿ ರುಚಿ. ಕೈಯಲ್ಲೇ ಕುಟ್ಟಿದ ಚಟ್ನಿ ಪುಡಿಗಳು, ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ಮಾಗಿಸಿದ ಉಪ್ಪಿನಕಾಯಿ ಮತ್ತು ಹಬ್ಬದ ಊಟದ ಸವಿ ನಿಮ್ಮ ಮನೆಗೆ.
              </span>
            ) : (
              "Recipes passed from hand to hand in Davangere. Freshly ground powders, bharani-matured pickles, and whole curated plates sent fresh to your doorstep every month."
            )}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={handleServeMeal}
              className="group bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-8 py-4 rounded-full text-base font-medium transition-smooth shadow-md flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>{lang === "kn" ? "ಇಡೀ ತಟ್ಟೆ ಬಡಿಸಿ" : "Serve me a whole meal"}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-smooth" />
            </button>

            <button
              onClick={handleBrowseFamilies}
              className="bg-transparent hover:bg-[#E9DFCE]/60 text-[#1D1A17] border border-[#5F252D] px-8 py-4 rounded-full text-base font-medium transition-smooth flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === "kn" ? "೮ ಆಹಾರ ವಿಭಾಗಗಳನ್ನು ನೋಡಿ" : "See the 8 food families"}</span>
            </button>
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
              <div className="w-12 h-12 rounded-full bg-[#C99436]/20 flex items-center justify-center mb-2">
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
              <div className="text-xs font-semibold text-[#C99436] uppercase tracking-wider mb-1">
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
