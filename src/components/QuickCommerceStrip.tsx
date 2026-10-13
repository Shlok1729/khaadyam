"use client";

import React from "react";
import { Zap } from "lucide-react";

export function QuickCommerceStrip() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-[#5F252D]">
            <Zap className="w-4 h-4 text-[#5F252D] fill-current" />
            <span>Instant Refill Door</span>
          </div>
          <h3 className="font-serif-brand text-2xl text-[#1D1A17] font-normal">
            In a hurry for a refill?
          </h3>
          <p className="text-xs md:text-sm text-[#5A5048]">
            Need Gurellu or Shenga Chutney Pudi before dinner? Get it in 10-15 minutes in Bengaluru.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.swiggy.com/instamart"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border-1.5 border-[#5F252D] text-[#5F252D] hover:bg-[#5F252D] hover:text-[#F4EFE6] text-xs font-semibold transition-smooth"
          >
            Swiggy Instamart
          </a>
          <a
            href="https://blinkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border-1.5 border-[#5F252D] text-[#5F252D] hover:bg-[#5F252D] hover:text-[#F4EFE6] text-xs font-semibold transition-smooth"
          >
            Blinkit
          </a>
        </div>
      </div>
    </section>
  );
}
