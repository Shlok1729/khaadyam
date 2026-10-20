"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { StorySection } from "@/components/StorySection";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurStoryPage() {
  const { lang } = useKhaadyam();

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F5]">
      {/* Top Breadcrumb: Clean, Focused Navigation */}
      <div className="w-full bg-[#F4EFE6] border-b border-[#D9CFBF] py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-[#6B6157]">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-[#5F252D] transition-smooth font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === "kn" ? "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ" : "Back to Home"}</span>
            </Link>
            <span className="opacity-40">/</span>
            <span className="font-semibold text-[#5F252D]">
              {lang === "kn" ? "ನಮ್ಮ ಕತೆ" : "Our Story"}
            </span>
          </div>

          <span className="text-[11px] text-[#7A6E63] font-medium hidden sm:inline">
            {lang === "kn" ? "ದಾವಣಗೆರೆ ಪರಂಪರೆ" : "Davangere Kitchen Traditions"}
          </span>
        </div>
      </div>

      {/* Main Story Content: Hero, 4-Step Ancestral Circle, Italic Quote & Amma Seal */}
      <StorySection />

      {/* Amma's Kitchen Philosophy & The 3 Heirlooms */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#F4EFE6] border-b border-[#D9CFBF]">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#5F252D]">
              {lang === "kn" ? "ಪಾರಂಪರಿಕ ಪರಿಕರಗಳು" : "The Kitchen Heirlooms"}
            </span>
            <h3 className="font-serif-brand text-3xl md:text-4xl text-[#1D1A17]">
              {lang === "kn"
                ? "ಯಂತ್ರಗಳಿಲ್ಲದ ಕಾಲದ ಶುದ್ಧ ಹದ"
                : "Tools that keep the slow patience alive"}
            </h3>
            <p className="text-sm text-[#5A5048] leading-relaxed">
              {lang === "kn"
                ? "ವೇಗದ ಯಂತ್ರಗಳು ಆಹಾರದ ಸತ್ವವನ್ನು ಸುಟ್ಟುಹಾಕುತ್ತವೆ. ಆದ್ದರಿಂದ ಅಮ್ಮ ಇಂದಿಗೂ ಹಳೆಯ ಪರಿಕರಗಳನ್ನೇ ನೆಚ್ಚಿಕೊಂಡಿದ್ದಾರೆ."
                : "Modern high-speed industrial grinders heat spices past their boiling point. Amma still insists on cold, slow ancestral methods."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heirloom 1: The Stone Mortar (ಒರಳು ಕಲ್ಲು · Orlu / Ural) */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-smooth group">
              {/* Tactile Stone Mortar Visual Element */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#E8DEC9] via-[#DDD2BD] to-[#C9BC9E] border border-[#D9CFBF] flex flex-col items-center justify-center relative overflow-hidden p-4 group-hover:brightness-[1.02] transition-all">
                <div className="w-20 h-20 rounded-full bg-[#3B3835] border-4 border-[#524E4A] shadow-md flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-[#292623] shadow-inner flex items-center justify-center">
                    <span className="w-5 h-8 bg-gradient-to-t from-[#8E877E] to-[#605B54] rounded-t-lg -rotate-12 shadow-sm" />
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F252D] mt-2 bg-[#FAF9F5]/90 px-2 py-0.5 rounded-full border border-[#D9CFBF]">
                  {lang === "kn" ? "ಒರಳು ಕಲ್ಲು" : "Stone Ural · Orlu"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                  {lang === "kn" ? "ಒರಳು ಕಲ್ಲು (Stone Mortars)" : "The Stone Mortar"}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5048] leading-relaxed">
                  {lang === "kn"
                    ? "ಚಟ್ನಿ ಪುಡಿಗಳಿಗೆ ಬೇಕಾದ ಒರಟು ಹದ ಮತ್ತು ಸ್ವಾಭಾವಿಕ ಎಣ್ಣೆಯಂಶ ಉಳಿಯಲು ಕೈಯಿಂದಲೇ ಕುಟ್ಟಲಾಗುತ್ತದೆ. ನಯವಾದ ಧೂಳಿನಂತೆ ಅಲ್ಲ, ಅಗಿಯುವಾಗ ರುಚಿ ಸಿಗುವಂತೆ."
                    : "Stone pounding breaks spices rhythmically without friction burn. You get the real crunch of roasted lentils, curry leaves, and dry coconut intact."}
                </p>
              </div>
            </div>

            {/* Heirloom 2: Heavy Cast Iron Kadhai (ಕಬ್ಬಿಣದ ಬಾಣಲೆ) */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-smooth group">
              {/* Tactile Cast-Iron Kadhai Visual Element */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#EDE4D5] via-[#E2D6C3] to-[#D4C5AF] border border-[#D9CFBF] flex flex-col items-center justify-center relative overflow-hidden p-4 group-hover:brightness-[1.02] transition-all">
                <div className="relative w-24 h-16 rounded-b-full bg-gradient-to-b from-[#2B2927] to-[#1C1A18] border-2 border-[#47433F] shadow-lg flex items-center justify-center">
                  {/* Kadhai Handles */}
                  <span className="absolute -left-2.5 top-1 w-3 h-3 rounded-full border-2 border-[#47433F]" />
                  <span className="absolute -right-2.5 top-1 w-3 h-3 rounded-full border-2 border-[#47433F]" />
                  {/* Warm gentle ember glow cue */}
                  <div className="w-10 h-3 rounded-full bg-[#B45431]/40 blur-xs" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#764D30] mt-3 bg-[#FAF9F5]/90 px-2 py-0.5 rounded-full border border-[#D9CFBF]">
                  {lang === "kn" ? "ಕಬ್ಬಿಣದ ಬಾಣಲೆ" : "Seasoned Cast Iron"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                  {lang === "kn" ? "ಕಬ್ಬಿಣದ ಬಾಣಲೆ (Cast Iron Kadhais)" : "Heavy Cast Iron"}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5048] leading-relaxed">
                  {lang === "kn"
                    ? "ತಲೆಮಾರುಗಳಿಂದ ಪಳಗಿದ ಭಾರವಾದ ಕಬ್ಬಿಣದ ಪಾತ್ರೆಗಳಲ್ಲಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಹುರಿಯುವ ವಿಧಾನ. ಹೊಗೆಯಾಗದ ಸಮತೋಲಿತ ಪರಿಮಳ."
                    : "Decades-seasoned iron heats evenly. Spices toast through their core on gentle embers, unleashing volatile essential oils that factory roasting destroys."}
                </p>
              </div>
            </div>

            {/* Heirloom 3: Glazed Earthen Bharani (ಮಣ್ಣಿನ ಪಿಂಗಾಣಿ ಭರಣಿ) */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-smooth group">
              {/* Authentic Ceramic Bharani Photographic Card */}
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#F5EDE3] via-[#EFE5D8] to-[#E3D4C1] border border-[#D9CFBF] flex flex-col items-center justify-center relative overflow-hidden p-3 group-hover:brightness-[1.02] transition-all">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border-2 border-white/90 bg-[#FAF9F5] group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/bharani.jpg"
                    alt="Traditional White-and-Brown Ceramic Bharani Jar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F252D] mt-2 bg-[#FAF9F5]/90 px-2 py-0.5 rounded-full border border-[#D9CFBF]">
                  {lang === "kn" ? "ಪಿಂಗಾಣಿ ಭರಣಿ" : "Glazed Bharani"}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                  {lang === "kn" ? "ಮಣ್ಣಿನ ಭರಣಿ (Glazed Bharanis)" : "Glazed Bharanis"}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5048] leading-relaxed">
                  {lang === "kn"
                    ? "ಪ್ಲಾಸ್ಟಿಕ್ ಡಬ್ಬಿಗಳ ಬದಲಿಗೆ, ಉಪ್ಪಿನಕಾಯಿಗಳನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಪಿಂಗಾಣಿ ಭರಣಿಗಳಲ್ಲಿ ಶುದ್ಧ ಎಣ್ಣೆ ಮತ್ತು ಕಲ್ಲುಪ್ಪಿನೊಂದಿಗೆ ಮಾಗಿಸಲಾಗುತ್ತದೆ."
                    : "Never plastic. Our pickles rest inside dark ceramic jars, bathed in unrefined cold-pressed sesame oil and native sea salt for ninety patient days."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Grounding Inverted Deep Wine CTA Card */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto bg-[#5F252D] border border-[#76303B] rounded-3xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden">
          {/* Traditional Hearth Eyebrow */}
          <span className="text-xs uppercase tracking-widest text-[#EADCD8] font-semibold px-4 py-1 rounded-full bg-[#461920] border border-[#76303B]">
            {lang === "kn" ? "ನಮ್ಮ ಮನೆಯ ಒಲೆಯಿಂದ ನಿಮ್ಮ ಮನೆಗೆ" : "From Our Hearth to Yours"}
          </span>

          <h3 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl text-[#F4EFE6] max-w-2xl font-normal leading-tight">
            {lang === "kn"
              ? "ನಿಮ್ಮ ತಟ್ಟೆಯಲ್ಲಿ ಅಮ್ಮನ ಅಸಲಿ ಕೈರುಚಿಯನ್ನು ಸವಿಯಿರಿ"
              : "Bring the warmth of Amma's kitchen to your daily table"}
          </h3>

          <p className="text-sm md:text-base text-[#D9C3C0] max-w-xl leading-relaxed">
            {lang === "kn"
              ? "ದಾವಣಗೆರೆಯಿಂದ ತಾಜಾವಾಗಿ ತಯಾರಾದ ಚಟ್ನಿ ಪುಡಿಗಳು, ಉಪ್ಪಿನಕಾಯಿಗಳು ಮತ್ತು ಪಾರಂಪರಿಕ ಊಟದ ತಟ್ಟೆಗಳು ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ."
              : "Experience freshly ground powders, bharani-matured pickles, and whole curated meal plates delivered fresh from Davangere to your doorstep."}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/#shop"
              className="w-full sm:w-auto bg-[#FAF9F5] hover:bg-white text-[#5F252D] px-8 py-3.5 rounded-full text-sm font-semibold transition-smooth shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{lang === "kn" ? "ಅಂಗಡಿಯನ್ನು ವೀಕ್ಷಿಸಿ" : "Explore the Pantry"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/gift-a-basket"
              className="w-full sm:w-auto bg-[#461920] hover:bg-[#521E26] text-[#FAF9F5] border border-[#76303B] px-8 py-3.5 rounded-full text-sm font-semibold transition-smooth flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === "kn" ? "ಆಪ್ತರಿಗೆ ಉಡುಗೊರೆ ಕಳಿಸಿ" : "Gift a Basket"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
