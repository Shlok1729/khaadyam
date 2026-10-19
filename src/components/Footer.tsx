"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { MessageCircle, X, ShieldCheck, Truck, RotateCcw, HelpCircle } from "lucide-react";

type PolicyType = "shipping" | "returns" | "terms" | "contact" | null;

export function Footer() {
  const { lang } = useKhaadyam();
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const policyContent = {
    shipping: {
      title: lang === "kn" ? "ವಿತರಣಾ ನೀತಿ (Shipping & Delivery)" : "Shipping & Delivery Policy",
      icon: <Truck className="w-5 h-5 text-[#5F252D]" />,
      content:
        lang === "kn" ? (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>ಉಚಿತ ವಿತರಣೆ:</strong> ₹೪೯೯ ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಎಲ್ಲಾ ಆರ್ಡರ್‌ಗಳಿಗೆ ಭಾರತದಾದ್ಯಂತ ಉಚಿತ ವಿತರಣೆ.
            </p>
            <p>
              • <strong>ತಾಜಾ ಪ್ಯಾಕಿಂಗ್:</strong> ದಾವಣಗೆರೆಯ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಆರ್ಡರ್ ಬಂದ ನಂತರವೇ ತಾಜಾ ಪುಡಿಗಳನ್ನು ಪ್ಯಾಕ್ ಮಾಡಿ ೨೪-೪೮ ಗಂಟೆಗಳಲ್ಲಿ ರವಾನಿಸಲಾಗುತ್ತದೆ.
            </p>
            <p>
              • <strong>ವಿತರಣಾ ಸಮಯ:</strong> ಬೆಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ೧-೨ ದಿನಗಳು; ಭಾರತದ ಇತರ ಪ್ರಮುಖ ನಗರಗಳಿಗೆ ೩-೪ ದಿನಗಳು.
            </p>
            <p>
              • <strong>ಸುರಕ್ಷಿತ ಸಾಗಾಣಿಕೆ:</strong> ಮಣ್ಣಿನ ಭರಣಿಗಳು ಮತ್ತು ಗಾಜಿನ ಬಾಟಲಿಗಳನ್ನು ಪರಿಸರ ಸ್ನೇಹಿ ಸುಭದ್ರ ಪ್ಯಾಕಿಂಗ್‌ನಲ್ಲಿ ಕಳಿಸಲಾಗುತ್ತದೆ.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>Free Shipping:</strong> Complimentary standard shipping across India on all orders over ₹499.
            </p>
            <p>
              • <strong>Fresh Dispatch:</strong> Batches are stone-ground and packed at our Davangere kitchen within 24–48 hours of order confirmation.
            </p>
            <p>
              • <strong>Transit Time:</strong> 1–2 business days within Karnataka (Bangalore, Mysore, Hubli); 3–4 days to other major Indian cities.
            </p>
            <p>
              • <strong>Bharani Safe Packing:</strong> Earthen ceramic bharani jars are encased in custom cushioned honeycomb cardboard to eliminate transit breakage.
            </p>
          </div>
        ),
    },
    returns: {
      title: lang === "kn" ? "ಹಿಂತಿರುಗಿಸುವ ಮತ್ತು ಮರುಪಾವತಿ ನೀತಿ" : "Returns & Refund Policy",
      icon: <RotateCcw className="w-5 h-5 text-[#5F252D]" />,
      content:
        lang === "kn" ? (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>ಅಮ್ಮನ ಭರವಸೆ:</strong> ಆಹಾರ ಉತ್ಪನ್ನಗಳ ನೈರ್ಮಲ್ಯದ ದೃಷ್ಟಿಯಿಂದ ತೆರೆದ ಜಾರ್‌ಗಳನ್ನು ಮರಳಿ ಪಡೆಯುವುದಿಲ್ಲ. ಆದರೆ ನಿಮಗೆ ಯಾವುದೇ ಅತೃಪ್ತಿ ಇದ್ದರೆ ಸಂಪೂರ್ಣ ಮರುಪಾವತಿ ಅಥವಾ ಬದಲಿ ನೀಡುತ್ತೇವೆ.
            </p>
            <p>
              • <strong>ಹಾನಿಗೊಳಗಾದ ಪಾರ್ಸೆಲ್:</strong> ಸಾಗಾಣಿಕೆಯಲ್ಲಿ ಯಾವುದೇ ಜಾರ್ ಒಡೆದಿದ್ದರೆ, ೪೮ ಗಂಟೆಗಳ ಒಳಗೆ ಫೋಟೋ ಸಮೇತ ನಮ್ಮ ವಾಟ್ಸಾಪ್‌ಗೆ ತಿಳಿಸಿ, ತಕ್ಷಣವೇ ಹೊಸ ಪಾರ್ಸೆಲ್ ಕಳಿಸಲಾಗುವುದು.
            </p>
            <p>
              • <strong>ತ್ವರಿತ ಪರಿಹಾರ:</strong> ಯಾವುದೇ ಜಗಳವಿಲ್ಲದೆ ೨೪ ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮ ಯುಪಿಐ ಖಾತೆಗೆ ಮರುಪಾವತಿ ಮಾಡಲಾಗುತ್ತದೆ.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>Food Safety Standard:</strong> Perishable artisanal food items cannot be physically returned once opened. However, our satisfaction guarantee protects every purchase.
            </p>
            <p>
              • <strong>Transit Damage Protection:</strong> If any jar arrives broken or unsealed, send a photo to our WhatsApp kitchen door within 48 hours. We dispatch an immediate replacement at zero cost.
            </p>
            <p>
              • <strong>Prompt Refunds:</strong> Approved refund requests are credited directly back to your source UPI/Card within 24–48 banking hours.
            </p>
          </div>
        ),
    },
    terms: {
      title: lang === "kn" ? "ನಿಯಮಗಳು ಮತ್ತು ಗೌಪ್ಯತೆ (Terms & Privacy)" : "Terms & Privacy Policy",
      icon: <ShieldCheck className="w-5 h-5 text-[#5F252D]" />,
      content:
        lang === "kn" ? (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>ಶುದ್ಧತೆಯ ಗ್ಯಾರಂಟಿ:</strong> ನಮ್ಮ ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು ೧೦೦% ನೈಸರ್ಗಿಕವಾಗಿದ್ದು, ಕೃತಕ ಬಣ್ಣ, ರಾಸಾಯನಿಕ ಸಂರಕ್ಷಕಗಳು ಅಥವಾ ಸುವಾಸನೆಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ.
            </p>
            <p>
              • <strong>ಡೇಟಾ ಗೌಪ್ಯತೆ:</strong> ನಿಮ್ಮ ವಿಳಾಸ ಮತ್ತು ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಕೇವಲ ಪಾರ್ಸೆಲ್ ತಲುಪಿಸಲು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ಮಾಹಿತಿ ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ.
            </p>
            <p>
              • <strong>ಚಂದಾದಾರಿಕೆ ರದ್ದತಿ:</strong> ಮಾಸಿಕ ಚಂದಾದಾರಿಕೆಗಳನ್ನು ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕವಿಲ್ಲದೆ ಯಾವಾಗ ಬೇಕಾದರೂ ನಿಲ್ಲಿಸಬಹುದು ಅಥವಾ ದಿನಾಂಕ ಬದಲಾಯಿಸಬಹುದು.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>100% Purity Guarantee:</strong> Prepared strictly with zero artificial preservatives, zero added chemical colorings, and zero industrial flavor enhancers.
            </p>
            <p>
              • <strong>Strict Privacy:</strong> Your delivery address and phone number are used strictly to fulfill your kitchen box. We do not sell or share customer contact data.
            </p>
            <p>
              • <strong>Subscription Flexibility:</strong> Monthly subscriptions can be paused, skipped, or cancelled at any time with no lock-in penalties.
            </p>
          </div>
        ),
    },
    contact: {
      title: lang === "kn" ? "ಸಂಪರ್ಕ ಮತ್ತು ಬೆಂಬಲ (Kitchen Support)" : "Contact & Kitchen Support",
      icon: <HelpCircle className="w-5 h-5 text-[#5F252D]" />,
      content:
        lang === "kn" ? (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>ದಾವಣಗೆರೆ ಅಡುಗೆಮನೆ:</strong> ಖಾದ್ಯಂ ಫುಡ್ಸ್, ಹದಡಿ ರಸ್ತೆ, ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ - ೫೭೭೦೦೨.
            </p>
            <p>
              • <strong>ನೇರ ವಾಟ್ಸಾಪ್ ಸಹಾಯ:</strong> +91 98765 43210 (ಸೋಮವಾರದಿಂದ ಭಾನುವಾರ, ಬೆಳಗ್ಗೆ ೮ ರಿಂದ ರಾತ್ರಿ ೮).
            </p>
            <p>
              • <strong>ಇಮೇಲ್:</strong> kitchen@khaadyam.com
            </p>
            <p>
              • <strong>ಬಲ್ಕ್ ಮತ್ತು ಸಮಾರಂಭಗಳ ಆರ್ಡರ್:</strong> ಮದುವೆ ಮತ್ತು ಹಬ್ಬದ ಉಡುಗೊರೆ ಬುಟ್ಟಿಗಳಿಗೆ ಕಸ್ಟಮ್ ಲೇಬಲ್‌ಗಳೊಂದಿಗೆ ಪ್ಯಾಕಿಂಗ್ ವ್ಯವಸ್ಥೆ ಇದೆ.
            </p>
          </div>
        ) : (
          <div className="space-y-3 text-xs md:text-sm text-[#5A5048] leading-relaxed">
            <p>
              • <strong>Kitchen Address:</strong> Khaadyam Foods, Hadadi Road, Davangere, Karnataka 577002.
            </p>
            <p>
              • <strong>Direct WhatsApp Support:</strong> +91 98765 43210 (Available Mon–Sun, 8 AM – 8 PM IST).
            </p>
            <p>
              • <strong>Email:</strong> kitchen@khaadyam.com
            </p>
            <p>
              • <strong>Wedding & Corporate Gifting:</strong> Bespoke handwritten gift boxes with brass spoons available for bulk reservations.
            </p>
          </div>
        ),
    },
  };

  return (
    <footer className="w-full bg-[#5F252D] text-[#F4EFE6] px-6 md:px-12 pt-16 pb-12 border-t border-[#76303B]">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-14">
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column: Enhanced with larger logo and clear divider for 'Did you eat?' */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image
                src="/logo.png"
                alt="Khaadyam Logo"
                width={64}
                height={44}
                className="h-12 w-auto object-contain brightness-0 invert opacity-95 transition-transform group-hover:scale-105"
              />
              <span className="font-serif-brand text-3xl md:text-4xl tracking-tight text-[#F4EFE6]">
                {lang === "kn" ? "ಖಾದ್ಯಂ" : "khaadyam"}<span className="text-[#F4EFE6]">.</span>
              </span>
            </Link>

            <p className="text-sm text-[#D9C3C0] max-w-sm leading-relaxed">
              {lang === "kn"
                ? "ನಿಮ್ಮ ಮನೆಯು ಉಳಿಸಿಕೊಂಡ ಅಸಲಿ ರುಚಿ. ದಾವಣಗೆರೆಯ ಪಾರಂಪರಿಕ ಅಡುಗೆಮನೆಯಿಂದ ತಯಾರಾದ ತಾಜಾ ಪದಾರ್ಥಗಳು."
                : "The taste your home kept. Regional Karnataka food heritage from Davangere home-kitchens, stone-ground with zero industrial shortcuts."}
            </p>

            {/* Deliberate, Heartfelt Brand Sign-off with Horizontal Divider */}
            <div className="pt-5 mt-2 border-t border-[#76303B]/80 flex flex-col gap-1">
              <span className="text-2xl md:text-3xl text-[#F4EFE6] block font-serif-brand tracking-tight">
                {lang === "kn" ? "ಊಟ ಆಯ್ತಾ?" : "Did you eat?"}
              </span>
              <span className="text-xs text-[#D9C3C0] italic leading-relaxed">
                {lang === "kn"
                  ? "(ಪ್ರತಿಯೊಂದು ಭಾರತೀಯ ಮನೆಯನ್ನು ಕಟ್ಟಿದ ಅಕ್ಕರೆಯ ಮಾತು.)"
                  : "(The greeting that built every Indian home.)"}
              </span>
            </div>
          </div>

          {/* Col 1: Shop */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] pb-1">
              {lang === "kn" ? "ಅಂಗಡಿ" : "Shop"}
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#F4EFE6]/70">
              <li>
                <Link href="/#shop" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ತಟ್ಟೆಯಂತೆ (ಕ್ಯುರೇಟೆಡ್ ಊಟ)" : "By Meal (Curated moments)"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ವಿಭಾಗದಂತೆ (೮ ವಿಭಾಗಗಳು)" : "By Category (The 8 families)"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಚಟ್ನಿ ಪುಡಿಗಳು" : "Chutney Pudis"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಭರಣಿ ಉಪ್ಪಿನಕಾಯಿ" : "Earthen Bharani Pickles"}
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಸಂಡಿಗೆ ಮತ್ತು ಹಪ್ಪಳ" : "Sun-dried Sandige"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Subscriptions */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] pb-1">
              {lang === "kn" ? "ಚಂದಾದಾರಿಕೆ" : "Subscribe"}
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#F4EFE6]/70">
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಸಿದ್ಧಪಡಿಸಿದ ತಿಂಗಳ ಪೆಟ್ಟಿಗೆ" : "Ready-made monthly boxes"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ನಿಮ್ಮದೇ ಪಟ್ಟಿ ತಯಾರಿಸಿ" : "Build your own custom list"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಹೆಜ್ಜೆ ಗುರುತು (The Step)" : "The Step (Tenure tracker)"}
                </Link>
              </li>
              <li>
                <Link href="/#subscribe" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಯುಪಿಐ ಆಟೋಪೇ ಮ್ಯಾಂಡೇಟ್" : "UPI AutoPay e-Mandate"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen & Story */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] pb-1">
              {lang === "kn" ? "ದಾವಣಗೆರೆ ಪರಂಪರೆ" : "Heritage"}
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#F4EFE6]/70">
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ನಮ್ಮ ಪರಂಪರೆ ಮತ್ತು ಕಥೆ" : "Our heritage recipes"}
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಮಣ್ಣಿನಿಂದ ತಟ್ಟೆಯವರೆಗೆ" : "Soil to plate circle"}
                </Link>
              </li>
              <li>
                <Link href="/#memory-wall" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ನೆನಪಿನ ಗೋಡೆ" : "The Memory Wall"}
                </Link>
              </li>
              <li>
                <Link href="/gift-a-basket" className="hover:text-white transition-colors duration-150">
                  {lang === "kn" ? "ಉಡುಗೊರೆ ಬುಟ್ಟಿ ಬಡಿಸಿ" : "Gift a Basket"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Assistance & Legal Policies */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FAF9F5] pb-1">
              {lang === "kn" ? "ಸಹಾಯ ಮತ್ತು ನಿಯಮಗಳು" : "Assistance"}
            </span>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#F4EFE6]/70">
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicy("shipping")}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  {lang === "kn" ? "ವಿತರಣಾ ನೀತಿ" : "Shipping & Delivery Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicy("returns")}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  {lang === "kn" ? "ಹಿಂತಿರುಗಿಸುವ ಮತ್ತು ಮರುಪಾವತಿ" : "Returns & Refund Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicy("terms")}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  {lang === "kn" ? "ನಿಯಮಗಳು ಮತ್ತು ಗೌಪ್ಯತೆ" : "Terms & Privacy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePolicy("contact")}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer"
                >
                  {lang === "kn" ? "ಸಂಪರ್ಕ ಮತ್ತು ಬೆಂಬಲ" : "Contact / Support"}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar with Divider Line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-[#D9C3C0]">
          {/* Copyright & Location */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
            <span>© 2026 Khaadyam Foods Private Limited.</span>
            <span className="opacity-40">·</span>
            <span>Davangere & Bengaluru, Karnataka.</span>
          </div>

          {/* WhatsApp Kitchen Door as Distinct High-Value CTA Pill */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Namaskara%20Amma%27s%20kitchen%20team!%20I%20have%20a%20question%20about%20Khaadyam."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#FAF9F5] border border-[#25D366]/40 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-xs flex items-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>{lang === "kn" ? "ವಾಟ್ಸಾಪ್ ಅಡುಗೆಮನೆ ಬಾಗಿಲು" : "WhatsApp Kitchen Door"}</span>
              <span className="text-[10px] opacity-75 font-normal">
                {lang === "kn" ? "· ನೇರ ಸಹಾಯ" : "· Direct Amma Support"}
              </span>
            </a>

            <span className="hidden sm:inline opacity-40">·</span>
            <span className="hidden sm:inline text-[#EADCD8]/70">
              {lang === "kn" ? "ಅಮ್ಮನ ಅಸಲಿ ಪಾಕವಿಧಾನಗಳು." : "All recipes kept by Amma."}
            </span>
          </div>
        </div>
      </div>

      {/* Operational Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] text-[#1D1A17] border border-[#D9CFBF] w-full max-w-lg rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#E9DFCE] text-[#1D1A17] hover:bg-[#5F252D] hover:text-[#F4EFE6] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-[#D9CFBF]/70 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#5F252D]/10 flex items-center justify-center shrink-0">
                {policyContent[activePolicy].icon}
              </div>
              <h3 className="font-serif-brand text-2xl text-[#1D1A17]">
                {policyContent[activePolicy].title}
              </h3>
            </div>

            <div>{policyContent[activePolicy].content}</div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="bg-[#5F252D] text-[#F4EFE6] hover:bg-[#461920] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
              >
                {lang === "kn" ? "ಮುಚ್ಚಿ" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
