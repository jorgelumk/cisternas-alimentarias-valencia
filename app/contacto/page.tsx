import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata = {
  title: "Contacto | Cisternas Alimentarias Valencia",
  description: "Contacta con Cisternas Alimentarias Valencia. Teléfono, email, ubicación de la base logística en Paterna (Valencia) y horario de atención.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Contacto y Localización
        </h1>
        <p className="text-text-600 text-sm max-w-xl mx-auto">
          Estamos a tu disposición para resolver dudas operativas, consultar disponibilidad de cisternas o gestionar presupuestos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-navy-900 text-white p-8 rounded-3xl space-y-6 shadow-xl">
            <h2 className="text-2xl font-extrabold">Información Corporativa</h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-route flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Base Logística & Oficinas:</strong>
                  <span>Polígono Industrial Fuente del Jarro, 46980 Paterna, Valencia (España)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-route flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Teléfono de Atención:</strong>
                  <a href="tel:+34960731206" className="hover:text-white font-bold text-accent-route">+34 960 73 12 06</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">WhatsApp Comercial:</strong>
                  <a href="https://wa.me/34960731206" target="_blank" rel="noopener noreferrer" className="hover:text-white text-emerald-400 font-bold">+34 960 73 12 06</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Correo Electrónico:</strong>
                  <span>info@cisternasalimentariasvalencia.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-route flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-white">Horario de Oficina:</strong>
                  <span>Lunes a Viernes: 08:00 - 19:00 h (Operativa 24h para portes activos)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
