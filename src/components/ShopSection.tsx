"use client";

import React, { useState, useRef, useEffect } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { FOOD_FAMILIES, PRODUCTS, MEAL_PLATES, Product, MealPlate, ProductVariant } from "@/data/catalog";
import { Plus, Check, Calendar, ArrowRight, Info, ChevronDown } from "lucide-react";

export function ShopSection() {
  const {
    shopDoor,
    setShopDoor,
    addToPlate,
    addMealToPlate,
    addToCustomList,
    setActiveProductModal,
    lang,
  } = useKhaadyam();

  // Dropdown state for Two-Door Switcher
  const [doorDropdownOpen, setDoorDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDoorDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Selected Category Filter for Door B
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>("all");

  // Track selected variant per product (productId -> variantId)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  // Feedback toast state
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const getProductVariant = (prod: Product): ProductVariant => {
    const varId = selectedVariants[prod.id];
    return prod.variants.find((v) => v.id === varId) || prod.variants[1] || prod.variants[0];
  };

  const handleSelectVariant = (productId: string, variantId: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantId }));
  };

  const filteredProducts =
    selectedFamilyId === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.familyId === selectedFamilyId);

  return (
    <section id="shop" className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#FAF9F5]">
      {/* Toast feedback */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#5F252D] text-[#F4EFE6] px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium animate-in fade-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-[#C99436]" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header & Two-Door Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D9CFBF]/70">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif-brand text-3xl md:text-5xl text-[#1D1A17] font-normal">
              {lang === "kn" ? "ಏನ್ ಬಡಿಸ್ಲಿ?" : "What shall I serve?"}
            </h2>
            <p className="text-sm md:text-base text-[#5A5048] max-w-xl">
              {lang === "kn"
                ? "ಗೊತ್ತಾಗುತ್ತಿಲ್ಲವೇ? ಇಡೀ ತಟ್ಟೆಯಿಂದ ಶುರುಮಾಡಿ. ನಿರ್ದಿಷ್ಟ ಪದಾರ್ಥ ಬೇಕೇ? ಎಂಟು ವಿಭಾಗಗಳಿಗೆ ಬದಲಾಯಿಸಿ."
                : "Not sure what goes where? Start with a curated meal. Know what you want? Switch to the eight families."}
            </p>
          </div>

          {/* The Door Selector Dropdown */}
          <div ref={dropdownRef} className="relative self-start md:self-end">
            <button
              id="shop-door-dropdown-btn"
              type="button"
              onClick={() => setDoorDropdownOpen(!doorDropdownOpen)}
              className="flex items-center gap-3 bg-[#E9DFCE] hover:bg-[#E2D6C2] text-[#1D1A17] px-5 py-2.5 rounded-full border border-[#D9CFBF] text-sm font-medium transition-smooth shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5F252D]/30 min-w-[170px] justify-between"
              aria-haspopup="listbox"
              aria-expanded={doorDropdownOpen}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5F252D]" />
                <span className="font-serif-brand text-base tracking-tight text-[#1D1A17]">
                  {shopDoor === "meal"
                    ? (lang === "kn" ? "ತಟ್ಟೆಯಂತೆ" : "By meal")
                    : (lang === "kn" ? "ವಿಭಾಗದಂತೆ" : "By category")}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#5F252D] transition-transform duration-200 ${
                  doorDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {doorDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#FAF9F5] border border-[#D9CFBF] rounded-2xl shadow-xl py-2 z-30 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  type="button"
                  onClick={() => {
                    setShopDoor("meal");
                    setDoorDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm transition-smooth hover:bg-[#E9DFCE]/60 cursor-pointer ${
                    shopDoor === "meal"
                      ? "text-[#5F252D] font-semibold bg-[#E9DFCE]/50"
                      : "text-[#1D1A17]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-serif-brand text-base">
                      {lang === "kn" ? "ತಟ್ಟೆಯಂತೆ" : "By meal"}
                    </span>
                    <span className="text-xs text-[#7C6F64] font-normal">
                      {lang === "kn" ? "೬ ವಿಶಿಷ್ಟ ಊಟದ ತಟ್ಟೆಗಳು" : "Curated meal moments (6 plates)"}
                    </span>
                  </div>
                  {shopDoor === "meal" && (
                    <Check className="w-4 h-4 text-[#5F252D] shrink-0" />
                  )}
                </button>

                <div className="border-t border-[#E9DFCE] my-1" />

                <button
                  type="button"
                  onClick={() => {
                    setShopDoor("category");
                    setDoorDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between text-sm transition-smooth hover:bg-[#E9DFCE]/60 cursor-pointer ${
                    shopDoor === "category"
                      ? "text-[#5F252D] font-semibold bg-[#E9DFCE]/50"
                      : "text-[#1D1A17]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-serif-brand text-base">
                      {lang === "kn" ? "ವಿಭಾಗದಂತೆ" : "By category"}
                    </span>
                    <span className="text-xs text-[#7C6F64] font-normal">
                      {lang === "kn" ? "೮ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರ ಕುಟುಂಬಗಳು" : "The 8 food families"}
                    </span>
                  </div>
                  {shopDoor === "category" && (
                    <Check className="w-4 h-4 text-[#5F252D] shrink-0" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* DOOR 1: SHOP BY MEAL */}
        {shopDoor === "meal" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#6B6157]">
                {lang === "kn"
                  ? "೬ ವಿಶಿಷ್ಟ ಊಟದ ತಟ್ಟೆಗಳು · ಪ್ರತಿಯೊಂದು ತಟ್ಟೆಯಲ್ಲೂ ಚಟ್ನಿ ಪುಡಿ, ಉಪ್ಪಿನಕಾಯಿ ಮತ್ತು ಸಂಡಿಗೆಯ ಸಮತೋಲನ."
                  : "Showing 6 curated moment plates · Each plate is a harmonious combination of powders, pickles & crisps."}
              </p>
              <span className="text-xs bg-[#E9DFCE] text-[#5F252D] px-3 py-1 rounded-full font-medium hidden sm:inline">
                {lang === "kn" ? "ಆಯ್ಕೆಯು ಈ ಫೋನ್‌ನಲ್ಲಿ ಉಳಿದಿದೆ" : "Door preference saved on this phone"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MEAL_PLATES.map((meal) => (
                <div
                  key={meal.id}
                  className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-smooth group"
                >
                  {/* Plate Aesthetic Preview */}
                  <div className="h-44 rounded-xl bg-[#EDE5D6] border border-[#D9CFBF]/60 p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="font-serif-brand text-xl text-[#5F252D] font-medium">
                        {lang === "kn" ? meal.kannadaTitle : meal.title}
                      </span>
                      <div className="flex items-center gap-1.5 bg-[#FAF9F5] px-2.5 py-1 rounded-full text-xs font-semibold text-[#1D1A17]">
                        ₹{meal.price} {lang === "kn" ? "ತಟ್ಟೆ" : "the plate"}
                      </div>
                    </div>

                    <div className="flex items-center justify-center my-auto">
                      <div className="w-20 h-20 rounded-full border-4 border-dashed border-[#BFB3A0] flex items-center justify-center bg-[#FAF9F5]/80 shadow-inner group-hover:scale-105 transition-smooth">
                        <span className="font-serif-brand text-2xl text-[#5F252D]">
                          {lang === "kn" ? "ತಟ್ಟೆ" : "Plate"}
                        </span>
                      </div>
                    </div>

                    {/* Color indicators */}
                    <div className="flex items-center justify-between text-xs text-[#6B6157]">
                      <span>{lang === "kn" ? "೩ ಪದಾರ್ಥಗಳು" : "3 items included"}</span>
                      <div className="flex items-center gap-1.5">
                        {meal.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Meal Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif-brand text-2xl text-[#1D1A17] font-normal">
                      {lang === "kn" ? meal.kannadaTitle : meal.title}
                    </h3>
                    <p className="text-sm text-[#5A5048] leading-relaxed">
                      {lang === "kn" ? meal.kannadaDescription : meal.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <button
                      onClick={() => {
                        addMealToPlate(meal);
                        showToast(`Added ${lang === "kn" ? meal.kannadaTitle : meal.title} to plate!`);
                      }}
                      className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3 rounded-full text-sm font-medium transition-smooth flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>
                        {lang === "kn"
                          ? `ತಟ್ಟೆಗೆ ಹಾಕಿ (₹${meal.price})`
                          : `Serve this plate (₹${meal.price})`}
                      </span>
                    </button>

                    <a
                      href="#subscribe"
                      className="text-center text-xs text-[#5F252D] hover:text-[#461920] font-medium py-1 transition-smooth"
                    >
                      {lang === "kn"
                        ? "ಪ್ರತಿ ತಿಂಗಳೂ ಬೇಕೇ? ಚಂದಾದಾರಿಕೆ ನೋಡಿ →"
                        : "Want this every month? See subscriptions →"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOOR 2: SHOP BY CATEGORY */}
        {shopDoor === "category" && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-300">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedFamilyId("all")}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-smooth cursor-pointer ${
                  selectedFamilyId === "all"
                    ? "bg-[#5F252D] text-[#F4EFE6] shadow-xs"
                    : "bg-[#FBF8F2] text-[#5A5048] border border-[#D9CFBF] hover:bg-[#E9DFCE]"
                }`}
              >
                {lang === "kn" ? "ಎಲ್ಲಾ ೮ ವಿಭಾಗಗಳು" : "All 8 Families"}
              </button>

              {FOOD_FAMILIES.map((family) => {
                const isSelected = selectedFamilyId === family.id;
                return (
                  <button
                    key={family.id}
                    onClick={() => setSelectedFamilyId(family.id)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-smooth cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#5F252D] text-[#F4EFE6] shadow-xs"
                        : "bg-[#FBF8F2] text-[#5A5048] border border-[#D9CFBF] hover:bg-[#E9DFCE]"
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: family.accentColor }}
                    />
                    <span>{lang === "kn" ? family.kannadaName : family.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const activeVariant = getProductVariant(prod);
                const family = FOOD_FAMILIES.find((f) => f.id === prod.familyId);

                return (
                  <div
                    key={prod.id}
                    className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-6 flex flex-col justify-between gap-5 hover:shadow-md transition-smooth relative overflow-hidden"
                  >
                    {/* Top family accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: prod.accentColor }}
                    />

                    <div>
                      {/* Family */}
                      <div className="flex items-center justify-between text-xs text-[#6B6157] mb-2">
                        <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: prod.accentColor }}>
                          {lang === "kn" ? family?.kannadaName : family?.name}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3
                        onClick={() => setActiveProductModal(prod)}
                        className="font-serif-brand text-2xl text-[#1D1A17] font-normal hover:text-[#5F252D] transition-smooth cursor-pointer"
                      >
                        {lang === "kn" ? prod.kannadaTitle : prod.title}
                      </h3>
                      <p className="text-xs text-[#5A5048] mt-1 italic">
                        {prod.tagline}
                      </p>

                      {/* Amma's Note Teaser */}
                      <div
                        onClick={() => setActiveProductModal(prod)}
                        className="mt-4 p-3 bg-[#FAF9F5] border border-[#E2D9CA] rounded-xl text-xs text-[#5A5048] cursor-pointer hover:border-[#5F252D]/40 transition-smooth group/note"
                      >
                        <div className="flex items-center justify-between font-semibold text-[#5F252D] mb-1">
                          <span>{lang === "kn" ? "ಅಮ್ಮನ ಮಾತು" : "Amma's note"}</span>
                          <Info className="w-3.5 h-3.5 text-[#5F252D] opacity-70 group-hover/note:opacity-100" />
                        </div>
                        <p className="line-clamp-2 leading-relaxed">
                          {prod.ammaNote}
                        </p>
                      </div>
                    </div>

                    {/* Weight Variant Pills & Price */}
                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#6B6157] font-medium">
                          {lang === "kn" ? "ತೂಕ ಆರಿಸಿ:" : "Select size:"}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif-brand text-xl text-[#1D1A17] font-medium">
                            ₹{activeVariant.price}
                          </span>
                          {activeVariant.originalPrice && (
                            <span className="text-xs text-[#6B6157] line-through">
                              ₹{activeVariant.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {prod.variants.map((v) => (
                          <button
                            key={v.id}
                            onClick={() => handleSelectVariant(prod.id, v.id)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-smooth border cursor-pointer ${
                              activeVariant.id === v.id
                                ? "bg-[#5F252D] text-[#F4EFE6] border-[#5F252D]"
                                : "bg-[#FAF9F5] text-[#5A5048] border-[#D9CFBF] hover:bg-[#E9DFCE]"
                            }`}
                          >
                            {v.weight}
                          </button>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 mt-2">
                        <button
                          onClick={() => {
                            addToPlate(prod, activeVariant);
                            showToast(`Added ${lang === "kn" ? prod.kannadaTitle : prod.title} (${activeVariant.weight}) to plate!`);
                          }}
                          className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3 rounded-full text-sm font-medium transition-smooth flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>{lang === "kn" ? "ತಟ್ಟೆಗೆ ಹಾಕಿ" : "Add to plate"}</span>
                        </button>

                        <button
                          onClick={() => {
                            addToCustomList(prod, activeVariant);
                            showToast(`Added to your monthly subscription list!`);
                          }}
                          className="w-full bg-transparent hover:bg-[#E9DFCE]/60 text-[#5F252D] border border-[#5F252D]/40 py-2 rounded-full text-xs font-medium transition-smooth flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>
                            {lang === "kn"
                              ? "ತಿಂಗಳ ಚಂದಾದಾರಿಕೆ ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ"
                              : "Add to my monthly subscription list"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
