import React from "react";
import Link from "next/link";
import { Truck, Home, PhoneCall, ArrowRight, ShieldCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
          <Truck className="w-10 h-10" />
        </div>
        
        <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase block mb-2">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Página No Encontrada
        </h1>

        <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
          Lo sentimos, la dirección que buscas no existe o ha sido movida. Puedes volver al inicio o consultar nuestros servicios de transporte de líquidos alimentarios.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
          <Link
            href="/transporte-liquidos-alimentarios-valencia/"
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-start space-x-3 group"
          >
            <ShieldCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-600 flex items-center">
                Transporte de Líquidos <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-slate-5-00 text-slate-500">Cisternas inox e isotérmicas ATP</p>
            </div>
          </Link>

          <Link
            href="/transporte-agua-potable-valencia/"
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-start space-x-3 group"
          >
            <Truck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-600 flex items-center">
                Agua Potable & Piscinas <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-slate-500">Suministro urgente en camión cuba</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/presupuesto/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Solicitar Presupuesto</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
