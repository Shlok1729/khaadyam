"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ShopSection } from "@/components/ShopSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { MemoryWallSection } from "@/components/MemoryWallSection";
import { QuickCommerceStrip } from "@/components/QuickCommerceStrip";

export default function HomePage() {
  return (
    <>

      {/* 1. Hero & The Threshold */}
      <HeroSection />

      {/* 2. Shop with Two Doors (By Meal vs By Category) */}
      <ShopSection />

      {/* 3. Subscriptions ("ಪ್ರತಿ ತಿಂಗಳೂ ಬಡಿಸ್ತೀನಿ") & Build Your Own List */}
      <SubscriptionSection />

      {/* 4. The Memory Wall (ನೆನಪಿನ ಗೋಡೆ) */}
      <MemoryWallSection />

      {/* 5. Quick Commerce Refill Door */}
      <QuickCommerceStrip />
    </>
  );
}
