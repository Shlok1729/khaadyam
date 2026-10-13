"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { StorySection } from "@/components/StorySection";
import {
  ArrowLeft,
  Sparkles,
  ArrowRight,
  Heart,
  Clock,
  ShieldCheck,
  Flame,
} from "lucide-react";

export default function OurStoryPage() {
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
              {lang === "kn" ? "ನಮ್ಮ ಕತೆ (Our Story)" : "Our Story"}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#5F252D] font-semibold bg-[#FAF9F5] px-3.5 py-1.5 rounded-full border border-[#D9CFBF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {lang === "kn"
                ? "೭೦ ವರ್ಷಗಳ ಅಡುಗೆ ಪರಂಪರೆ · ದಾವಣಗೆರೆ"
                : "70 Years of Family Heritage · Davangere"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Story Content */}
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
            {/* Heirloom 1 */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-smooth">
              <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D]">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                {lang === "kn" ? "ಒರಳು ಕಲ್ಲು (Stone Mortars)" : "The Stone Mortar"}
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5048] leading-relaxed">
                {lang === "kn"
                  ? "ಚಟ್ನಿ ಪುಡಿಗಳಿಗೆ ಬೇಕಾದ ಒರಟು ಹದ ಮತ್ತು ಸ್ವಾಭಾವಿಕ ಎಣ್ಣೆಯಂಶ ಉಳಿಯಲು ಕೈಯಿಂದಲೇ ಕುಟ್ಟಲಾಗುತ್ತದೆ. ನಯವಾದ ಧೂಳಿನಂತೆ ಅಲ್ಲ, ಅಗಿಯುವಾಗ ರುಚಿ ಸಿಗುವಂತೆ."
                  : "Stone pounding breaks spices rhythmically without friction burn. You get the real crunch of roasted lentils, curry leaves, and dry coconut intact."}
              </p>
            </div>

            {/* Heirloom 2 */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-smooth">
              <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D]">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                {lang === "kn" ? "ಕಬ್ಬಿಣದ ಬಾಣಲೆ (Cast Iron Kadhais)" : "Heavy Cast Iron"}
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5048] leading-relaxed">
                {lang === "kn"
                  ? "ತಲೆಮಾರುಗಳಿಂದ ಪಳಗಿದ ಭಾರವಾದ ಕಬ್ಬಿಣದ ಪಾತ್ರೆಗಳಲ್ಲಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಹುರಿಯುವ ವಿಧಾನ. ಹೊಗೆಯಾಗದ ಸಮತೋಲಿತ ಪರಿಮಳ."
                  : "Decades-seasoned iron heats evenly. Spices toast through their core on gentle embers, unleashing volatile essential oils that factory roasting destroys."}
              </p>
            </div>

            {/* Heirloom 3 */}
            <div className="bg-[#FAF9F5] border border-[#E2D9CA] rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-smooth">
              <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D]">
                <ShieldCheck className="w-6 h-6" />
              </div>
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
      </section>

      {/* Call to Experience Amma's Food */}
      <section className="w-full py-16 md:py-20 px-4 md:px-8 bg-[#FAF9F5]">
        <div className="max-w-4xl mx-auto bg-[#FBF8F2] border border-[#E2D9CA] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#5F252D]/10 flex items-center justify-center text-[#5F252D]">
            <Heart className="w-6 h-6" />
          </div>

          <h3 className="font-serif-brand text-2xl md:text-4xl text-[#1D1A17] max-w-xl">
            {lang === "kn"
              ? "ನಿಮ್ಮ ತಟ್ಟೆಯಲ್ಲಿ ಅಮ್ಮನ ಅಸಲಿ ಕೈರುಚಿಯನ್ನು ಸವಿಯಿರಿ"
              : "Bring the warmth of Amma's kitchen to your daily table"}
          </h3>

          <p className="text-sm md:text-base text-[#5A5048] max-w-lg leading-relaxed">
            {lang === "kn"
              ? "ದಾವಣಗೆರೆಯಿಂದ ತಾಜಾವಾಗಿ ತಯಾರಾದ ಚಟ್ನಿ ಪುಡಿಗಳು, ಉಪ್ಪಿನಕಾಯಿಗಳು ಮತ್ತು ಪಾರಂಪರಿಕ ಊಟದ ತಟ್ಟೆಗಳು ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ."
              : "Experience freshly ground powders, bharani-matured pickles, and whole curated meal plates delivered fresh to your doorstep."}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/#shop"
              className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-8 py-3.5 rounded-full text-sm font-medium transition-smooth shadow-md flex items-center justify-center gap-2"
            >
              <span>{lang === "kn" ? "ಅಂಗಡಿಯನ್ನು ವೀಕ್ಷಿಸಿ" : "Explore the Pantry"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/gift-a-basket"
              className="bg-transparent hover:bg-[#E9DFCE]/60 text-[#1D1A17] border border-[#5F252D] px-8 py-3.5 rounded-full text-sm font-medium transition-smooth flex items-center justify-center gap-2"
            >
              <span>{lang === "kn" ? "ಆಪ್ತರಿಗೆ ಉಡುಗೊರೆ ಕಳಿಸಿ" : "Gift a Basket"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
