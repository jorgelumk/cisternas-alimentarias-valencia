import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Truck, Droplets, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Transporte de Agua Potable en Camión Cisterna | Valencia",
  description:
    "Transporte de agua potable garantizada para consumo humano con registro sanitario. Suministro urgente a ayuntamientos, industrias, granjas y obras.",
};

const faqs = [
  {
    question: "¿El agua potable entregada cumple con el Real Decreto 3/2023 de consumo humano?",
    answer:
      "Sí. El agua proviene exclusivamente de puntos de red clorados y analizados de forma continua. Entregamos el certificado de potabilidad y medición de cloro libre residual en cada suministro.",
  },
  {
    question: "¿Tienen mangueras sanitarias de suficiente longitud para accesos difíciles?",
    answer:
      "Contamos con más de 100 metros de manguera sanitaria alimentaria de alta presión e impulsión por motobomba para acceder a depósitos elevados, obras o zonas rurales.",
  },
  {
    question: "¿Qué capacidad de litros se puede contratar en un único porte?",
    answer:
      "Desde 10.000 litros en cubas rígidas de 3 ejes para accesos estrechos urbanos hasta 30.000 litros en semirremolques de gran capacidad.",
  },
];

export default function TransporteAguaPotablePage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de agua potable en camión cisterna"
        subtitle="Suministro garantizado de agua apta para consumo humano con registro sanitario para ayuntamientos, industria agroalimentaria, obras y cortes urgentes en Valencia."
        badges={["Registro Sanitario RD 3/2023", "Consumo Humano", "Urgencias 24h"]}
        imageUrl="/images/spanish_water_tanker_pool.jpg"
        imageAlt="Cisterna blanca de agua potable abasteciendo a un pueblo en Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Agua Potable" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Suministro de agua potable rápido y certificado para cualquier eventualidad
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de agua potable en cisterna</strong> es un servicio crítico para garantizar el abastecimiento ininterrumpido en municipios, polígonos industriales, explotaciones ganaderas y sector eventos. En Cisternas Alimentarias Valencia garantizamos agua 100 % clorada, limpia e inocua transportada en cisternas inoxidables de uso exclusivo para agua de consumo humano.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <span className="font-extrabold text-brand-500 text-lg block">Ayuntamientos & Cortes</span>
            <p className="text-text-600 text-xs">Abastecimiento de emergencia por averías de red municipal o periodos de sequía.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <span className="font-extrabold text-brand-500 text-lg block">Industria Alimentaria</span>
            <p className="text-text-600 text-xs">Agua de proceso limpia para calderas, lavado de producto y depósitos de reserva.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <span className="font-extrabold text-brand-500 text-lg block">Obras & Eventos</span>
            <p className="text-text-600 text-xs">Llenado de aljibes provisionales, baños sanitarios y pruebas de estanqueidad.</p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Suministro de Agua Potable" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
