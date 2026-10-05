import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";

export function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-900 border-t border-navy-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
        <a
          href="tel:+34960731206"
          className="flex flex-col items-center justify-center py-2 bg-navy-800 hover:bg-navy-700 text-white rounded-xl transition-colors"
          aria-label="Llamar directamente"
        >
          <Phone className="w-4 h-4 text-accent-route mb-0.5" />
          <span>Llamar</span>
        </a>

        <a
          href="https://wa.me/34960731206?text=Hola,%20quisiera%20pedir%20presupuesto%20para%20transporte%20de%20l%C3%ADquidos%20en%20cisterna"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors"
          aria-label="Enviar mensaje de WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/presupuesto/"
          className="flex flex-col items-center justify-center py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4 text-accent-route mb-0.5" />
          <span>Presupuesto</span>
        </Link>
      </div>
    </div>
  );
}
