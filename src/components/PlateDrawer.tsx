"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { PRODUCTS } from "@/data/catalog";
import { X, Plus, Minus, Trash2, ArrowRight, MessageCircle, MapPin, Phone } from "lucide-react";

export function PlateDrawer() {
  const {
    isPlateOpen,
    setIsPlateOpen,
    plateItems,
    removeFromPlate,
    updateQuantity,
    plateSubtotal,
    deliveryFee,
    plateTotal,
    plateItemCount,
    boxNote,
    setBoxNote,
    addToPlate,
    setIsUpiModalOpen,
    lang,
  } = useKhaadyam();

  // Address and phone inputs saved in component state
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!isPlateOpen) return null;

  // Suggestion item: Kaadu Amtekayi Pickle
  const suggestedProduct = PRODUCTS[4];

  const handleWhatsAppCheckout = () => {
    const itemsList = plateItems
      .map(
        (i) => `• ${lang === "kn" ? i.product.kannadaTitle : i.product.title} (${i.variant.weight}) x ${i.quantity} = ₹${i.variant.price * i.quantity}`
      )
      .join("\n");

    const message = `Namaskara Amma's kitchen team! 🙏\n\nI would like to order this plate from Khaadyam:\n\n${itemsList}\n\n*Total Plate:* ₹${plateTotal}\n*Phone:* ${phone || "Will share"}\n*Address:* ${address || "Will share"}\n${boxNote ? `*Note for the box:* ${boxNote}` : ""}\n\nPlease confirm and share UPI payment link. Dhanyavada!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");
  };

  const handleOpenUpi = () => {
    setIsPlateOpen(false);
    setIsUpiModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#FAF9F5] h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 border-l border-[#D9CFBF]">
        {/* Drawer Header */}
        <div className="p-6 bg-[#F4EFE6] border-b border-[#D9CFBF] flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-brand text-2xl text-[#5F252D] font-normal">
                {lang === "kn" ? "ನಿಮ್ಮ ತಟ್ಟೆ" : "Your Plate"}
              </span>
              <span className="text-xs bg-[#E9DFCE] text-[#5F252D] px-2 py-0.5 rounded-full font-bold">
                {plateItemCount} {lang === "kn" ? "ಪದಾರ್ಥಗಳು" : "items"}
              </span>
            </div>
            <p className="text-xs text-[#5A5048] mt-0.5">
              {lang === "kn" ? "ಕೇವಲ ಎರಡು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮುಗಿಸಿ." : "Two taps from here to done."}
            </p>
          </div>

          <button
            onClick={() => setIsPlateOpen(false)}
            className="p-2 rounded-full bg-[#E9DFCE] text-[#1D1A17] hover:bg-[#5F252D] hover:text-[#F4EFE6] transition-smooth cursor-pointer"
            aria-label="Close plate"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {plateItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-[#5A5048]">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#D9CFBF] flex items-center justify-center mb-4 text-[#5F252D] font-serif-brand text-2xl">
                {lang === "kn" ? "ತಟ್ಟೆ" : "Plate"}
              </div>
              <p className="font-serif-brand text-2xl text-[#1D1A17]">
                {lang === "kn" ? "ನಿಮ್ಮ ತಟ್ಟೆ ಖಾಲಿಯಾಗಿದೆ" : "Your plate is empty"}
              </p>
              <p className="text-xs text-[#6B6157] mt-1 max-w-xs">
                {lang === "kn"
                  ? "ನಮ್ಮ ಊಟದ ತಟ್ಟೆಗಳು ಅಥವಾ ೮ ವಿಭಾಗಗಳಿಂದ ಪದಾರ್ಥಗಳನ್ನು ಸೇರಿಸಿ."
                  : "Browse our curated meals or the 8 authentic food families to fill your table."}
              </p>
            </div>
          ) : (
            <>
              {/* Item Rows */}
              <div className="flex flex-col gap-3">
                {plateItems.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant.id}`}
                    className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-xs relative overflow-hidden"
                  >
                    {/* Family color bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: item.product.accentColor }}
                    />

                    <div className="flex flex-col pl-1 flex-1">
                      <span className="font-serif-brand text-base font-medium text-[#1D1A17] truncate">
                        {lang === "kn" ? item.product.kannadaTitle : item.product.title}
                      </span>
                      <span className="text-xs text-[#6B6157]">
                        {item.variant.weight} · ₹{item.variant.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Counter */}
                      <div className="flex items-center gap-2 bg-[#E9DFCE] rounded-full px-2 py-1 border border-[#D9CFBF]">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity - 1
                            )
                          }
                          className="p-1 hover:text-[#5F252D] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant.id,
                              item.quantity + 1
                            )
                          }
                          className="p-1 hover:text-[#5F252D] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total */}
                      <span className="font-medium text-sm w-14 text-right">
                        ₹{item.variant.price * item.quantity}
                      </span>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          removeFromPlate(item.product.id, item.variant.id)
                        }
                        className="text-[#6B6157] hover:text-[#B45431] p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* "Goes with your plate" Upsell Section */}
              {suggestedProduct && (
                <div className="bg-[#E9DFCE]/60 border border-[#D9CFBF] rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#5F252D]">
                    <span>{lang === "kn" ? "ಇದರ ಜೊತೆ ಇದೂ?" : "Goes with your plate:"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[#1D1A17]">
                        {lang === "kn" ? suggestedProduct.kannadaTitle : suggestedProduct.title}
                      </span>
                      <span className="text-xs text-[#6B6157]">
                        {suggestedProduct.variants[0].weight} · ₹{suggestedProduct.variants[0].price}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        addToPlate(suggestedProduct, suggestedProduct.variants[0])
                      }
                      className="bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] px-3.5 py-1.5 rounded-full text-xs font-medium transition-smooth cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{lang === "kn" ? "ಸೇರಿಸಿ" : "Add"} (+₹{suggestedProduct.variants[0].price})</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Note for the Box */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#1D1A17]">
                  {lang === "kn" ? "ಪೆಟ್ಟಿಗೆಗೆ ವಿಶೇಷ ಸಂದೇಶ (ಐಚ್ಛಿಕ):" : "A note for the box (optional):"}
                </label>
                <input
                  type="text"
                  value={boxNote}
                  onChange={(e) => setBoxNote(e.target.value)}
                  placeholder={
                    lang === "kn"
                      ? "ಉದಾ: ಅಜ್ಜಿಯ ಹುಟ್ಟುಹಬ್ಬಕ್ಕಾಗಿ ಪ್ರೀತಿಯಿಂದ ಪ್ಯಾಕ್ ಮಾಡಿ"
                      : "e.g. Please handwrite: With love for Ajji's 75th birthday"
                  }
                  className="w-full p-3 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] placeholder:text-[#6B6157]/60 focus:outline-hidden focus:border-[#5F252D]"
                />
              </div>

              {/* Delivery Details Inputs */}
              <div className="flex flex-col gap-2.5 pt-2 border-t border-[#D9CFBF]/60">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1D1A17]">
                  <Phone className="w-3.5 h-3.5 text-[#5F252D]" />
                  <span>{lang === "kn" ? "ದೂರವಾಣಿ ಸಂಖ್ಯೆ (ವಿತರಣೆಗಾಗಿ):" : "Phone number (for delivery updates):"}</span>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full p-3 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                />

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1D1A17] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#5F252D]" />
                  <span>{lang === "kn" ? "ವಿತರಣಾ ವಿಳಾಸ (ಮುಂದಿನ ಬಾರಿಗಾಗಿ ಉಳಿಸಲಾಗಿದೆ):" : "Delivery address (Saved on this phone for next time):"}</span>
                </div>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={lang === "kn" ? "ಮನೆ ಸಂಖ್ಯೆ, ರಸ್ತೆ, ನಗರ, ಪಿನ್‌ಕೋಡ್" : "House number, Street, Landmark, City, Pincode"}
                  className="w-full p-3 bg-white border border-[#D9CFBF] rounded-xl text-xs text-[#1D1A17] focus:outline-hidden focus:border-[#5F252D]"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout Buttons */}
        {plateItems.length > 0 && (
          <div className="p-6 bg-[#F4EFE6] border-t border-[#D9CFBF] flex flex-col gap-4">
            {/* Calculation Breakdown */}
            <div className="flex flex-col gap-1.5 text-xs text-[#5A5048]">
              <div className="flex justify-between">
                <span>{lang === "kn" ? "ಉಪಮೊತ್ತ:" : "Subtotal:"}</span>
                <span className="font-semibold text-[#1D1A17]">₹{plateSubtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === "kn" ? "ವಿತರಣೆ:" : "Delivery:"}</span>
                <span className="font-semibold text-[#1D1A17]">
                  {deliveryFee === 0 ? (
                    <span className="text-[#506D41]">{lang === "kn" ? "ಉಚಿತ" : "Free"}</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif-brand font-medium text-[#1D1A17] pt-1.5 border-t border-[#D9CFBF]">
                <span>{lang === "kn" ? "ಒಟ್ಟು ಮೊತ್ತ:" : "Total:"}</span>
                <span className="text-xl text-[#5F252D]">₹{plateTotal}</span>
              </div>
            </div>

            {/* DOOR 1: PAY WITH UPI */}
            <div className="flex flex-col gap-1">
              <button
                onClick={handleOpenUpi}
                className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3.5 rounded-full text-sm font-semibold transition-smooth shadow-md cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>
                  {lang === "kn"
                    ? `ಯುಪಿಐ ಮೂಲಕ ಪಾವತಿಸಿ (₹${plateTotal})`
                    : `Pay with UPI (₹${plateTotal})`}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth text-[#C99436]" />
              </button>
              <p className="text-[11px] text-center text-[#6B6157]">
                {lang === "kn" ? "ನಿಮ್ಮ ಯುಪಿಐ ಆ್ಯಪ್ ತೆರೆಯುತ್ತದೆ. ಖಾತೆ ಅಗತ್ಯವಿಲ್ಲ." : "Opens your UPI app. No account needed."}
              </p>
            </div>

            {/* DOOR 2: WHATSAPP DIRECT DOOR */}
            <div className="flex flex-col gap-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-full text-xs font-semibold transition-smooth shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {lang === "kn"
                    ? "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಈ ತಟ್ಟೆಯನ್ನು ಕಳುಹಿಸಿ"
                    : "Send this plate on WhatsApp"}
                </span>
              </button>
              <p className="text-[11px] text-center text-[#6B6157]">
                {lang === "kn"
                  ? "ಅಮ್ಮನ ತಂಡವೇ ದೃಢೀಕರಿಸಿ ಅಲ್ಲಿಯೇ ಪಾವತಿ ಪಡೆಯುತ್ತದೆ."
                  : "Amma's team confirms and takes payment there."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
