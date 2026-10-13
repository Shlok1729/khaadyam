"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { Plus, X, Heart, Check } from "lucide-react";

export function MemoryWallSection() {
  const { memories, addMemory, lang } = useKhaadyam();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memoryText, setMemoryText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorCity, setAuthorCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memoryText.trim() || !authorName.trim()) return;

    addMemory(memoryText.trim(), authorName.trim(), authorCity.trim() || "Karnataka");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setMemoryText("");
      setAuthorName("");
      setAuthorCity("");
    }, 1500);
  };

  return (
    <section id="memory-wall" className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#FAF9F5] border-b border-[#D9CFBF]/70">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D9CFBF]/70">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif-brand text-3xl md:text-4xl text-[#1D1A17] font-normal">
              {lang === "kn"
                ? "ನೆನಪಿನ ಗೋಡೆ: ಗ್ರಾಹಕರ ನೆನಪುಗಳು"
                : "The memory wall: one line from each customer."}
            </h2>
            <p className="text-sm md:text-base text-[#5A5048] max-w-xl">
              {lang === "kn"
                ? "ನಿಮ್ಮ ಅಜ್ಜ-ಅಜ್ಜಿಯ ಮನೆಯ ಊಟದ ರುಚಿ ಹೇಗಿತ್ತು? ನಿಮ್ಮ ಬಾಲ್ಯದ ಒಂದು ಸಾಲಿನ ನೆನಪನ್ನು ಹಂಚಿಕೊಳ್ಳಿ."
                : "What did it taste like at your grandparents' dining table? Share a single sentence of childhood nostalgia."}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-smooth shadow-sm cursor-pointer flex items-center gap-2 self-start md:self-end"
          >
            <Plus className="w-4 h-4 text-[#F4EFE6]" />
            <span>
              {lang === "kn"
                ? "ಗೋಡೆಗೆ ನಿಮ್ಮ ನೆನಪನ್ನು ಸೇರಿಸಿ"
                : "Add your memory to the wall"}
            </span>
          </button>
        </div>

        {/* Customer Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((m) => (
            <div
              key={m.id}
              className="border-2 border-dashed border-[#BFB3A0] bg-[#FBF8F2] rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 min-h-[180px] shadow-xs hover:border-[#5F252D] transition-smooth relative group"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#5F252D] text-3xl font-serif-brand leading-none">“</span>
                <p className="font-serif-brand text-lg md:text-xl text-[#1D1A17] leading-relaxed italic -mt-2">
                  {lang === "kn" && m.kannadaQuote ? m.kannadaQuote : m.quote}
                </p>
              </div>

              <div className="border-t border-[#E2D9CA] pt-3 flex items-center justify-between text-xs text-[#6B6157]">
                <span className="font-semibold text-[#1D1A17]">
                  {m.author}, {m.city}
                </span>
                <span className="text-[11px] text-[#5F252D] opacity-80 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>{lang === "kn" ? "ದೃಢೀಕರಿಸಿದ ನೆನಪು" : "Verified memory"}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal to Submit Memory */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] border border-[#D9CFBF] w-full max-w-lg rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#E9DFCE] text-[#1D1A17] hover:bg-[#5F252D] hover:text-[#F4EFE6] transition-smooth cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="font-serif-brand text-2xl text-[#1D1A17] mt-1">
                {lang === "kn" ? "ಗೋಡೆಗೆ ನಿಮ್ಮ ನೆನಪನ್ನು ಸೇರಿಸಿ" : "Add your memory"}
              </h3>
              <p className="text-xs text-[#5A5048] mt-1">
                {lang === "kn"
                  ? "ಅಜ್ಜ-ಅಜ್ಜಿಯ ಮನೆಯ ಊಟದ ರುಚಿ ನೆನಪಿಸಿಕೊಳ್ಳಿ:"
                  : "What did it taste like at your grandparents' table?"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#1D1A17]">
                  {lang === "kn" ? "ನಿಮ್ಮ ನೆನಪು, ಒಂದೇ ಸಾಲಿನಲ್ಲಿ:" : "Your memory, in one line:"}
                </label>
                <textarea
                  rows={3}
                  required
                  value={memoryText}
                  onChange={(e) => setMemoryText(e.target.value)}
                  placeholder={
                    lang === "kn"
                      ? "ಉದಾ: ಮಳೆಗಾಲದಲ್ಲಿ ಬಿಸಿ ಅನ್ನಕ್ಕೆ ಗುರೆಳ್ಳು ಪುಡಿ, ತಾಜಾ ಬೆಣ್ಣೆ ಹಾಕಿ ತಿಂದ ಅದೇ ಅಮೃತ ರುಚಿ."
                      : "e.g. Eating hot rice with Gurellu pudi and fresh churned white butter while listening to the rain on the tiles."
                  }
                  className="w-full p-3 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#1D1A17]">
                    {lang === "kn" ? "ನಿಮ್ಮ ಹೆಸರು:" : "Your Name:"}
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Ramesh K."
                    className="w-full p-2.5 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#1D1A17]">
                    {lang === "kn" ? "ಊರು:" : "City:"}
                  </label>
                  <input
                    type="text"
                    value={authorCity}
                    onChange={(e) => setAuthorCity(e.target.value)}
                    placeholder="e.g. Bengaluru, Mysuru"
                    className="w-full p-2.5 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                  />
                </div>
              </div>

              {submitted ? (
                <div className="bg-[#506D41] text-white p-3 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>
                    {lang === "kn" ? "ನೆನಪನ್ನು ಗೋಡೆಗೆ ಸೇರಿಸಲಾಗಿದೆ!" : "Memory added to the wall!"}
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3.5 rounded-full text-xs font-semibold transition-smooth shadow-md cursor-pointer mt-2"
                >
                  {lang === "kn" ? "ನೆನಪಿನ ಗೋಡೆಗೆ ಪೋಸ್ಟ್ ಮಾಡಿ" : "Post to Memory Wall"}
                </button>
              )}

              <p className="text-[11px] text-center text-[#6B6157]">
                {lang === "kn"
                  ? "ಪ್ರತಿಯೊಂದು ನೆನಪನ್ನೂ ಪ್ರೀತಿಯಿಂದ ಓದಿ ಪ್ರಕಟಿಸುತ್ತೇವೆ."
                  : "We read each one first with love before adding permanently."}
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
