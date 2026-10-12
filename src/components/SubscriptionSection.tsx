"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { SUBSCRIPTION_BOXES, FOOD_FAMILIES, PRODUCTS, SubscriptionBox } from "@/data/catalog";
import { Check, Calendar, Plus, Minus, Trash2, ArrowRight } from "lucide-react";

export function SubscriptionSection() {
  const {
    customList,
    removeFromCustomList,
    updateCustomListQuantity,
    subscriptionTenure,
    setSubscriptionTenure,
    dispatchDay,
    setDispatchDay,
    monthlyAmount,
    addToCustomList,
    lang,
  } = useKhaadyam();

  // Active Tab: "builder" | "ready-made" | "category"
  const [activeTab, setActiveTab] = useState<"ready-made" | "builder" | "category">("builder");
  const [showAutoPaySuccess, setShowAutoPaySuccess] = useState(false);

  const handleStartSubscription = (planTitle: string, amount: number) => {
    setShowAutoPaySuccess(true);
    setTimeout(() => setShowAutoPaySuccess(false), 4000);
  };

  return (
    <section id="subscribe" className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#5F252D] text-[#F4EFE6]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="font-serif-brand text-3xl md:text-5xl text-[#F4EFE6] font-normal">
            {lang === "kn" ? "ಬರಿದಾಗದ ಭರಣಿ · ಸದಾ ನಿಮ್ಮ ತಟ್ಟೆಗೆ" : "Never an empty jar."}
          </h2>
          <p className="text-base md:text-xl text-[#EADCD8] font-light leading-relaxed">
            {lang === "kn"
              ? "ಏನು ಬೇಕು ಮತ್ತು ಎಷ್ಟು ಅವಧಿಗೆ ಎಂದು ಆರಿಸಿ. ಮರುಆರ್ಡರ್ ಮಾಡುವ ಚಿಂತೆಯೇ ಇಲ್ಲದೆ ತಾಜಾ ರುಚಿ ನಿಮ್ಮ ಹೊಸ್ತಿಲಿಗೆ ಸದಾ ತಲುಪುತ್ತದೆ."
              : "Choose your staples, set your tenure, and forget re-ordering. Pure hand-pounded traditions arrive freshly packed along The Step."}
          </p>
        </div>

        {/* Global Controls: Tenure Selector & The Step */}
        <div className="bg-[#461920] border border-[#76303B] rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#76303B]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EADCD8]/80 font-medium">
                {lang === "kn"
                  ? "ಅವಧಿ ಆರಿಸಿ · ಸಂಪೂರ್ಣ ಯೋಜನೆಗೆ ಒಂದೇ ನಿಗದಿತ ಬೆಲೆ"
                  : "Choose tenure · One locked price for your whole journey"}
              </span>
              <p className="text-sm text-[#EADCD8] mt-1">
                {lang === "kn"
                  ? "ನಿಮ್ಮ ಬೆಲೆಯು ಸಂಪೂರ್ಣ ಅವಧಿಗೆ ಬದಲಾಗದೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ."
                  : "Your price is locked and guaranteed across the entire plan."}
              </p>
            </div>

            {/* Tenure Buttons */}
            <div className="inline-flex p-1.5 bg-[#311116] rounded-full border border-[#76303B] self-start md:self-auto">
              <button
                onClick={() => setSubscriptionTenure(6)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-smooth cursor-pointer ${
                  subscriptionTenure === 6
                    ? "bg-[#C99436] text-[#1D1A17] shadow-md"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                {lang === "kn" ? "೬ ಕಂತುಗಳು" : "6 Months"}
              </button>
              <button
                onClick={() => setSubscriptionTenure(9)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-smooth cursor-pointer flex items-center gap-1.5 ${
                  subscriptionTenure === 9
                    ? "bg-[#C99436] text-[#1D1A17] shadow-md"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                <span>{lang === "kn" ? "೯ ಕಂತುಗಳು" : "9 Months"}</span>
                <span className="text-[10px] bg-[#5F252D] text-[#EADCD8] px-1.5 py-0.5 rounded-full">
                  {lang === "kn" ? "೫% ರಿಯಾಯಿತಿ" : "Save 5%"}
                </span>
              </button>
              <button
                onClick={() => setSubscriptionTenure(12)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-smooth cursor-pointer flex items-center gap-1.5 ${
                  subscriptionTenure === 12
                    ? "bg-[#C99436] text-[#1D1A17] shadow-md"
                    : "text-[#EADCD8] hover:text-white"
                }`}
              >
                <span>{lang === "kn" ? "೧ ವರ್ಷ (೧೨ ಕಂತು)" : "1 Year (12 Boxes)"}</span>
                <span className="text-[10px] bg-[#5F252D] text-[#EADCD8] px-1.5 py-0.5 rounded-full font-bold">
                  {lang === "kn" ? "೧೦% ರಿಯಾಯಿತಿ" : "Save 10%"}
                </span>
              </button>
            </div>
          </div>

          {/* "The Step" Visual Progress Bar */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#EADCD8] font-medium">
              <span>{lang === "kn" ? "ಹೆಜ್ಜೆ ಗುರುತು (The Step)" : "The Step · Dispatch Journey"}</span>
              <span className="font-semibold text-[#C99436]">
                {lang === "kn"
                  ? `${subscriptionTenure === 12 ? "೧ ವರ್ಷದ ಯೋಜನೆ" : `${subscriptionTenure} ಪೆಟ್ಟಿಗೆಗಳ ಪ್ರಯಾಣ`}`
                  : `${subscriptionTenure === 12 ? "1-Year Commitment" : `${subscriptionTenure}-Box Journey`}`}
              </span>
            </div>

            <div className="relative w-full h-3 bg-[#311116] rounded-full overflow-hidden border border-[#76303B]">
              <div
                className="h-full bg-gradient-to-r from-[#C99436] to-[#E5AC44] rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${(1 / subscriptionTenure) * 100}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-[#EADCD8]/70 pt-1">
              <span className="text-[#C99436] font-semibold">
                {lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೧ (ಆರಂಭ)" : "Box 1 (First Box)"}
              </span>
              {subscriptionTenure >= 6 && <span>{lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೬" : "Box 6"}</span>}
              {subscriptionTenure >= 9 && <span>{lang === "kn" ? "ಪೆಟ್ಟಿಗೆ ೯" : "Box 9"}</span>}
              <span>{lang === "kn" ? `ಪೆಟ್ಟಿಗೆ ${subscriptionTenure}` : `Box ${subscriptionTenure}`}</span>
            </div>
          </div>

          {/* Delivery Cycle Date Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#EADCD8]">
              <Calendar className="w-4 h-4 text-[#C99436]" />
              <span>{lang === "kn" ? "ಆಗಮನದ ತಾರೀಕು:" : "Arrives at your home:"}</span>
            </div>

            <div className="flex items-center gap-2">
              {[5, 15, 25].map((day) => (
                <button
                  key={day}
                  onClick={() => setDispatchDay(day as 5 | 15 | 25)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-smooth border cursor-pointer ${
                    dispatchDay === day
                      ? "bg-[#C99436] text-[#1D1A17] border-[#C99436] font-bold"
                      : "bg-[#311116] text-[#EADCD8] border-[#76303B] hover:border-[#C99436]"
                  }`}
                >
                  {lang === "kn" ? `ಪ್ರತಿ ${day}ನೇ ತಾರೀಕು` : `Every ${day}th`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Ways In Tabs */}
        <div className="flex items-center gap-2 border-b border-[#76303B] pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab("builder")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "builder"
                ? "bg-[#F4EFE6] text-[#1D1A17] font-semibold shadow-md"
                : "text-[#EADCD8] hover:text-white"
            }`}
          >
            <span>{lang === "kn" ? "೩ · ನಿಮ್ಮದೇ ಪಟ್ಟಿ ತಯಾರಿಸಿ" : "3 · Build your own list"}</span>
            <span className="text-xs bg-[#C99436] text-[#1D1A17] px-2 py-0.5 rounded-full font-bold">
              {lang === "kn" ? "ಹೆಚ್ಚು ಜನಪ್ರಿಯ" : "Most Popular"}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("ready-made")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth cursor-pointer whitespace-nowrap ${
              activeTab === "ready-made"
                ? "bg-[#F4EFE6] text-[#1D1A17] font-semibold shadow-md"
                : "text-[#EADCD8] hover:text-white"
            }`}
          >
            <span>{lang === "kn" ? "೧ · ಸಿದ್ಧಪಡಿಸಿದ ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ" : "1 · Ready-made boxes by Amma"}</span>
          </button>

          <button
            onClick={() => setActiveTab("category")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth cursor-pointer whitespace-nowrap ${
              activeTab === "category"
                ? "bg-[#F4EFE6] text-[#1D1A17] font-semibold shadow-md"
                : "text-[#EADCD8] hover:text-white"
            }`}
          >
            <span>{lang === "kn" ? "೨ · ವಿಭಾಗವಾರು ಸರದಿ: ೮ ಕುಟುಂಬಗಳ ರುಚಿ" : "2 · By category: rotate the 8 families"}</span>
          </button>
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

                <span className="text-xs text-[#C99436] bg-[#311116] px-3 py-1 rounded-full border border-[#76303B]">
                  {customList.length} {lang === "kn" ? "ಪದಾರ್ಥಗಳು" : "items configured"}
                </span>
              </div>

              {/* Items List Rows */}
              <div className="flex flex-col gap-3">
                {customList.length === 0 ? (
                  <div className="bg-[#461920] border border-[#76303B] rounded-2xl p-8 text-center text-[#EADCD8]">
                    <p>{lang === "kn" ? "ನಿಮ್ಮ ತಿಂಗಳ ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ." : "Your custom monthly list is empty."}</p>
                    <p className="text-xs mt-1 text-[#EADCD8]/70">
                      {lang === "kn" ? "ಕೆಳಗೆ ಕಾಣುವ ಪದಾರ್ಥಗಳನ್ನು ಸೇರಿಸಿ." : "Add items below or from the Shop section above."}
                    </p>
                  </div>
                ) : (
                  customList.map((item) => (
                    <div
                      key={`${item.product.id}-${item.variant.id}`}
                      className="bg-[#F4EFE6] text-[#1D1A17] rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm relative overflow-hidden"
                    >
                      {/* Family Accent Bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-2"
                        style={{ backgroundColor: item.product.accentColor }}
                      />

                      <div className="flex flex-col pl-2">
                        <span className="font-serif-brand text-lg font-medium">
                          {lang === "kn" ? item.product.kannadaTitle : item.product.title}
                        </span>
                        <span className="text-xs text-[#6B6157]">
                          {lang === "kn" ? "ತೂಕ" : "Size"}: {item.variant.weight} · ₹{item.variant.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-[#E9DFCE] rounded-full px-2 py-1 border border-[#D9CFBF]">
                          <button
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
                        <span className="font-semibold text-sm w-16 text-right">
                          ₹{item.variant.price * item.quantity}
                        </span>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromCustomList(
                              item.product.id,
                              item.variant.id
                            )
                          }
                          className="text-[#6B6157] hover:text-[#B45431] p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Quick Add Suggestions */}
              <div className="flex flex-col gap-3 pt-4">
                <span className="text-xs uppercase tracking-wider text-[#EADCD8]/70 font-semibold">
                  {lang === "kn" ? "+ ಪಟ್ಟಿಗೆ ಇನ್ನಷ್ಟು ಸೇರಿಸಿ:" : "+ Add more essentials to your list:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {PRODUCTS.slice(0, 5).map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => addToCustomList(prod, prod.variants[1] || prod.variants[0])}
                      className="bg-[#461920] hover:bg-[#311116] border border-[#76303B] px-3.5 py-1.5 rounded-full text-xs text-[#EADCD8] flex items-center gap-1.5 cursor-pointer transition-smooth"
                    >
                      <Plus className="w-3 h-3 text-[#C99436]" />
                      <span>{lang === "kn" ? prod.kannadaTitle : prod.title} (250g)</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Fixed Monthly Amount Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-[#F4EFE6] text-[#1D1A17] rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-2xl border-4 border-[#C99436]/40 sticky top-28">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#5F252D] uppercase tracking-wider mb-2">
                    <span>{lang === "kn" ? "ನಿಮ್ಮ ನಿಗದಿತ ಮೊತ್ತ" : "Recurring Box Price"}</span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-serif-brand text-4xl md:text-5xl text-[#5F252D] font-normal">
                      ₹{monthlyAmount}
                    </span>
                    <span className="text-sm text-[#6B6157] font-medium">
                      {lang === "kn" ? "/ ಪೆಟ್ಟಿಗೆಗೆ" : "/ delivery"}
                    </span>
                  </div>

                  <p className="text-xs text-[#5A5048] mt-2 leading-relaxed">
                    {lang === "kn"
                      ? `${subscriptionTenure} ವಿತರಣೆಗಳಿಗೂ ಇದೇ ಬೆಲೆ. ಪ್ರತಿ ${dispatchDay}ನೇ ತಾರೀಕಿಗೆ ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ ಬರುತ್ತದೆ.`
                      : `Fixed for all ${subscriptionTenure} dispatches. Arrives reliably every ${dispatchDay}th along The Step.`}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#6B6157] pt-4 border-t border-[#D9CFBF]">
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ಆಯ್ಕೆಯ ಅವಧಿ:" : "Tenure commitment:"}</span>
                    <span className="font-semibold text-[#1D1A17]">
                      {subscriptionTenure === 12
                        ? (lang === "kn" ? "೧ ವರ್ಷ (೧೨ ವಿತರಣೆಗಳು)" : "1 Year (12 Boxes)")
                        : `${subscriptionTenure} ${lang === "kn" ? "ವಿತರಣೆಗಳು" : "Deliveries"}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ವಿತರಣಾ ಶುಲ್ಕ:" : "Delivery cost:"}</span>
                    <span className="font-semibold text-[#506D41]">
                      {lang === "kn" ? "ಸದಾ ಉಚಿತ" : "Always Free"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === "kn" ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್:" : "UPI AutoPay mandate:"}</span>
                    <span className="font-semibold text-[#1D1A17]">₹{monthlyAmount}</span>
                  </div>
                </div>

                {showAutoPaySuccess ? (
                  <div className="bg-[#506D41] text-white p-4 rounded-2xl text-center text-xs font-medium animate-in zoom-in-95 duration-200">
                    <Check className="w-5 h-5 mx-auto mb-1 text-white" />
                    <span>
                      {lang === "kn"
                        ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್ ಸೆಟ್ ಆಗಿದೆ!"
                        : "UPI AutoPay Mandate Set! Welcome to the Khaadyam family."}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleStartSubscription("Custom List", monthlyAmount)}
                    className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-4 rounded-full text-sm font-semibold transition-smooth shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>{lang === "kn" ? "ಚಂದಾದಾರಿಕೆ ಪ್ರಾರಂಭಿಸಿ" : "Start your table ritual"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth text-[#C99436]" />
                  </button>
                )}
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

                  <div className="mt-4 p-3 bg-[#FAF9F5] border border-[#E2D9CA] rounded-xl text-xs text-[#5A5048]">
                    <span className="font-semibold text-[#1D1A17] block mb-1">
                      {lang === "kn" ? `ಒಳಗೊಂಡಿರುವ ${box.itemsCount} ಪದಾರ್ಥಗಳು:` : `Includes ${box.itemsCount} curated items:`}
                    </span>
                    <p className="leading-relaxed">{box.itemsSummary}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-serif-brand text-3xl text-[#5F252D]">
                      ₹{box.monthlyPrice}
                    </span>
                    <span className="text-xs text-[#6B6157]">
                      {lang === "kn" ? "/ ತಿಂಗಳು" : "/ month"}
                    </span>
                  </div>

                  <button
                    onClick={() => handleStartSubscription(box.title, box.monthlyPrice)}
                    className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3.5 rounded-full text-xs font-semibold transition-smooth cursor-pointer flex items-center justify-center gap-2"
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
