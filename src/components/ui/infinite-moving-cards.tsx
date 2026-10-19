"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    city?: string;
    relation?: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // Set duration
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      // Set direction (normal for left, reverse for right)
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "normal",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
      setStart(true);
    }
  }, [direction, speed, items]);

  // Render items twice so it continuously and seamlessly loops like a tape
  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      className={cn(
        "group scroller relative z-20 w-full overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]",
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="relative w-[360px] md:w-[460px] max-w-full shrink-0 rounded-2xl border border-[#4A262C] bg-[#2A181A] px-7 py-6 sm:px-8 sm:py-7 shadow-lg select-none flex flex-col justify-between"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <p className="relative z-20 text-[15px] sm:text-base leading-relaxed font-serif-brand italic text-[#FDFBF7]">
                “{item.quote}”
              </p>
              <div className="relative z-20 mt-6 pt-4 border-t border-[#4A262C] flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#F4EFE6] tracking-tight">
                    {item.name}
                  </span>
                  {item.relation && (
                    <span className="text-[11px] text-[#EADCD8]/70 mt-0.5 font-normal">
                      {item.relation}
                    </span>
                  )}
                </div>

                {(item.city || item.title) && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#3D2024] text-[#E3C588] border border-[#582A33] shrink-0 tracking-wide">
                    {item.city || item.title}
                  </span>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
