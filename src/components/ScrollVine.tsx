"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface VineNode {
  id: string;
  x: number;
  y: number;
  angle: number;
  scale: number;
  threshold: number; // scroll progress 0 to 1 at which this leaf blooms
  isTendril?: boolean;
}

const VINE_NODES: VineNode[] = [
  { id: "leaf-1", x: 26, y: 70, angle: -35, scale: 0.9, threshold: 0.05 },
  { id: "leaf-2", x: 34, y: 110, angle: 40, scale: 0.85, threshold: 0.09 },
  { id: "tendril-1", x: 18, y: 155, angle: -60, scale: 0.8, threshold: 0.14, isTendril: true },
  { id: "leaf-3", x: 28, y: 190, angle: -30, scale: 1.0, threshold: 0.18 },
  { id: "leaf-4", x: 42, y: 240, angle: 45, scale: 0.95, threshold: 0.23 },
  { id: "leaf-5", x: 22, y: 295, angle: -45, scale: 0.9, threshold: 0.28 },
  { id: "tendril-2", x: 45, y: 350, angle: 65, scale: 0.85, threshold: 0.34, isTendril: true },
  { id: "leaf-6", x: 30, y: 395, angle: -35, scale: 1.05, threshold: 0.39 },
  { id: "leaf-7", x: 40, y: 450, angle: 40, scale: 0.9, threshold: 0.44 },
  { id: "leaf-8", x: 20, y: 510, angle: -40, scale: 1.0, threshold: 0.50 },
  { id: "tendril-3", x: 22, y: 565, angle: -55, scale: 0.85, threshold: 0.56, isTendril: true },
  { id: "leaf-9", x: 42, y: 615, angle: 45, scale: 1.1, threshold: 0.62 },
  { id: "leaf-10", x: 25, y: 680, angle: -35, scale: 0.95, threshold: 0.68 },
  { id: "leaf-11", x: 44, y: 740, angle: 40, scale: 1.0, threshold: 0.74 },
  { id: "tendril-4", x: 45, y: 805, angle: 60, scale: 0.85, threshold: 0.80, isTendril: true },
  { id: "leaf-12", x: 24, y: 860, angle: -40, scale: 0.95, threshold: 0.86 },
  { id: "leaf-13", x: 38, y: 920, angle: 35, scale: 0.9, threshold: 0.91 },
  { id: "bud-terminal", x: 32, y: 975, angle: 5, scale: 1.15, threshold: 0.96 },
];

export function ScrollVine() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const stemPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(1200);

  useEffect(() => {
    if (stemPathRef.current) {
      const len = stemPathRef.current.getTotalLength();
      if (len > 0) setPathLength(len);
    }

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const rawProgress = window.scrollY / scrollHeight;
        setProgress(Math.min(1, Math.max(0, rawProgress)));
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [pathname]);

  // Calculate stem stroke dash offset
  const stemOffset = pathLength * (1 - Math.min(1, progress * 1.05));

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 pointer-events-none z-20 overflow-hidden select-none"
    >
      <svg
        viewBox="0 0 75 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-45 transition-opacity duration-500"
        preserveAspectRatio="xMinYMin meet"
      >
        {/* Main Growing Vine Stem */}
        <path
          ref={stemPathRef}
          d="M 28,0 
             C 36,40 18,80 26,120 
             C 34,160 46,200 36,250 
             C 28,300 16,340 28,400 
             C 42,460 46,520 28,580 
             C 14,640 22,700 36,760 
             C 46,820 22,880 28,930 
             C 34,970 30,995 32,1000"
          stroke="#5F252D"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={stemOffset}
          style={{
            transition: "stroke-dashoffset 0.15s ease-out",
          }}
        />

        {/* Botanical Leaves & Tendril Spirals (Bloom as scroll passes their threshold) */}
        {VINE_NODES.map((node) => {
          const isBloomed = progress >= node.threshold;
          // Scale from 0 to 1 with quick smooth spring as scroll passes
          const growthFactor = isBloomed
            ? Math.min(1, (progress - node.threshold) / 0.04)
            : 0;
          const currentScale = node.scale * growthFactor;

          if (growthFactor <= 0.01) return null;

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y}) scale(${currentScale}) rotate(${node.angle})`}
              style={{
                transformOrigin: "0 0",
                transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {node.isTendril ? (
                /* Delicate Tendril Spiral (ಸುರುಳಿ) */
                <path
                  d="M 0,0 C 8,-6 14,-4 15,2 C 16,8 9,12 5,8 C 2,5 6,1 9,3"
                  stroke="#5F252D"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              ) : node.id === "bud-terminal" ? (
                /* Terminal Heritage Sprout Bud */
                <g>
                  <circle cx="0" cy="0" r="3.5" fill="#5F252D" />
                  <path
                    d="M 0,-3.5 C -4,-10 0,-14 0,-14 C 0,-14 4,-10 0,-3.5 Z"
                    fill="#5F252D"
                  />
                </g>
              ) : (
                /* Organic Curry Leaf (ಕರಿಬೇವು ಎಲೆ) with Central Vein */
                <g>
                  {/* Leaf Body */}
                  <path
                    d="M 0,0 C 9,-7 20,-5 24,4 C 18,7 8,6 0,0 Z"
                    fill="#5F252D"
                    fillOpacity="0.22"
                    stroke="#5F252D"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Subtle Leaf Rib/Vein */}
                  <path
                    d="M 0,0 C 8,-1 16,1 23,3.5"
                    stroke="#5F252D"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Tiny Leaf Stemlet */}
                  <path
                    d="M 0,0 C -3,2 -6,3 -8,4"
                    stroke="#5F252D"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
