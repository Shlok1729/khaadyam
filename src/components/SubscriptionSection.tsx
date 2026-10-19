"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { SUBSCRIPTION_BOXES, FOOD_FAMILIES, PRODUCTS, SubscriptionBox, Product } from "@/data/catalog";
import { Check, Calendar, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Gift, Award, Sparkles, SlidersHorizontal, Package, Layers } from "lucide-react";

// Miniature thumbnail for list item rows
function ItemThumbnail({ product }: { product: Product }) {
  if (product.familyId === "uppinakayi" || product.familyId === "chutney-gojju") {
    return (
      <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#D9CFBF] bg-[#FAF9F5] flex-shrink-0 shadow-xs">
        <img
          src="/bharani.jpg"
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-xl border border-[#C8A265]/70 bg-gradient-to-br from-[#E3C588] to-[#9A7432] p-1 flex items-center justify-center flex-shrink-0 shadow-xs">
      <div
        className="w-full h-full rounded-lg flex items-center justify-center shadow-inner relative overflow-hidden"
        style={{ backgroundColor: product.accentColor }}
      >
        <span className="text-[10px] text-white font-serif-brand font-medium">
          {product.title.split(" ")[0]}
        </span>
      </div>
    </div>
  );
}

export function SubscriptionSection() {
  const {
    customList,
    removeFromCustomList,
    updateCustomListQuantity,
    updateCustomListItemVariant,
    subscriptionTenure,
    setSubscriptionTenure,
    dispatchDay,
    setDispatchDay,
    monthlyAmount,
    addToCustomList,
    setShopDoor,
    lang,
  } = useKhaadyam();

  // Active Tab: "builder" | "ready-made" | "category"
  const [activeTab, setActiveTab] = useState<"builder" | "ready-made" | "category">("builder");
  const [showAutoPaySuccess, setShowAutoPaySuccess] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleStartSubscription = (planTitle: string, amount: number) => {
    setShowAutoPaySuccess(true);
    setTimeout(() => setShowAutoPaySuccess(false), 4500);
  };

  return (
    <section id="subscribe" className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#5F252D] text-[#F4EFE6]">
      {/* Toast feedback */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FAF9F5] text-[#5F252D] px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 text-sm font-semibold animate-in fade-in slide-in-from-bottom duration-200 border border-[#D9CFBF]">
          <Check className="w-4 h-4 text-[#5F252D]" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="font-serif-brand text-3xl md:text-5xl text-[#F4EFE6] font-normal">
            {lang === "kn" ? "ಪ್ರತಿ ತಿಂಗಳೂ ಬಡಿಸ್ತೀನಿ" : "Every month, we serve you."}
          </h2>
          <p className="text-base md:text-xl text-[#EADCD8] font-light leading-relaxed">
            {lang === "kn"
              ? "ಏನು ಬರಬೇಕು ಮತ್ತು ಎಷ್ಟು ಕಾಲ ಎಂದು ಆರಿಸಿ. ಮರುಆರ್ಡರ್ ಮಾಡುವ ಚಿಂತೆಯೇ ಇಲ್ಲದೆ ತಾಜಾ ಪೆಟ್ಟಿಗೆ ನಿಮ್ಮ ಮನೆಗೆ ತಲುಪುತ್ತದೆ."
              : "Choose what comes, choose how long, and never think about re-ordering. A freshly packed box arrives along The Step."}
          </p>
        </div>

        {/* 1. Method Tabs (Prominently placed at the top, cleanly labeled by method) */}
        <div className="flex items-center gap-3 border-b border-[#76303B] pb-4 overflow-x-auto scrollbar-none">
          {/* Tab 1: Custom Builder */}
          <button
            type="button"
            onClick={() => setActiveTab("builder")}
            className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2.5 whitespace-nowrap ${
              activeTab === "builder"
                ? "bg-[#F4EFE6] text-[#5F252D] shadow-lg scale-[1.02]"
                : "bg-[#461920] text-[#EADCD8] hover:text-white hover:bg-[#521E26] border border-[#76303B]"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4 flex-shrink-0" />
            <span>{lang === "kn" ? "ನಿಮ್ಮದೇ ಪಟ್ಟಿ (ಕಸ್ಟಮ್)" : "Build Your Own (Custom)"}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
              activeTab === "builder"
                ? "bg-[#5F252D] text-[#F4EFE6]"
                : "bg-[#5F252D]/80 text-[#EADCD8]"
            }`}>
              {lang === "kn" ? "ಹೆಚ್ಚು ಜನಪ್ರಿಯ" : "Most Popular"}
            </span>
          </button>

          {/* Tab 2: Amma's Curated Boxes */}
          <button
            type="button"
            onClick={() => setActiveTab("ready-made")}
            className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "ready-made"
                ? "bg-[#F4EFE6] text-[#5F252D] shadow-lg scale-[1.02]"
                : "bg-[#461920] text-[#EADCD8] hover:text-white hover:bg-[#521E26] border border-[#76303B]"
            }`}
          >
            <Package className="w-4 h-4 flex-shrink-0" />
            <span>{lang === "kn" ? "ಅಮ್ಮನ ಕ್ಯುರೇಟೆಡ್ ಪೆಟ್ಟಿಗೆ" : "Amma's Curated Boxes"}</span>
          </button>

          {/* Tab 3: Single Family Focus */}
          <button
            type="button"
            onClick={() => setActiveTab("category")}
            className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "category"
                ? "bg-[#F4EFE6] text-[#5F252D] shadow-lg scale-[1.02]"
                : "bg-[#461920] text-[#EADCD8] hover:text-white hover:bg-[#521E26] border border-[#76303B]"
            }`}
          >
            <Layers className="w-4 h-4 flex-shrink-0" />
            <span>{lang === "kn" ? "ಒಂದು ಕುಟುಂಬದ ಚಂದಾದಾರಿಕೆ" : "Single Family Focus"}</span>
          </button>
        </div>

        {/* 2. Global Tenure Card & "The Step" Milestone Perks */}
        <div className="bg-[#461920] border border-[#76303B] rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-xl">
          {/* Top Row: Tenure Selector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#76303B]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EADCD8]/90 font-semibold block">
                {lang === "kn"
                  ? "ಅವಧಿ ಆರಿಸಿ · ಇಡೀ ಅವಧಿಗೆ ಒಂದೇ ನಿಗದಿತ ಮೊತ್ತ"
                  : "Choose tenure · One fixed amount for the whole stretch"}
              </span>
              <p className="text-sm text-[#EADCD8]/80 mt-1">
                {lang === "kn"
                  ? "ನಿಮ್ಮ ಮಾಸಿಕ ಬೆಲೆ ಸಂಪೂರ್ಣ ಅವಧಿಗೆ ಬದಲಾಗದೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ."
                  : "Your monthly price is locked and held for the full duration."}
              </p>
            </div>

            {/* Tenure Buttons */}
            <div className="inline-flex p-1.5 bg-[#311116] rounded-2xl border border-[#76303B] self-start md:self-auto gap-1">
              <button
                type="button"
                onClick={() => setSubscriptionTenure(6)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-smooth cursor-pointer ${
                  subscriptionTenure === 6
                    ? "bg-[#F4EFE6] text-[#5F252D] shadow-md font-bold"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                {lang === "kn" ? "೬ ತಿಂಗಳು" : "6 months"}
              </button>

              <button
                type="button"
                onClick={() => setSubscriptionTenure(9)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-smooth cursor-pointer flex items-center gap-1.5 ${
                  subscriptionTenure === 9
                    ? "bg-[#F4EFE6] text-[#5F252D] shadow-md font-bold"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                <span>{lang === "kn" ? "೯ ತಿಂಗಳು" : "9 months"}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    subscriptionTenure === 9
                      ? "bg-[#5F252D] text-[#F4EFE6]"
                      : "bg-[#461920] text-[#EADCD8]"
                  }`}
                >
                  {lang === "kn" ? "೫% ರಿಯಾಯಿತಿ" : "Save 5%"}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSubscriptionTenure(12)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-smooth cursor-pointer flex items-center gap-1.5 ${
                  subscriptionTenure === 12
                    ? "bg-[#F4EFE6] text-[#5F252D] shadow-md font-bold"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                <span>{lang === "kn" ? "೧೨ ತಿಂಗಳು" : "12 months"}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    subscriptionTenure === 12
                      ? "bg-[#5F252D] text-[#F4EFE6]"
                      : "bg-[#461920] text-[#EADCD8]"
                  }`}
                >
                  {lang === "kn" ? "೧೦% ರಿಯಾಯಿತಿ" : "Save 10%"}
                </span>
              </button>
            </div>
          </div>

          {/* Explicit Milestone Perks Graphic (Replaces the confusing progress line) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#EADCD8] font-medium">
              <span className="uppercase tracking-wider text-[11px] text-[#EADCD8]/90 font-semibold">
                {lang === "kn" ? "ಹೆಜ್ಜೆ ಗುರುತಿನ ವಿಶೇಷ ಉಡುಗೊರೆಗಳು (The Step Perks)" : "The Step · Milestone Journey Perks"}
              </span>
              <span className="text-[11px] text-[#EADCD8]/75">
                {subscriptionTenure === 12
                  ? (lang === "kn" ? "ಎಲ್ಲಾ ೩ ಉಡುಗೊರೆಗಳು ಅನ್‌ಲಾಕ್ ಆಗಿವೆ" : "All 3 milestone gifts unlocked")
                  : subscriptionTenure === 9
                  ? (lang === "kn" ? "೨ ಉಡುಗೊರೆಗಳು ಅನ್‌ಲಾಕ್ ಆಗಿವೆ" : "2 milestone gifts unlocked")
                  : (lang === "kn" ? "೧ ಉಡುಗೊರೆ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ" : "1 milestone gift unlocked")}
              </span>
            </div>

            {/* 3 Milestone Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Milestone 1: Box 1 */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  subscriptionTenure >= 6
                    ? "bg-[#311116] border-[#D9CFBF]/40 text-[#F4EFE6]"
                    : "bg-[#311116]/50 border-[#76303B]/60 text-[#EADCD8]/60"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#5F252D] text-xs font-bold flex items-center justify-center border border-[#76303B]">
                    1
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6]">
                    {lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೧ · ಆರಂಭಿಕ ಕಿಟ್" : "Box 1 · Welcome Kit"}
                  </span>
                </div>
                <p className="text-xs text-[#EADCD8] font-medium">
                  {lang === "kn" ? "ಹಿತ್ತಾಳೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಭರಣಿ ಚಮಚ" : "Authentic Brass Bharani Spoon"}
                </p>
                <span className="text-[10px] text-[#EADCD8]/70 block mt-0.5">
                  {lang === "kn" ? "ಮೊದಲ ತಿಂಗಳ ಪೆಟ್ಟಿಗೆಯ ಜೊತೆ" : "Included in your inaugural box"}
                </span>
              </div>

              {/* Milestone 2: Box 6 */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  subscriptionTenure >= 9
                    ? "bg-[#311116] border-[#D9CFBF]/40 text-[#F4EFE6]"
                    : "bg-[#311116]/50 border-[#76303B]/60 text-[#EADCD8]/60"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#5F252D] text-xs font-bold flex items-center justify-center border border-[#76303B]">
                    6
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6]">
                    {lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೬ · ವಿಶೇಷ ಉಡುಗೊರೆ" : "Box 6 · Season's Gift"}
                  </span>
                </div>
                <p className="text-xs text-[#EADCD8] font-medium">
                  {lang === "kn" ? "ಉಚಿತ ಮಲೆನಾಡು ಮಾವಿನ ತೊಕ್ಕು" : "Free Seasonal Malnad Tokku"}
                </p>
                <span className="text-[10px] text-[#EADCD8]/70 block mt-0.5">
                  {lang === "kn" ? "ಅಜ್ಜಿಯ ಕೈರುಚಿಯ ವಿಶೇಷ ಸಂಭ್ರಮ" : "Handcrafted seasonal harvest batch"}
                </span>
              </div>

              {/* Milestone 3: Box 12 */}
              <div
                className={`p-3.5 rounded-2xl border transition-all ${
                  subscriptionTenure === 12
                    ? "bg-[#311116] border-[#D9CFBF]/60 text-[#F4EFE6] ring-1 ring-[#D9CFBF]/40"
                    : "bg-[#311116]/50 border-[#76303B]/60 text-[#EADCD8]/60"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#5F252D] text-xs font-bold flex items-center justify-center border border-[#76303B]">
                    12
                  </span>
                  <span className="text-xs font-bold text-[#F4EFE6]">
                    {lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೧೨ · ಮಹಾ ಮೈಲಿಗಲ್ಲು" : "Box 12 · Heritage Keepsake"}
                  </span>
                </div>
                <p className="text-xs text-[#EADCD8] font-medium">
                  {lang === "kn" ? "ದಾವಣಗೆರೆ ಅಡುಗೆ ದಿನಚರಿ & ಮಸಾಲೆ ಡಬ್ಬಿ" : "Heirloom Recipe Diary & Spice Tin"}
                </p>
                <span className="text-[10px] text-[#EADCD8]/70 block mt-0.5">
                  {lang === "kn" ? "೧೨ ತಿಂಗಳ ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ" : "For completing 1 full year"}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Date Selector with Dedicated Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#76303B]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EADCD8]">
                <Calendar className="w-4 h-4 text-[#F4EFE6]" />
                <span>{lang === "kn" ? "ಮಾಸಿಕ ವಿತರಣಾ ದಿನಾಂಕ" : "Monthly Dispatch Cycle"}</span>
              </div>
              <p className="text-xs text-[#EADCD8]/75 mt-0.5">
                {lang === "kn"
                  ? "ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮ ಮನೆಗೆ ತಾಜಾ ಪೆಟ್ಟಿಗೆ ತಲುಪುವ ದಿನಾಂಕವನ್ನು ಆರಿಸಿ"
                  : "Choose the day your freshly ground box arrives at your doorstep each month"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {[5, 15, 25].map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setDispatchDay(day as 5 | 15 | 25)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    dispatchDay === day
                      ? "bg-[#F4EFE6] text-[#5F252D] border-[#F4EFE6] shadow-sm font-bold scale-105"
                      : "bg-[#311116] text-[#EADCD8] border-[#76303B] hover:border-[#F4EFE6]"
                  }`}
                >
                  {lang === "kn" ? `${day}ನೇ ತಾರೀಕು` : `${day}th of month`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TAB 1: BUILD YOUR OWN LIST (Custom Pantry) */}
        {activeTab === "builder" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            {/* Left: Custom Item List */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-[#EADCD8] font-serif-brand">
                    {lang === "kn" ? "ನಿಮ್ಮ ಮನೆಗೆ ನಿಮ್ಮದೇ ಪಟ್ಟಿ" : "Your home, your list."}
                  </h3>
                  <p className="text-sm text-[#EADCD8]/80">
                    {lang === "kn"
                      ? "ನಿಮಗೆ ಬೇಕಾದ ಪದಾರ್ಥಗಳನ್ನು ನಿಮ್ಮಿಷ್ಟದ ತೂಕದಲ್ಲಿ ಸೇರಿಸಿ."
                      : "Add what you use, in the sizes you use."}
                  </p>
                </div>

                <span className="text-xs text-[#EADCD8] bg-[#311116] px-3.5 py-1.5 rounded-full border border-[#76303B] font-medium">
                  {customList.length} {lang === "kn" ? "ಪದಾರ್ಥಗಳು" : "items configured"}
                </span>
              </div>

              {/* Items List Rows */}
              <div className="flex flex-col gap-3">
                {customList.length === 0 ? (
                  <div className="bg-[#461920] border border-[#76303B] rounded-2xl p-8 text-center text-[#EADCD8]">
                    <p>{lang === "kn" ? "ನಿಮ್ಮ ತಿಂಗಳ ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ." : "Your custom monthly list is empty."}</p>
                    <p className="text-xs mt-1 text-[#EADCD8]/70">
                      {lang === "kn" ? "ಕೆಳಗೆ ಕಾಣುವ ಪದಾರ್ಥಗಳನ್ನು ಸೇರಿಸಿ." : "Add items below or browse the pantry above."}
                    </p>
                  </div>
                ) : (
                  customList.map((item) => {
                    const family = FOOD_FAMILIES.find((f) => f.id === item.product.familyId);

                    return (
                      <div
                        key={`${item.product.id}-${item.variant.id}`}
                        className="bg-[#F4EFE6] text-[#1D1A17] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-[#D9CFBF]"
                      >
                        {/* Item Thumbnail & Details */}
                        <div className="flex items-center gap-3.5">
                          <ItemThumbnail product={item.product} />

                          <div className="flex flex-col">
                            {/* Taxonomy Category Tag */}
                            <span
                              className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                              style={{ color: item.product.accentColor }}
                            >
                              {lang === "kn" ? family?.kannadaName : family?.name}
                            </span>

                            <span className="font-serif-brand text-lg font-medium leading-tight">
                              {lang === "kn" ? item.product.kannadaTitle : item.product.title}
                            </span>

                            {/* Weight / Size Inline Dropdown */}
                            <div className="flex items-center gap-1.5 text-xs text-[#6B6157] mt-1">
                              <span className="text-[11px] font-medium text-[#7C6F64]">
                                {lang === "kn" ? "ತೂಕ:" : "Pack:"}
                              </span>
                              <select
                                value={item.variant.id}
                                onChange={(e) => {
                                  const newVar = item.product.variants.find((v) => v.id === e.target.value);
                                  if (newVar) {
                                    updateCustomListItemVariant(item.product.id, item.variant.id, newVar);
                                  }
                                }}
                                className="bg-[#EAE2D5] hover:bg-[#E2D7C7] text-[#1D1A17] font-semibold text-xs rounded-md px-2 py-0.5 border border-[#D9CFBF] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#5F252D]"
                              >
                                {item.product.variants.map((v) => (
                                  <option key={v.id} value={v.id}>
                                    {v.weight} (₹{v.price})
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls & Price */}
                        <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E2D9CA]">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-[#E9DFCE] rounded-full px-2.5 py-1 border border-[#D9CFBF]">
                            <button
                              type="button"
                              onClick={() =>
                                updateCustomListQuantity(
                                  item.product.id,
                                  item.variant.id,
                                  -1
                                )
                              }
                              className="p-1 hover:text-[#5F252D] cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-bold text-xs w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateCustomListQuantity(
                                  item.product.id,
                                  item.variant.id,
                                  1
                                )
                              }
                              className="p-1 hover:text-[#5F252D] cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <span className="font-semibold text-base w-16 text-right">
                            ₹{item.variant.price * item.quantity}
                          </span>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCustomList(
                                item.product.id,
                                item.variant.id
                              )
                            }
                            className="text-[#8C4A55] hover:text-[#B45431] p-1.5 rounded-lg hover:bg-[#EAE2D5] cursor-pointer transition-colors"
                            aria-label="Remove item"
                            title="Remove from list"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* 4. High-Contrast Quick-Add Chips & Escape Hatch */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#EADCD8] font-bold">
                    {lang === "kn" ? "+ ಪಟ್ಟಿಗೆ ಇನ್ನಷ್ಟು ಸೇರಿಸಿ:" : "+ Add more essentials to your list:"}
                  </span>

                  {/* Open Search / Browse Full Pantry Escape Hatch */}
                  <button
                    type="button"
                    onClick={() => {
                      setShopDoor("category");
                      const el = document.getElementById("shop");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      showToast(
                        lang === "kn"
                          ? "ಅಂಗಡಿಯಿಂದ ಯಾವುದೇ ಪದಾರ್ಥವನ್ನು ಆಯ್ಕೆಮಾಡಿ!"
                          : "Choose any item from the shop to add to your monthly list!"
                      );
                    }}
                    className="text-xs text-[#FAF9F5] hover:text-white underline underline-offset-4 decoration-[#D9CFBF]/60 hover:decoration-white font-medium flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{lang === "kn" ? "ಪೂರ್ಣ ಅಡುಗೆಮನೆ ನೋಡಿ (೮ ವಿಭಾಗಗಳು)" : "Browse full pantry"}</span>
                  </button>
                </div>

                {/* High Contrast Quick Add Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {PRODUCTS.slice(0, 5).map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => {
                        addToCustomList(prod, prod.variants[1] || prod.variants[0]);
                        showToast(`Added ${prod.title} (250g) to your monthly list!`);
                      }}
                      className="bg-[#F4EFE6] hover:bg-[#FAF9F5] text-[#5F252D] font-semibold border border-[#D9CFBF] px-3.5 py-2 rounded-full text-xs flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02] shadow-xs"
                    >
                      <Plus className="w-3 h-3 text-[#5F252D]" />
                      <span>{lang === "kn" ? prod.kannadaTitle : prod.title} (250g)</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Fixed Monthly Amount Summary Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-[#F4EFE6] text-[#1D1A17] rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-2xl border border-[#D9CFBF] sticky top-28">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#5F252D] uppercase tracking-wider mb-2">
                    <span>{lang === "kn" ? "ನಿಮ್ಮ ತಿಂಗಳ ಮೊತ್ತ" : "Your Monthly Amount"}</span>
                    {subscriptionTenure > 6 && (
                      <span className="text-[11px] bg-[#5F252D] text-[#F4EFE6] px-2 py-0.5 rounded-full font-bold">
                        {subscriptionTenure === 12 ? "10% OFF" : "5% OFF"}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif-brand text-4xl md:text-5xl text-[#5F252D] font-bold">
                      ₹{monthlyAmount}
                    </span>
                    <span className="text-sm text-[#6B6157] font-medium">
                      {lang === "kn" ? "/ ತಿಂಗಳು" : "/ month"}
                    </span>
                  </div>

                  <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                    {lang === "kn"
                      ? `${subscriptionTenure} ತಿಂಗಳಿಗೂ ಇದೇ ಬೆಲೆ. ಪ್ರತಿ ತಿಂಗಳ ${dispatchDay}ನೇ ತಾರೀಕು ನಿಮ್ಮ ಮನೆಗೆ ತಲುಪುತ್ತದೆ.`
                      : `Fixed for the whole ${subscriptionTenure} months. Arrives automatically on the ${dispatchDay}th of each month along The Step.`}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-[#6B6157] pt-4 border-t border-[#D9CFBF]">
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ಆಯ್ಕೆಯ ಅವಧಿ:" : "Tenure commitment:"}</span>
                    <span className="font-semibold text-[#1D1A17]">
                      {subscriptionTenure} {lang === "kn" ? "ತಿಂಗಳು" : "months"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ವಿತರಣಾ ಶುಲ್ಕ:" : "Delivery cost:"}</span>
                    <span className="font-semibold text-[#506D41]">
                      {lang === "kn" ? "ಸದಾ ಉಚಿತ" : "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್:" : "UPI AutoPay mandate:"}</span>
                    <span className="font-semibold text-[#1D1A17]">₹{monthlyAmount}</span>
                  </div>
                </div>

                {/* 5. High-Impact Visual Anchor Button & Trust Reassurance */}
                <div className="flex flex-col gap-3">
                  {showAutoPaySuccess ? (
                    <div className="bg-[#506D41] text-white p-4 rounded-2xl text-center text-xs font-medium animate-in zoom-in-95 duration-200">
                      <Check className="w-5 h-5 mx-auto mb-1 text-white" />
                      <span>
                        {lang === "kn"
                          ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್ ಸೆಟ್ ಆಗಿದೆ!"
                          : "UPI AutoPay Mandate Set! Welcome to Khaadyam Monthly Family."}
                      </span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleStartSubscription("Custom List", monthlyAmount)}
                      className="w-full bg-gradient-to-r from-[#B45431] via-[#A04524] to-[#8C3A1D] hover:from-[#C25D38] hover:to-[#9E4221] text-[#FAF9F5] py-4 px-6 rounded-2xl text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2.5 group border border-[#E89E7D]/40"
                    >
                      <span>{lang === "kn" ? "ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ ಪ್ರಾರಂಭಿಸಿ" : "Set up monthly box"}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FAF9F5]" />
                    </button>
                  )}

                  {/* Trust Reassurance Line */}
                  <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7C6F64] font-medium pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#506D41] shrink-0" />
                    <span>
                      {lang === "kn"
                        ? "ಮೊದಲ ತಿಂಗಳ ನಂತರ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ವಿರಾಮಗೊಳಿಸಿ, ಬದಲಿಸಿ ಅಥವಾ ರದ್ದುಮಾಡಿ."
                        : "Pause, swap items, or cancel anytime after the first cycle."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: READY-MADE MONTHLY BOXES */}
        {activeTab === "ready-made" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {SUBSCRIPTION_BOXES.map((box) => (
              <div
                key={box.id}
                className="bg-[#F4EFE6] text-[#1D1A17] rounded-3xl p-6 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: box.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B6157] mb-2">
                    <span className="font-semibold uppercase tracking-wider text-[11px] text-[#5F252D]">
                      {lang === "kn" ? "ಸಿದ್ಧಪಡಿಸಿದ ಪೆಟ್ಟಿಗೆ" : "Amma's Curated Box"}
                    </span>
                  </div>

                  <h3 className="font-serif-brand text-2xl text-[#1D1A17]">
                    {lang === "kn" ? box.kannadaTitle : box.title}
                  </h3>
                  <p className="text-xs text-[#5A5048] mt-1">{box.description}</p>

                  <div className="mt-4 p-3.5 bg-[#FAF9F5] border border-[#E2D9CA] rounded-xl text-xs text-[#5A5048]">
                    <span className="font-semibold text-[#1D1A17] block mb-1">
                      {lang === "kn" ? `ಒಳಗೊಂಡಿರುವ ${box.itemsCount} ಪದಾರ್ಥಗಳು:` : `Includes ${box.itemsCount} curated items:`}
                    </span>
                    <p className="leading-relaxed">{box.itemsSummary}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-serif-brand text-3xl text-[#5F252D] font-bold">
                      ₹{box.monthlyPrice}
                    </span>
                    <span className="text-xs text-[#6B6157]">
                      {lang === "kn" ? "/ ತಿಂಗಳು" : "/ month"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartSubscription(box.title, box.monthlyPrice)}
                    className="w-full bg-gradient-to-r from-[#B45431] to-[#8C3A1D] hover:from-[#C25D38] hover:to-[#9E4221] text-[#FAF9F5] py-3.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{lang === "kn" ? "ಇದು ಸಾಕು · ಆಯ್ಕೆ ಮಾಡಿ" : "Choose this box"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: BY CATEGORY FAMILY */}
        {activeTab === "category" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {FOOD_FAMILIES.map((fam) => (
              <div
                key={fam.id}
                className="bg-[#F4EFE6] text-[#1D1A17] rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-md border-t-4"
                style={{ borderTopColor: fam.accentColor }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B6157] mb-1">
                    <span className="text-[10px] font-semibold uppercase">
                      {lang === "kn" ? "ತಿಂಗಳ ಚಂದಾದಾರಿಕೆ" : "Monthly Family"}
                    </span>
                  </div>
                  <h4 className="font-serif-brand text-xl text-[#1D1A17]">
                    {lang === "kn" ? fam.kannadaName : fam.name}
                  </h4>
                  <p className="text-xs text-[#5A5048] mt-1">
                    {lang === "kn" ? fam.kannadaDescription : fam.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-sm font-semibold text-[#5F252D] block mb-2">
                    ₹590 {lang === "kn" ? "/ ತಿಂಗಳು" : "/ month"}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleStartSubscription(`${fam.name} Family`, 590)}
                    className="w-full bg-[#5F252D] text-[#F4EFE6] py-2.5 rounded-full text-xs font-medium transition-smooth hover:bg-[#461920] cursor-pointer"
                  >
                    {lang === "kn" ? `${fam.kannadaName} ಪಡೆಯಿರಿ` : `Subscribe to ${fam.name}`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
