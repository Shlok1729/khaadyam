"use client";

import React from "react";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { Sparkles, Leaf, ShieldCheck, Sun } from "lucide-react";

export function StorySection() {
  const { lang } = useKhaadyam();

  return (
    <section id="story" className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#FAF9F5] border-b border-[#D9CFBF]/70">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Story Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#D9CFBF]">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-2xl text-[#5F252D]">
              {lang === "kn" ? "ನಮ್ಮ ಕತೆ" : "Our Story"}
            </span>
            <h2 className="font-serif-brand text-3xl md:text-5xl font-normal text-[#1D1A17] leading-tight">
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
            </h2>
          </div>
          <p className="text-base text-[#5A5048] max-w-md leading-relaxed">
            {lang === "kn"
              ? "ಅಮ್ಮನಿಗೆ ಪರಂಪರೆಯಿಂದ ಬಂದ ಪಾಕವಿಧಾನಗಳು. ಯಾವುದೇ ಕೃತಕ ರಾಸಾಯನಿಕಗಳಿಲ್ಲದೆ, ಕೈಯಲ್ಲೇ ಕುಟ್ಟಿದ ಅಸಲಿ ಹದ."
              : "Recipes Amma inherited, cooked the exact way they were cooked seventy years ago. Zero chemicals, zero commercial shortcuts."}
          </p>
        </div>

        {/* The 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D]">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal mt-1">
                {lang === "kn" ? "ಬಿಸಿಲಿನ ಸಂಸ್ಕಾರ" : "Sun-Drying on Terraces"}
              </h3>
              <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                {lang === "kn"
                  ? "ಬ್ಯಾಡಗಿ ಮೆಣಸು ಮತ್ತು ಧಾನ್ಯಗಳನ್ನು ನೈಸರ್ಗಿಕ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿ ಪರಿಮಳವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುತ್ತೇವೆ."
                  : "Byadgi chillies, whole cumin, and native pulses dried under the morning sun to lock in the genuine aroma."}
              </p>
            </div>
          </div>

          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div className="w-12 h-12 rounded-full bg-[#506D41]/15 flex items-center justify-center text-[#506D41]">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal mt-1">
                {lang === "kn" ? "ಕೈಕುಟ್ಟಿದ ಹದ" : "Iron Kadhais & Stone Pounding"}
              </h3>
              <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                {lang === "kn"
                  ? "ಕಬ್ಬಿಣದ ಬಾಣಲೆಯಲ್ಲಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿದು, ಬೀಸುವ ಕಲ್ಲಿನಲ್ಲಿ ಕುಟ್ಟಿದ ಪಾರಂಪರಿಕ ಹದ."
                  : "Slow-roasted on traditional cast iron kadhais without burning, pounded in stone mortars for texture."}
              </p>
            </div>
          </div>

          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div className="w-12 h-12 rounded-full bg-[#B45431]/15 flex items-center justify-center text-[#B45431]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal mt-1">
                {lang === "kn" ? "ಮಣ್ಣಿನ ಭರಣಿ" : "Earthen Bharani Maturing"}
              </h3>
              <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                {lang === "kn"
                  ? "ಯಾವುದೇ ಕೃತಕ ಹುಳಿ ಇಲ್ಲದೆ, ಮಣ್ಣಿನ ಭರಣಿಯಲ್ಲಿ ೯೦ ದಿನಗಳ ಕಾಲ ಮಾಗಿಸಿದ ಉಪ್ಪಿನಕಾಯಿ."
                  : "No vinegar or artificial acidity. Pickles matured for 90 days inside sealed porcelain earthen pots in wood-pressed oil."}
              </p>
            </div>
          </div>

          <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div className="w-12 h-12 rounded-full bg-[#5F252D]/15 flex items-center justify-center text-[#5F252D]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-brand text-xl text-[#1D1A17] font-normal mt-1">
                {lang === "kn" ? "ಪವಿತ್ರ ಶುದ್ಧತೆ" : "Zero Added Preservatives"}
              </h3>
              <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                {lang === "kn"
                  ? "ಅಮ್ಮ ತನ್ನ ಮನೆಯಲ್ಲಿ ಬಳಸುವ ಕಲ್ಲುಪ್ಪು, ಸಾಸಿವೆ, ಎಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ ಮಾತ್ರವೇ ಇಲ್ಲಿಯೂ ಇರುತ್ತದೆ."
                  : "What you eat is only what Amma put in the recipe: seeds, pulses, rock salt, native spices, and pure cow ghee."}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Callout */}
        <div className="bg-[#E9DFCE] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D9CFBF]">
          <div className="flex flex-col gap-2 max-w-xl">
            <h3 className="font-serif-brand text-2xl md:text-3xl text-[#1D1A17]">
              {lang === "kn"
                ? '"ಮನೆಯ ರುಚಿಯಂತೆ ಅನ್ನಿಸದಿದ್ದರೆ, ಆ ಅಡುಗೆ ಅಡುಗೆಮನೆಯಿಂದ ಹೊರಹೋಗಬಾರದು."'
                : '"If the food doesn\'t taste like home, it shouldn\'t leave the kitchen."'}
            </h3>
            <p className="text-sm text-[#5A5048]">
              {lang === "kn"
                ? "— ಅಮ್ಮ, ಮುಖ್ಯ ಪಾಕಶಾಸ್ತ್ರಜ್ಞರು, ಖಾದ್ಯಂ, ದಾವಣಗೆರೆ"
                : "— Amma, Head of Culinary Traditions at Khaadyam, Davangere"}
            </p>
          </div>
          <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#5F252D]/40 flex flex-col items-center justify-center p-3 bg-[#FAF9F5] shadow-inner text-center shrink-0 gap-1.5">
            <Image
              src="/logo.png"
              alt="Khaadyam Seal"
              width={64}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <span className="font-serif-brand text-xs tracking-wider text-[#5F252D] font-medium">
              {lang === "kn" ? "ಖಾದ್ಯಂ" : "khaadyam"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
