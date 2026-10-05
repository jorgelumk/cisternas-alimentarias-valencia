import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Cisternas Alimentarias Valencia - Inicio">
      <div className="w-11 h-11 bg-gradient-to-br from-navy-900 via-navy-800 to-brand-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-brand-500/30 transition-all border border-white/10 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7">
          <defs>
            <linearGradient id="logoTankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0"/>
              <stop offset="50%" stopColor="#FFFFFF"/>
              <stop offset="100%" stopColor="#94A3B8"/>
            </linearGradient>
            <linearGradient id="logoAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFAB00"/>
              <stop offset="100%" stopColor="#FF8F00"/>
            </linearGradient>
          </defs>
          <rect width="512" height="512" rx="128" fill="#0B1B3D"/>
          <path d="M100 320 V 220 H 170 L 220 260 V 320 Z" fill="#FFFFFF"/>
          <path d="M175 230 H 165 V 260 H 208 Z" fill="#0B1B3D"/>
          <rect x="230" y="200" width="180" height="120" rx="45" fill="url(#logoTankGrad)"/>
          <path d="M320 230 C 320 230, 300 255, 300 270 A 20 20 0 0 0 340 270 C 340 255, 320 230, 320 230 Z" fill="url(#logoAccentGrad)"/>
          <circle cx="140" cy="335" r="30" fill="#1E293B"/>
          <circle cx="140" cy="335" r="14" fill="#94A3B8"/>
          <circle cx="270" cy="335" r="30" fill="#1E293B"/>
          <circle cx="270" cy="335" r="14" fill="#94A3B8"/>
          <circle cx="340" cy="335" r="30" fill="#1E293B"/>
          <circle cx="340" cy="335" r="14" fill="#94A3B8"/>
          <circle cx="390" cy="335" r="30" fill="#1E293B"/>
          <circle cx="390" cy="335" r="14" fill="#94A3B8"/>
        </svg>
      </div>
      <div>
        <span className={`block text-lg font-black tracking-tight leading-none ${variant === "light" ? "text-white" : "text-navy-900 group-hover:text-brand-500"} transition-colors`}>
          Cisternas Alimentarias
        </span>
        <span className="block text-[11px] font-extrabold tracking-widest text-brand-500 uppercase mt-0.5">
          Valencia · Operador Logístico
        </span>
      </div>
    </Link>
  );
}
