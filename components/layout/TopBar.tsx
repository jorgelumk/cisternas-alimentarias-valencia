import { Phone, MessageSquare, ShieldCheck } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-slate-200">
          <span className="flex items-center gap-1.5 font-medium text-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-route" />
            Certificados ATP & Registro Sanitario RGSEAA
          </span>
          <span className="hidden lg:inline text-slate-400">|</span>
          <span className="hidden lg:inline text-slate-300">
            Transporte de líquidos alimentarios a granel desde Valencia a toda España y Francia
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34960731206"
            className="flex items-center gap-1.5 hover:text-blue-300 transition-colors font-semibold"
            aria-label="Llamar a Cisternas Alimentarias Valencia"
          >
            <Phone className="w-3.5 h-3.5 text-accent-route" />
            <span>+34 960 73 12 06</span>
          </a>
          <a
            href="https://wa.me/34960731206?text=Hola,%20solicito%20presupuesto%20para%20transporte%20de%20l%C3%ADquidos%20en%20cisterna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full transition-colors font-medium"
            aria-label="Contactar por WhatsApp"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
