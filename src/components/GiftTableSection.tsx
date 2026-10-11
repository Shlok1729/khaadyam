"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { MEAL_PLATES, MealPlate } from "@/data/catalog";
import { Heart, Send } from "lucide-react";

export function GiftTableSection() {
  const { addMealToPlate, setBoxNote, lang } = useKhaadyam();

  const [selectedMeal, setSelectedMeal] = useState<MealPlate>(MEAL_PLATES[3]); // The Festival Table
  const [giftNote, setGiftNote] = useState(
    lang === "kn"
      ? "ನಿಮ್ಮ ಊಟ ಸದಾ ತೃಪ್ತಿಕರವಾಗಿರಲಿ, ಮನೆಯ ರುಚಿ ಸದಾ ಜೊತೆಗಿರಲಿ."
      : "Wishing you warmth, sweet memories, and the taste of home."
  );
  const [senderName, setSenderName] = useState(lang === "kn" ? "ಅಮೃತಾ" : "Amrutha");
  const [recipientCity, setRecipientCity] = useState(lang === "kn" ? "ಬೆಂಗಳೂರು" : "London");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendGift = () => {
    setBoxNote(`Gift Card Note: "${giftNote}" - With love, ${senderName} (To: ${recipientCity})`);
    addMealToPlate(selectedMeal);
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  return (
    <section id="gift" className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#E9DFCE] text-[#1D1A17] border-y border-[#D9CFBF]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Context & Controls */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F252D] uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-current text-[#5F252D]" />
            <span>{lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ · ದೂರದಲ್ಲಿರುವ ಆಪ್ತರಿಗೆ" : "Gift a Table · For someone far from home"}</span>
          </div>

          <h2 className="font-serif-brand text-3xl md:text-5xl font-normal text-[#1D1A17] leading-tight">
            {lang === "kn" ? "ಬಡಿಸಿ ಕಳಿಸಿ." : "Gift a table."}
          </h2>

          <p className="text-base md:text-lg text-[#5A5048] leading-relaxed max-w-xl">
            {lang === "kn"
              ? "ಊಟವನ್ನು ಆರಿಸಿ, ಪ್ರೀತಿಯ ನಾಲ್ಕು ಮಾತುಗಳನ್ನು ಬರೆಯಿರಿ. ಅಮ್ಮನ ತಂಡವೇ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಕೈಬರಹ ಬರೆದು ಸುಂದರವಾದ ಪೆಟ್ಟಿಗೆಯಲ್ಲಿ ಕಳಿಸುತ್ತದೆ."
              : "Pick a meal, write a few words from the heart, and Amma's team will handwrite your note on the card and pack it in a festive gift box."}
          </p>

          {/* Meal Picker */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6157]">
              {lang === "kn" ? "ಉಡುಗೊರೆ ಊಟದ ತಟ್ಟೆ ಆರಿಸಿ:" : "Choose the gift meal box:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {MEAL_PLATES.slice(0, 4).map((meal) => (
                <button
                  key={meal.id}
                  onClick={() => setSelectedMeal(meal)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-smooth border cursor-pointer ${
                    selectedMeal.id === meal.id
                      ? "bg-[#5F252D] text-[#F4EFE6] border-[#5F252D] shadow-sm"
                      : "bg-[#FAF9F5] text-[#1D1A17] border-[#D9CFBF] hover:bg-white"
                  }`}
                >
                  <span>{lang === "kn" ? meal.kannadaTitle : meal.title}</span>
                  <span className="ml-1 text-[11px] opacity-80">(₹{meal.price})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Inputs for Note */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-[#1D1A17]">
                {lang === "kn" ? "ಕೈಬರಹ ಕಾರ್ಡ್‌ಗೆ ನಿಮ್ಮ ಸಂದೇಶ:" : "Your personal note for the handwritten card:"}
              </label>
              <textarea
                rows={2}
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                placeholder={lang === "kn" ? "ಇಲ್ಲಿ ನಿಮ್ಮ ಸಂದೇಶ ಬರೆಯಿರಿ..." : "Write your message here..."}
                className="w-full p-3 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#1D1A17] block mb-1">
                  {lang === "kn" ? "ನಿಮ್ಮ ಹೆಸರು:" : "Your Name:"}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-2.5 bg-[#FAF9F5] border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#1D1A17] block mb-1">
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
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleSendGift}
              className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-8 py-3.5 rounded-full text-sm font-semibold transition-smooth shadow-md flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Send className="w-4 h-4 text-[#C99436]" />
              <span>
                {lang === "kn"
                  ? `ಈ ತಟ್ಟೆಯನ್ನು ಪ್ಯಾಕ್ ಮಾಡಿ ಕಳಿಸಿ (₹${selectedMeal.price})`
                  : `Pack & Gift This Table (₹${selectedMeal.price})`}
              </span>
            </button>
            {sentSuccess && (
              <span className="text-xs text-[#506D41] font-semibold mt-2 block animate-in fade-in">
                {lang === "kn" ? "✓ ಉಡುಗೊರೆ ತಟ್ಟೆ ತಟ್ಟೆಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "✓ Gift meal and card note added to your plate!"}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Live Handwritten Card Preview */}
        <div className="w-full lg:w-[480px]">
          <div className="bg-[#FBF8F2] border border-[#D9CFBF] rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-xl relative min-h-[360px]">
            {/* Stamp */}
            <div className="flex items-center justify-between border-b border-[#D9CFBF]/70 pb-4">
              <span className="font-serif-brand text-2xl text-[#5F252D] font-medium">
                {lang === "kn" ? "ಬನ್ನಿ, ಊಟ ಮಾಡಿ" : "Come, Sit & Eat"}
              </span>
              <div className="w-12 h-14 border-2 border-dashed border-[#5F252D]/50 rounded-sm flex flex-col items-center justify-center text-[9px] text-[#5F252D] uppercase font-bold p-1 bg-[#FAF9F5]">
                <span>INDIA</span>
                <span>POST</span>
              </div>
            </div>

            {/* Handwritten note simulation */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-serif-brand text-xl md:text-2xl text-[#1D1A17] leading-relaxed italic">
                "{giftNote || (lang === "kn" ? "[ನಿಮ್ಮ ಸಂದೇಶ ಇಲ್ಲಿ ಕಾಣುತ್ತದೆ]" : "[Your note appears here, in your words.]")}"
              </p>
              <p className="text-xs text-[#6B6157] mt-3 font-medium">
                {lang === "kn" ? "ತಲುಪುವ ಸ್ಥಳ:" : "Delivering to:"} {recipientCity || "Any corner of the world"}
              </p>
            </div>

            {/* Sign off */}
            <div className="border-t border-[#D9CFBF]/70 pt-4 flex items-center justify-between">
              <p className="text-sm font-medium text-[#5F252D]">
                {lang === "kn" ? "ಪ್ರೀತಿಯಿಂದ:" : "With love,"} {senderName || "[your name]"}
              </p>
              <span className="text-[11px] text-[#6B6157] bg-[#E9DFCE] px-2.5 py-1 rounded-full">
                {lang === "kn" ? "ಅಮ್ಮನ ತಂಡದ ಕೈಬರಹ" : "Handwritten by Amma's team"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
