"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34960731206?text=Hola,%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20y%20presupuesto%20para%20un%20transporte%20en%20cisterna"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp al 960731206"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
    >
      <span className="relative flex h-3 w-3 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
      </span>

      <MessageSquare className="w-6 h-6 fill-current text-white flex-shrink-0" />
      
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-100 leading-none">
          WhatsApp 24h
        </span>
        <span className="text-xs font-black tracking-tight text-white leading-tight">
          960 73 12 06
        </span>
      </div>
    </a>
  );
}
