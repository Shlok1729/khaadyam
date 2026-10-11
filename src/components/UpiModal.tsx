"use client";

import React, { useState } from "react";
import { useKhaadyam } from "@/context/KhaadyamContext";
import { X, CheckCircle2, ShieldCheck, QrCode, Smartphone, Copy, Check } from "lucide-react";

export function UpiModal() {
  const {
    isUpiModalOpen,
    setIsUpiModalOpen,
    plateTotal,
    plateItems,
    clearPlate,
    setIsPlateOpen,
  } = useKhaadyam();

  const [paymentStep, setPaymentStep] = useState<"pay" | "verifying" | "success">("pay");
  const [copied, setCopied] = useState(false);

  if (!isUpiModalOpen) return null;

  const upiId = "khaadyam.foods@okhdfcbank";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePayment = () => {
    setPaymentStep("verifying");
    setTimeout(() => {
      setPaymentStep("success");
      clearPlate();
    }, 2500);
  };

  const handleClose = () => {
    setIsUpiModalOpen(false);
    setPaymentStep("pay");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF9F5] border border-[#D9CFBF] w-full max-w-md rounded-3xl p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E9DFCE] text-[#1D1A17] hover:bg-[#5F252D] hover:text-[#F4EFE6] transition-smooth cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {paymentStep === "pay" && (
          <>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5F252D] mb-1">
                <Smartphone className="w-4 h-4" />
                <span>UPI Direct Door</span>
              </div>
              <h3 className="font-serif-brand text-2xl text-[#1D1A17]">
                Pay with any UPI App
              </h3>
              <p className="text-xs text-[#5A5048] mt-1">
                Opens directly in your banking app. Zero passwords or account creation needed.
              </p>
            </div>

            {/* Total Display */}
            <div className="bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#6B6157]">Amount to pay:</span>
                <div className="font-serif-brand text-3xl font-semibold text-[#5F252D]">
                  ₹{plateTotal}
                </div>
              </div>
              <span className="text-xs bg-[#E9DFCE] text-[#5F252D] px-2.5 py-1 rounded-full font-medium">
                Instant UPI Plate
              </span>
            </div>

            {/* QR Code Graphic Simulation */}
            <div className="flex flex-col items-center justify-center p-6 bg-white border border-[#D9CFBF] rounded-2xl gap-3">
              <div className="w-44 h-44 bg-[#FAF9F5] border-2 border-dashed border-[#5F252D]/40 rounded-xl flex flex-col items-center justify-center p-2 relative">
                {/* SVG QR Code Pattern Mock */}
                <svg viewBox="0 0 100 100" className="w-36 h-36 text-[#1D1A17] fill-current">
                  <path d="M10 10h30v30h-30z M15 15v20h20v-20z M20 20h10v10h-10z M60 10h30v30h-30z M65 15v20h20v-20z M70 20h10v10h-10z M10 60h30v30h-30z M15 65v20h20v-20z M20 70h10v10h-10z M45 10h10v20h-10z M45 40h10v10h-10z M10 45h20v10h-20z M40 60h10v30h-10z M60 45h30v10h-30z M60 60h20v10h-20z M80 70h10v20h-10z M60 80h15v10h-15z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#5F252D] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    KHAADYAM
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-[#6B6157]">
                Scan with GPay, PhonePe, Paytm, or BHIM
              </span>
            </div>

            {/* UPI ID Copy */}
            <div className="flex items-center justify-between p-3 bg-[#E9DFCE]/60 rounded-xl text-xs">
              <span className="font-mono text-[#1D1A17] font-semibold">{upiId}</span>
              <button
                onClick={handleCopyUpi}
                className="flex items-center gap-1 text-[#5F252D] font-bold hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy UPI ID"}</span>
              </button>
            </div>

            {/* Complete Payment Button */}
            <button
              onClick={handleSimulatePayment}
              className="w-full bg-[#5F252D] hover:bg-[#461920] text-[#F4EFE6] py-3.5 rounded-full text-sm font-semibold transition-smooth shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#C99436]" />
              <span>I have completed UPI transfer (₹{plateTotal})</span>
            </button>
          </>
        )}

        {paymentStep === "verifying" && (
          <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-14 h-14 border-4 border-[#C99436] border-t-transparent rounded-full animate-spin" />
            <div className="flex flex-col gap-1">
              <h4 className="font-serif-brand text-2xl text-[#1D1A17]">
                Verifying UPI Payment...
              </h4>
              <p className="text-xs text-[#5A5048]">
                Connecting with NPCI & Banking gateway webhook
              </p>
            </div>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#506D41]/10 flex items-center justify-center text-[#506D41]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-kannada text-2xl text-[#5F252D]">
                ಊಟ ತಯಾರಾಗಿದೆ!
              </span>
              <h4 className="font-serif-brand text-3xl text-[#1D1A17]">
                Your plate is confirmed!
              </h4>
              <p className="text-xs text-[#5A5048] max-w-xs mt-1">
                Amma's kitchen team in Davangere has received your plate. Freshly ground packs will be dispatched shortly.
              </p>
            </div>

            <div className="w-full p-4 bg-[#FBF8F2] border border-[#E2D9CA] rounded-2xl text-xs text-left space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#6B6157]">Order Number:</span>
                <span className="font-mono font-bold text-[#1D1A17]">#KDY-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6157]">Payment Status:</span>
                <span className="text-[#506D41] font-bold">UPI Verified (₹{plateTotal})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6157]">Tracking updates:</span>
                <span className="text-[#1D1A17]">Sent to your phone</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-[#5F252D] text-[#F4EFE6] py-3.5 rounded-full text-sm font-semibold transition-smooth hover:bg-[#461920] cursor-pointer mt-2"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
