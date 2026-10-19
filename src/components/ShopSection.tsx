"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { FOOD_FAMILIES, PRODUCTS, MEAL_PLATES, Product, MealPlate, ProductVariant } from "@/data/catalog";
import { Check, Calendar, Info, Sparkles, Languages, UtensilsCrossed, Layers } from "lucide-react";

// Product visual header component for high appetite appeal
function ProductCardVisual({ prod, lang }: { prod: Product; lang: string }) {
  const family = FOOD_FAMILIES.find((f) => f.id === prod.familyId);

  return (
    <div className="relative w-full h-44 rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#F5EDE3] via-[#EFE5D8] to-[#E5D7C6] border-b border-[#D9CFBF]/70 flex items-center justify-center p-4 group-hover:brightness-[1.02] transition-all">
      {/* Subtle traditional texture in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#5F252D_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Floating Category Pill */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs border border-[#D9CFBF]/80"
          style={{ color: prod.accentColor }}
        >
          {lang === "kn" ? family?.kannadaName : family?.name}
        </span>
      </div>

      {/* Floating Trust / Craft Chip */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[10px] font-medium text-[#5F252D] px-2.5 py-0.5 rounded-full bg-[#FAF9F5]/90 border border-[#D9CFBF]/70 shadow-xs">
          {prod.familyId === "uppinakayi"
            ? (lang === "kn" ? "ಭರಣಿ ಮಾಗುವಿಕೆ" : "Bharani-Matured")
            : prod.familyId === "sandige-happala"
            ? (lang === "kn" ? "ಬಿಸಿಲಿನ ಸಂಸ್ಕಾರ" : "Sun-Dried")
            : (lang === "kn" ? "ಕಲ್ಲಿನಲ್ಲಿ ಅರೆದದ್ದು" : "Stone-Ground")}
        </span>
      </div>

      {/* Visual Content based on product type */}
      {prod.familyId === "uppinakayi" || prod.familyId === "chutney-gojju" ? (
        <div className="relative w-28 h-28 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-[#FAF9F5]">
            <img
              src="/bharani.jpg"
              alt={prod.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        /* Artisanal Brass Katori & Roasted Powder Presentation */
        <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-24 h-24 rounded-full border-4 border-[#C8A265] bg-gradient-to-br from-[#E3C588] via-[#B88E4B] to-[#8F6A2C] shadow-lg flex items-center justify-center p-1.5">
            {/* The spice powder bed */}
            <div
              className="w-full h-full rounded-full shadow-inner flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: prod.accentColor }}
            >
              <div className="absolute inset-0 bg-black/15" />
              {/* Powder grain texture ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-white/25" />
              <span className="relative text-xs text-[#FAF9F5] font-serif-brand font-medium tracking-tight text-center px-1 drop-shadow-xs">
                {lang === "kn" ? prod.kannadaTitle.split(" ")[0] : prod.title.split(" ")[0]}
              </span>
            </div>
            {/* Traditional Brass Spoon Accent */}
            <div className="absolute -bottom-2 -right-3 transform rotate-[35deg] bg-gradient-to-r from-[#DFB876] to-[#9A7432] w-12 h-3 rounded-full shadow-md border border-[#F5E0A9]/60 flex items-center px-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FAF9F5]/40 ml-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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

  // Selected Category Filter for Door B
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>("all");

  // Track selected variant per product (productId -> variantId)
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  // Per-card Amma note language toggle ("kn" or "en")
  const [noteLangs, setNoteLangs] = useState<Record<string, "kn" | "en">>({});

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

  const getNoteLang = (prodId: string) => {
    return noteLangs[prodId] || (lang === "kn" ? "kn" : "en");
  };

  const toggleNoteLang = (prodId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNoteLangs((prev) => {
      const current = prev[prodId] || (lang === "kn" ? "kn" : "en");
      return { ...prev, [prodId]: current === "kn" ? "en" : "kn" };
    });
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
          <Check className="w-4 h-4 text-[#F4EFE6]" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header & Prominent Two-Door Segmented Switcher */}
        <div className="flex flex-col gap-6 pb-6 border-b border-[#D9CFBF]/70">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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

            {/* Prominent Segmented Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#EBDCCF]/80 border border-[#D9CFBF] shadow-xs self-start md:self-auto">
              <button
                type="button"
                onClick={() => setShopDoor("meal")}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  shopDoor === "meal"
                    ? "bg-[#5F252D] text-[#F4EFE6] shadow-sm font-semibold"
                    : "text-[#5A5048] hover:text-[#1D1A17] hover:bg-[#FAF9F5]/60"
                }`}
              >
                <UtensilsCrossed className="w-4 h-4 flex-shrink-0" />
                <span>{lang === "kn" ? "ಕ್ಯುರೇಟೆಡ್ ತಟ್ಟೆಗಳು (೬)" : "Curated Meals"}</span>
              </button>

              <button
                type="button"
                onClick={() => setShopDoor("category")}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  shopDoor === "category"
                    ? "bg-[#5F252D] text-[#F4EFE6] shadow-sm font-semibold"
                    : "text-[#5A5048] hover:text-[#1D1A17] hover:bg-[#FAF9F5]/60"
                }`}
              >
                <Layers className="w-4 h-4 flex-shrink-0" />
                <span>{lang === "kn" ? "೮ ಆಹಾರ ವಿಭಾಗಗಳು" : "The 8 Food Families"}</span>
              </button>
            </div>
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
            {/* Category Filter Chips (Positioned naturally below the segmented switch) */}
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
                const currentNoteLang = getNoteLang(prod.id);

                return (
                  <div
                    key={prod.id}
                    className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl flex flex-col justify-between hover:shadow-md transition-smooth relative overflow-hidden group"
                  >
                    {/* 1. Rich Product Visual Header (Replaces the thin maroon bar) */}
                    <ProductCardVisual prod={prod} lang={lang} />

                    {/* 2. Card Content Body */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-5">
                      <div>
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

                        {/* 3. Amma's Note with Generous Typography & 1-Click Bilingual Toggle */}
                        <div
                          onClick={() => setActiveProductModal(prod)}
                          className="mt-4 p-3.5 bg-[#FAF6EE] border border-[#E2D7C3] rounded-xl cursor-pointer hover:border-[#5F252D]/40 transition-smooth group/note"
                        >
                          <div className="flex items-center justify-between font-semibold text-[#5F252D] mb-1">
                            <div className="flex items-center gap-1.5 text-xs">
                              <span>
                                {currentNoteLang === "kn" ? "ಅಮ್ಮನ ಮಾತು" : "Amma's note"}
                              </span>
                              <Info className="w-3.5 h-3.5 text-[#5F252D] opacity-70 group-hover/note:opacity-100" />
                            </div>

                            {/* Bilingual Language Switcher Button */}
                            <button
                              type="button"
                              onClick={(e) => toggleNoteLang(prod.id, e)}
                              className="text-[10px] px-2 py-0.5 rounded-full border border-[#D9CFBF] bg-[#FAF9F5] text-[#5A5048] hover:text-[#5F252D] hover:border-[#5F252D] flex items-center gap-1 font-medium transition-colors"
                              title="Toggle between Kannada and English note"
                            >
                              <Languages className="w-2.5 h-2.5" />
                              <span>{currentNoteLang === "kn" ? "English" : "ಕನ್ನಡ"}</span>
                            </button>
                          </div>

                          {/* Note text rendered with generous line-height and size for Kannada ottus */}
                          {currentNoteLang === "kn" ? (
                            <p className="font-kannada text-sm leading-[1.65] text-[#2C241E] mt-1">
                              {prod.ammaNote}
                            </p>
                          ) : (
                            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#3D352E] mt-1 italic">
                              "{prod.ammaNoteEn || prod.ammaNote}"
                            </p>
                          )}
                        </div>
                      </div>

                      {/* 4. Sizing Selector & Integrated Dynamic Price */}
                      <div className="flex flex-col gap-3 pt-3 border-t border-[#E9DFCE]/80">
                        {/* Size Label */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#7C6F64]">
                            {lang === "kn" ? "ತೂಕ ಆರಿಸಿ" : "Select pack"}
                          </span>
                          <span className="text-xs text-[#5F252D] font-medium">
                            {activeVariant.weight}
                          </span>
                        </div>

                        {/* Variant Pills */}
                        <div className="grid grid-cols-3 gap-2">
                          {prod.variants.map((v) => {
                            const isSelected = activeVariant.id === v.id;
                            return (
                              <button
                                key={v.id}
                                onClick={() => handleSelectVariant(prod.id, v.id)}
                                className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer text-center ${
                                  isSelected
                                    ? "bg-[#5F252D] text-[#F4EFE6] border-[#5F252D] shadow-xs"
                                    : "bg-[#FAF9F5] text-[#5A5048] border-[#D9CFBF] hover:bg-[#EBDCCF]/60 hover:text-[#1D1A17]"
                                }`}
                              >
                                {v.weight}
                              </button>
                            );
                          })}
                        </div>

                        {/* Primary CTA with Pinned Dynamic Price */}
                        <div className="flex flex-col gap-2 pt-1">
                          <button
                            onClick={() => {
                              addToPlate(prod, activeVariant);
                              showToast(`Added ${lang === "kn" ? prod.kannadaTitle : prod.title} (${activeVariant.weight}) to plate!`);
                            }}
                            className="w-full bg-[#5F252D] hover:bg-[#471920] text-[#F4EFE6] py-3.5 px-4 rounded-xl text-sm font-semibold transition-smooth shadow-md hover:shadow-lg flex items-center justify-between cursor-pointer group/btn"
                          >
                            <span className="flex items-center gap-2">
                              <span>{lang === "kn" ? "ತಟ್ಟೆಗೆ ಹಾಕಿ" : "Add to plate"}</span>
                            </span>
                            <div className="flex items-baseline gap-1.5">
                              <span className="font-serif-brand text-lg text-[#F4EFE6] font-semibold">
                                ₹{activeVariant.price}
                              </span>
                              {activeVariant.originalPrice && (
                                <span className="text-xs text-[#EADCD8]/70 line-through">
                                  ₹{activeVariant.originalPrice}
                                </span>
                              )}
                            </div>
                          </button>

                          {/* Lightweight Secondary Subscription Action */}
                          <button
                            onClick={() => {
                              addToCustomList(prod, activeVariant);
                              showToast(`Added to your monthly subscription list!`);
                            }}
                            className="py-1 px-2 text-center text-xs text-[#5F252D] hover:text-[#3B151B] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer group/sub"
                          >
                            <Calendar className="w-3.5 h-3.5 text-[#5F252D]/80 group-hover/sub:scale-110 transition-transform" />
                            <span className="underline underline-offset-4 decoration-[#5F252D]/30 group-hover/sub:decoration-[#5F252D]">
                              {lang === "kn"
                                ? "ಪ್ರತಿ ತಿಂಗಳೂ ಕಳಿಸಿ · ೧೦% ಉಳಿತಾಯ"
                                : "Subscribe monthly & save 10%"}
                            </span>
                          </button>
                        </div>
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
