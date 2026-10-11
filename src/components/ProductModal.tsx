"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { FOOD_FAMILIES, ProductVariant } from "@/data/catalog";
import { X, Plus, Sparkles, ShoppingBag } from "lucide-react";

export function ProductModal() {
  const {
    activeProductModal,
    setActiveProductModal,
    addToPlate,
    addToCustomList,
    lang,
  } = useKhaadyam();

  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  if (!activeProductModal) return null;

  const prod = activeProductModal;
  const family = FOOD_FAMILIES.find((f) => f.id === prod.familyId);
  const activeVariant: ProductVariant =
    prod.variants.find((v) => v.id === selectedVariantId) ||
    prod.variants[1] ||
    prod.variants[0];

  const handleAddToPlate = () => {
    addToPlate(prod, activeVariant);
    setAddedNotice(lang === "kn" ? "ತಟ್ಟೆಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Added to plate!");
    setTimeout(() => setAddedNotice(null), 2000);
  };

  const handleAddToCustomList = () => {
    addToCustomList(prod, activeVariant);
    setAddedNotice(lang === "kn" ? "ತಿಂಗಳ ಪಟ್ಟಿಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Added to monthly subscription list!");
    setTimeout(() => setAddedNotice(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF9F5] border border-[#D9CFBF] w-full max-w-2xl rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveProductModal(null)}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E9DFCE] text-[#1D1A17] hover:bg-[#5F252D] hover:text-[#F4EFE6] transition-smooth cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Breadcrumb & Family Badge */}
        <div className="flex items-center gap-2 text-xs text-[#6B6157]">
          <span>{lang === "kn" ? "ಅಂಗಡಿ" : "Shop"}</span>
          <span>/</span>
          <span style={{ color: prod.accentColor }} className="font-semibold uppercase tracking-wider">
            {lang === "kn" ? family?.kannadaName : family?.name}
          </span>
          <span>/</span>
          <span className="text-[#1D1A17] font-medium truncate">
            {lang === "kn" ? prod.kannadaTitle : prod.title}
          </span>
        </div>

        {/* Product Identity */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-brand text-3xl md:text-4xl text-[#1D1A17] font-normal">
              {lang === "kn" ? prod.kannadaTitle : prod.title}
            </h2>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white"
              style={{ backgroundColor: prod.accentColor }}
            >
              {lang === "kn" ? family?.kannadaName : family?.name}
            </div>
          </div>
          <p className="text-sm text-[#5A5048] italic">{prod.tagline}</p>
        </div>

        {/* Amma's Note Box */}
        <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-5 flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-[#5F252D] font-semibold text-sm">
            <Sparkles className="w-4 h-4 text-[#C99436]" />
            <span>{lang === "kn" ? "ಅಮ್ಮನ ಮಾತು" : "Amma's note"}</span>
          </div>
          <p className="text-sm md:text-base text-[#1D1A17] leading-relaxed">
            "{prod.ammaNote}"
          </p>
        </div>

        {/* Serving Suggestions (Goes with) */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6157]">
            {lang === "kn" ? "ಇದರೊಂದಿಗೆ ಸವಿಯಿರಿ:" : "Goes with your plate:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {prod.goesWith.map((item, idx) => (
              <span
                key={idx}
                className="bg-[#E9DFCE] text-[#1D1A17] text-xs px-3 py-1.5 rounded-full font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="flex flex-col gap-1 text-xs text-[#5A5048]">
          <span className="font-semibold text-[#1D1A17]">
            {lang === "kn" ? "ನೈಸರ್ಗಿಕ ಸಾಮಗ್ರಿಗಳು:" : "Hand-ground Ingredients:"}
          </span>
          <p>{prod.ingredients}</p>
        </div>

        {/* Size / Weight Selector & Price */}
        <div className="flex flex-col gap-3 pt-2 border-t border-[#D9CFBF]/60">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#1D1A17]">
              {lang === "kn" ? "ತೂಕದ ಆಯ್ಕೆ:" : "Select weight variant:"}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-brand text-2xl text-[#5F252D] font-semibold">
                ₹{activeVariant.price}
              </span>
              {activeVariant.originalPrice && (
                <span className="text-xs text-[#6B6157] line-through">
                  ₹{activeVariant.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {prod.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariantId(v.id)}
                className={`py-2 px-3 rounded-xl text-sm font-medium transition-smooth border cursor-pointer text-center ${
                  activeVariant.id === v.id
                    ? "bg-[#5F252D] text-[#F4EFE6] border-[#5F252D] shadow-xs"
                    : "bg-[#FBF8F2] text-[#5A5048] border-[#D9CFBF] hover:bg-[#E9DFCE]"
                }`}
              >
                <div>{v.weight}</div>
                <div className="text-xs opacity-80 mt-0.5">₹{v.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback notice if added */}
        {addedNotice && (
          <div className="bg-[#506D41] text-white text-xs px-4 py-2 rounded-lg text-center font-medium animate-in fade-in duration-150">
            {addedNotice}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleAddToPlate}
            className="flex-1 bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3.5 rounded-full text-sm font-medium transition-smooth flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <ShoppingBag className="w-4 h-4 text-[#EADCD8]" />
            <span>
              {lang === "kn"
                ? `ತಟ್ಟೆಗೆ ಹಾಕಿ (₹${activeVariant.price})`
                : `Add to plate (₹${activeVariant.price})`}
            </span>
          </button>

          <button
            onClick={handleAddToCustomList}
            className="flex-1 bg-transparent hover:bg-[#E9DFCE] text-[#5F252D] border border-[#5F252D] py-3.5 rounded-full text-xs font-semibold transition-smooth flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>
              {lang === "kn"
                ? "ತಿಂಗಳ ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ"
                : "Add to monthly list"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
