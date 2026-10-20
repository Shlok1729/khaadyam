"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { MEAL_PLATES, MealPlate, PRODUCTS, Product } from "@/data/catalog";
import { Heart, Send, Check, Package, Sparkles } from "lucide-react";

export function GiftTableSection() {
  const { addMealToPlate, setBoxNote, lang } = useKhaadyam();

  const [selectedMeal, setSelectedMeal] = useState<MealPlate>(MEAL_PLATES[3]); // The Festival Table
  const [recipientName, setRecipientName] = useState(lang === "kn" ? "ಪ್ರಿಯಾ" : "Priya");
  const [giftNote, setGiftNote] = useState(
    lang === "kn"
      ? "ನಿಮ್ಮ ಊಟ ಸದಾ ತೃಪ್ತಿಕರವಾಗಿರಲಿ, ಮನೆಯ ರುಚಿ ಸದಾ ಜೊತೆಗಿರಲಿ."
      : "Wishing you warmth, sweet memories, and the taste of home."
  );
  const [senderName, setSenderName] = useState(lang === "kn" ? "ಅಮೃತಾ" : "Amrutha");
  const [recipientCity, setRecipientCity] = useState(lang === "kn" ? "ಬೆಂಗಳೂರು" : "London, UK");
  const [sentSuccess, setSentSuccess] = useState(false);

  // Resolve included products for selected meal plate
  const includedProducts: Product[] = selectedMeal.includedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const handleSendGift = () => {
    setBoxNote(
      `Gift Basket Note: "${giftNote}" | To: ${recipientName} (${recipientCity}) | With love, ${senderName}`
    );
    addMealToPlate(selectedMeal);
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3500);
  };

  return (
    <section id="gift" className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#E9DFCE] text-[#1D1A17] border-y border-[#D9CFBF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Context, Visual Box Selector & Note Form */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5F252D] uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-current text-[#5F252D]" />
              <span>{lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ · ದೂರದಲ್ಲಿರುವ ಆಪ್ತರಿಗೆ" : "Gift a Basket · For someone far from home"}</span>
            </div>

            <h2 className="font-serif-brand text-3xl md:text-5xl font-normal text-[#1D1A17] leading-tight">
              {lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ." : "Gift a basket."}
            </h2>

            <p className="text-sm md:text-base text-[#5A5048] leading-relaxed max-w-xl">
              {lang === "kn"
                ? "ಊಟವನ್ನು ಆರಿಸಿ, ಪ್ರೀತಿಯ ನಾಲ್ಕು ಮಾತುಗಳನ್ನು ಬರೆಯಿರಿ. ಅಮ್ಮನ ತಂಡವೇ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಕೈಬರಹ ಬರೆದು ಸುಂದರವಾದ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಕಳಿಸುತ್ತದೆ."
                : "Pick a meal box, write a few words from the heart, and Amma's kitchen team will handwrite your note on authentic stationery in real ink."}
            </p>

            {/* Meal Box Visual Cards Selector */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6157]">
                  {lang === "kn" ? "ಉಡುಗೊರೆ ಊಟದ ಪೆಟ್ಟಿಗೆ ಆರಿಸಿ:" : "Choose Gift Meal Box:"}
                </span>
                <span className="text-[11px] text-[#5F252D] font-medium">
                  {lang === "kn" ? "4 ವಿಶೇಷ ತಟ್ಟೆಗಳು" : "4 Curated Selections"}
                </span>
              </div>

              {/* 4 Compact Visual Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MEAL_PLATES.slice(0, 4).map((meal) => {
                  const isSelected = selectedMeal.id === meal.id;
                  return (
                    <button
                      key={meal.id}
                      type="button"
                      onClick={() => setSelectedMeal(meal)}
                      className={`text-left p-3 rounded-2xl border transition-smooth cursor-pointer flex items-center gap-3.5 relative ${
                        isSelected
                          ? "bg-[#FAF7F0] border-[#5F252D] ring-2 ring-[#5F252D]/20 shadow-sm"
                          : "bg-[#FAF9F5] border-[#D9CFBF] hover:border-[#B8AB99] hover:bg-white"
                      }`}
                    >
                      {/* Thumbnail photo */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#D9CFBF] bg-[#F4EFE6] relative">
                        <Image
                          src="/bharani.jpg"
                          alt={meal.title}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{ backgroundColor: meal.colors[0] }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pr-5">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-serif-brand text-sm font-medium text-[#1D1A17] truncate">
                            {lang === "kn" ? meal.kannadaTitle : meal.title}
                          </h4>
                          <span className="text-xs font-bold text-[#5F252D] shrink-0">
                            ₹{meal.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#6B6157] line-clamp-1 mt-0.5">
                          {lang === "kn" ? meal.kannadaDescription : meal.description}
                        </p>
                        <span className="text-[10px] text-[#8A7E72] font-medium inline-block mt-0.5">
                          {meal.includedProductIds.length} {lang === "kn" ? "ಪದಾರ್ಥಗಳು" : "artisanal items"}
                        </span>
                      </div>

                      {/* Check badge when selected */}
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#5F252D] text-[#F4EFE6] flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Inline Box Contents Breakdown Drawer */}
              <div className="bg-[#FAF7F0] border border-[#D9CFBF] rounded-2xl p-3.5 mt-1 flex flex-col gap-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5F252D] flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#5F252D]" />
                    <span>
                      {lang === "kn"
                        ? `ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಒಳಗೊಂಡಿರುವ ಪದಾರ್ಥಗಳು (${selectedMeal.kannadaTitle}):`
                        : `Included in ${selectedMeal.title} (${includedProducts.length} items):`}
                    </span>
                  </span>
                  <span className="text-[10px] text-[#6B6157] font-medium bg-[#E9DFCE] px-2 py-0.5 rounded-full">
                    {lang === "kn" ? "ಪ್ಯಾಕ್ ಬೆಲೆ ₹" + selectedMeal.price : "Fixed Pack ₹" + selectedMeal.price}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {includedProducts.map((prod, idx) => (
                    <span
                      key={prod.id}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#FAF9F5] text-[#1D1A17] border border-[#E0D5C3] px-2.5 py-1 rounded-lg"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F252D]" />
                      <span>{lang === "kn" ? prod.kannadaTitle : prod.title}</span>
                      <span className="text-[#8A7E72] text-[10px]">({prod.variants[0]?.weight || "Standard"})</span>
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-[#6B6157] italic">
                  {lang === "kn"
                    ? "ಅಮ್ಮನ ದಾವಣಗೆರೆ ಪರಂಪರೆಯ ಚಿನ್ನದ ಸೀಲ್ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಮತ್ತು ಶುದ್ಧ ಕೈಬರಹ ಪೋಸ್ಟ್‌ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಜೋಡಿಸಲಾಗುತ್ತದೆ."
                    : "Packed in a rigid heritage tin with moisture-proof wax wrapping and a handwritten keepsake postcard."}
                </p>
              </div>
            </div>

            {/* Form Inputs for Note & Personalization */}
            <div className="flex flex-col gap-3.5 pt-1">
              {/* Note input with Character Limit Indicator */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#1D1A17]">
                    {lang === "kn" ? "ಕೈಬರಹ ಕಾರ್ಡ್‌ಗೆ ನಿಮ್ಮ ಸಂದೇಶ:" : "Your personal note for the handwritten card:"}
                  </label>
                  <span
                    className={`text-[11px] font-mono ${
                      giftNote.length > 180 ? "text-[#B45431] font-bold" : "text-[#7C7164]"
                    }`}
                  >
                    {giftNote.length} / 200 {lang === "kn" ? "ಅಕ್ಷರಗಳು" : "characters"}
                  </span>
                </div>
                <textarea
                  rows={2}
                  maxLength={200}
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder={lang === "kn" ? "ಇಲ್ಲಿ ನಿಮ್ಮ ಸಂದೇಶ ಬರೆಯಿರಿ (ಗರಿಷ್ಠ 200 ಅಕ್ಷರಗಳು)..." : "Write your message here (max 200 characters)..."}
                  className="w-full p-3 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D] focus:ring-1 focus:ring-[#5F252D]"
                />
              </div>

              {/* Recipient, City, and Sender Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#1D1A17] block mb-1">
                    {lang === "kn" ? "ಸ್ವೀಕರಿಸುವವರ ಹೆಸರು:" : "Recipient's Name:"}
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Priya"
                    className="w-full p-2.5 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1D1A17] block mb-1">
                    {lang === "kn" ? "ಕಳುಹಿಸುವ ಊರು:" : "Sending To (City):"}
                  </label>
                  <input
                    type="text"
                    value={recipientCity}
                    onChange={(e) => setRecipientCity(e.target.value)}
                    placeholder="e.g. London, Mysuru"
                    className="w-full p-2.5 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1D1A17] block mb-1">
                    {lang === "kn" ? "ನಿಮ್ಮ ಹೆಸರು (ಕಳುಹಿಸುವವರು):" : "Your Name (Sender):"}
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Amrutha"
                    className="w-full p-2.5 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button & Baseline Alignment */}
          <div className="pt-2">
            <button
              onClick={handleSendGift}
              className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-8 py-3.5 rounded-full text-sm font-semibold transition-smooth shadow-md flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-[#F4EFE6]" />
              <span>
                {lang === "kn"
                  ? `ಈ ಬುಟ್ಟಿಯನ್ನು ಪ್ಯಾಕ್ ಮಾಡಿ ಕಳಿಸಿ (₹${selectedMeal.price})`
                  : `Pack & Gift This Basket (₹${selectedMeal.price})`}
              </span>
            </button>
            {sentSuccess && (
              <span className="text-xs text-[#506D41] font-semibold mt-2.5 inline-flex items-center gap-1.5 animate-in fade-in">
                <Check className="w-3.5 h-3.5 text-[#506D41]" />
                <span>
                  {lang === "kn" ? "ಉಡುಗೊರೆ ತಟ್ಟೆ ತಟ್ಟೆಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Gift meal and handwritten card added to your plate!"}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Authentic Stationery Postcard Preview */}
        <div className="w-full lg:col-span-5 flex flex-col justify-between">
          <div className="h-full bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F3EDE2] border-2 border-[#D4C7B3] rounded-3xl p-5 sm:p-7 shadow-2xl relative flex flex-col justify-between gap-6 overflow-hidden">
            {/* Cotton Paper Subtle Texture Watermark */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1D1A17_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Inner Fine Postal Border (Deckle edge / postal border effect) */}
            <div className="absolute inset-2 border border-[#E3D8C8] rounded-2xl pointer-events-none" />

            {/* Top Postcard Bar: Heritage Post Office Heading & Vintage Illustrated Stamp */}
            <div className="flex items-start justify-between border-b border-[#D8CCBA] pb-4 relative z-10">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif-brand text-xs font-bold uppercase tracking-widest text-[#5F252D]">
                  {lang === "kn" ? "ಖಾದ್ಯಂ ಅಂಚೆ ಸೇವೆ" : "Khaadyam Dâk Sevâ"}
                </span>
                <span className="font-serif-brand text-2xl text-[#1D1A17] font-semibold leading-none">
                  {lang === "kn" ? "ಅಂಚೆ ಕಾರ್ಡ್ · POST CARD" : "POST CARD"}
                </span>
                <span className="text-[10px] text-[#7A6F62] uppercase tracking-wider font-medium mt-1">
                  {lang === "kn"
                    ? "ದಾವಣಗೆರೆ ಪರಂಪರೆ ಕೇಂದ್ರ • ವಿಶೇಷ ಅಂಚೆ"
                    : "Davangere Heritage Dispatch • Express"}
                </span>
              </div>

              {/* Vintage Illustrated Stamp Graphic with Perforated Edges & Cancellation Waves */}
              <div className="relative shrink-0">
                {/* Stamp Container with serrated edges simulation */}
                <div className="w-20 h-24 sm:w-22 sm:h-26 bg-[#FDF9F2] border-2 border-dashed border-[#8B3A44] p-1.5 rounded-xs shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden bg-cover">
                  {/* Stamp Header */}
                  <div className="w-full flex items-center justify-between text-[8px] font-bold text-[#8B3A44] border-b border-[#8B3A44]/30 pb-0.5">
                    <span>KARNATAKA</span>
                    <span>₹5.00</span>
                  </div>

                  {/* Stamp Illustration: Davangere Heritage Bharani & Pestle */}
                  <div className="my-auto flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-[#8B3A44]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      {/* Heritage Bharani Jar & Mortar */}
                      <path d="M7 6h10M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
                      <path d="M5 10c0-2 1.5-4 4-4h6c2.5 0 4 2 4 4v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7z" fill="#8B3A44" fillOpacity="0.1" />
                      <path d="M9 13h6M12 10v6" />
                      <circle cx="12" cy="18" r="1.5" fill="#8B3A44" />
                    </svg>
                    <span className="text-[7px] font-serif-brand font-bold uppercase tracking-tight text-[#8B3A44] mt-0.5">
                      DAVANGERE
                    </span>
                  </div>

                  {/* Stamp Denomination Footer */}
                  <div className="w-full text-[7px] font-bold text-[#8B3A44] border-t border-[#8B3A44]/30 pt-0.5 uppercase tracking-tighter">
                    POSTAGE PAID
                  </div>
                </div>

                {/* Overlapping Authentic Circular Postmark (Cancellation Stamp) */}
                <div className="absolute -bottom-3 -left-5 w-14 h-14 rounded-full border border-[#1E3A8A]/60 flex flex-col items-center justify-center text-[#1E3A8A] transform -rotate-12 pointer-events-none bg-[#FAF6EE]/30 backdrop-blur-[0.5px]">
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#1E3A8A]/50 flex flex-col items-center justify-center p-0.5">
                    <span className="text-[6px] font-bold tracking-tighter uppercase">DAVANGERE</span>
                    <span className="text-[6.5px] font-bold text-[#8B3A44]">G.P.O.</span>
                    <span className="text-[5.5px] font-mono tracking-tighter">1974</span>
                  </div>
                </div>

                {/* Cancellation Waves slicing across stamp into the postcard */}
                <svg
                  className="absolute -left-12 top-6 w-16 h-8 text-[#1E3A8A]/60 pointer-events-none"
                  viewBox="0 0 64 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M0 6 Q 8 2, 16 6 T 32 6 T 48 6 T 64 6" />
                  <path d="M0 14 Q 8 10, 16 14 T 32 14 T 48 14 T 64 14" />
                  <path d="M0 22 Q 8 18, 16 22 T 32 22 T 48 22 T 64 22" />
                </svg>
              </div>
            </div>

            {/* Postcard Center: Salutation, Personal Note in Royal Ink Script & Sender Sign-off */}
            <div className="flex-1 flex flex-col justify-center gap-3 relative z-10 py-1">
              {/* Recipient Greeting in Handwriting */}
              <p className="font-handwriting text-2xl sm:text-3xl text-[#1E3A8A] font-normal tracking-wide">
                {lang === "kn" ? "ಪ್ರೀತಿಯ" : "Dear"}{" "}
                <span className="underline decoration-[#1E3A8A]/30 underline-offset-4 font-semibold">
                  {recipientName || (lang === "kn" ? "ಸ್ನೇಹಿತರಿಗೆ" : "Friend")}
                </span>
                ,
              </p>

              {/* Personal Handwritten Message in Royal Blue Ink */}
              <div className="min-h-[100px] flex items-center">
                <p className="font-handwriting text-xl sm:text-[25px] text-[#1E3A8A] leading-relaxed italic tracking-wide">
                  "{giftNote || (lang === "kn" ? "ನಿಮ್ಮ ಸಂದೇಶ ಇಲ್ಲಿ ಸುಂದರ ಕೈಬರಹದಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ..." : "Your personal note appears here in Amma's kitchen handwriting...")}"
                </p>
              </div>

              {/* Sign-off in Handwriting */}
              <div className="flex flex-col items-end pt-1">
                <p className="font-handwriting text-lg sm:text-xl text-[#1E3A8A] italic">
                  {lang === "kn" ? "ಪ್ರೀತಿಯಿಂದ & ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ," : "With love & warm memories,"}
                </p>
                <p className="font-handwriting text-2xl sm:text-3xl text-[#1E3A8A] font-bold tracking-wide">
                  — {senderName || (lang === "kn" ? "[ನಿಮ್ಮ ಹೆಸರು]" : "[Your Name]")}
                </p>
              </div>
            </div>

            {/* Postcard Footer: Address Delivery Lines & Kitchen Guarantee */}
            <div className="border-t border-[#D8CCBA] pt-3.5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 relative z-10">
              {/* Destination Address Mockup */}
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A6F62]">
                  {lang === "kn" ? "ತಲುಪಬೇಕಾದ ವಿಳಾಸ:" : "Deliver To (Destination):"}
                </span>
                <p className="text-xs font-serif-brand font-medium text-[#1D1A17]">
                  {recipientName || "Recipient"} • {recipientCity || "Any City"}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#506D41]" />
                  <span className="text-[10px] text-[#5A5048]">
                    {lang === "kn" ? "ದಾವಣಗೆರೆ ಕೇಂದ್ರದಿಂದ ನೇರ ರವಾನೆ" : "Dispatched directly from Davangere kitchen"}
                  </span>
                </div>
              </div>

              {/* Amma's Handwritten Guarantee Stamp */}
              <div className="flex items-center gap-1.5 bg-[#FAF6EE] border border-[#D9CFBF] px-3 py-1.5 rounded-full shadow-2xs self-end sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#5F252D]" />
                <span className="text-[11px] font-medium text-[#5F252D]">
                  {lang === "kn" ? "ಅಸಲಿ ಶಾಯಿಯಲ್ಲಿ ಕೈಬರಹ" : "Handwritten in Real Ink"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

