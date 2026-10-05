import React from "react";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Pide Presupuesto de Transporte en Cisterna | Valencia",
  description: "Solicita tu presupuesto de transporte de líquidos alimentarios o agua potable en cisterna. Cotización gratuita en menos de 2 horas laborables.",
};

export default function PresupuestoPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-accent-route" />
          Respuesta en &lt; 2 Horas Laborables
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Solicitar Presupuesto de Transporte en Cisterna
        </h1>
        <p className="text-text-600 text-sm max-w-xl mx-auto">
          Indícanos los datos de tu carga, origen, destino y fecha estimada. Te responderemos con la mejor opción de flota e importe cerrado.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-25 p-6 rounded-2xl border border-border-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <span className="font-extrabold text-navy-900 text-sm block">¿Tienes una urgencia de transporte para hoy o mañana?</span>
            <span className="text-text-600 text-xs">Atención telefónica comercial inmediata en horario laborable.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+34960731206" className="bg-navy-900 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-brand-500 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-accent-route" />
              <span>960 73 12 06</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
