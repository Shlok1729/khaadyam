"use client";

import React from "react";
import { KhaadyamProvider } from "@/context/KhaadyamContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ShopSection } from "@/components/ShopSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { GiftTableSection } from "@/components/GiftTableSection";
import { StorySection } from "@/components/StorySection";
import { MemoryWallSection } from "@/components/MemoryWallSection";
import { QuickCommerceStrip } from "@/components/QuickCommerceStrip";
import { Footer } from "@/components/Footer";
import { PlateDrawer } from "@/components/PlateDrawer";
import { ProductModal } from "@/components/ProductModal";
import { UpiModal } from "@/components/UpiModal";

export default function HomePage() {
  return (
    <KhaadyamProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1D1A17] font-sans selection:bg-[#5F252D] selection:text-[#F4EFE6]">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col">
          {/* 1. Hero & The Threshold */}
          <HeroSection />

          {/* 2. Shop with Two Doors (By Meal vs By Category) */}
          <ShopSection />

          {/* 3. Subscriptions ("ಪ್ರತಿ ತಿಂಗಳೂ ಬಡಿಸ್ತೀನಿ") & Build Your Own List */}
          <SubscriptionSection />

          {/* 4. Gift a Table with Live Postcard Preview */}
          <GiftTableSection />

          {/* 5. Our Story & Davangere Kitchen */}
          <StorySection />

          {/* 6. The Memory Wall (ನೆನಪಿನ ಗೋಡೆ) */}
          <MemoryWallSection />

          {/* 7. Quick Commerce Refill Door */}
          <QuickCommerceStrip />
        </main>

        {/* Global Overlays & Drawers */}
        <PlateDrawer />
        <ProductModal />
        <UpiModal />

        {/* Global Footer */}
        <Footer />
      </div>
    </KhaadyamProvider>
  );
}
