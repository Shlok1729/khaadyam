"use client";

import React from "react";
import { KhaadyamProvider } from "@/context/KhaadyamContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlateDrawer } from "@/components/PlateDrawer";
import { ProductModal } from "@/components/ProductModal";
import { UpiModal } from "@/components/UpiModal";
import { ScrollVine } from "@/components/ScrollVine";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <KhaadyamProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1D1A17] font-sans selection:bg-[#5F252D] selection:text-[#F4EFE6]">
        {/* Navigation Header */}
        <Header />

        {/* Global Scroll-driven Climber Vine in Background */}
        <ScrollVine />

        {/* Page Content */}
        <div className="flex-1 flex flex-col">{children}</div>

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
