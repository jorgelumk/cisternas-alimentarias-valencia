import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Camiones Cisterna de Leche | Transporte Isotérmico",
  description: "Transporte de leche fresca en camiones cisterna isotérmicos con certificado ATP y toma de muestras sanitarias. Recogida en granja y centrales lácteas.",
};

const faqs = [
  {
    question: "¿Qué temperatura se mantiene durante la recogida y traslado de la leche?",
    answer: "Mantenemos la leche cruda refrigerada estrictamente a 4 °C mediante cisternas isotérmicas ATP reforzadas.",
  }
];

export default function TransporteLechePage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de leche en camión cisterna isotérmico"
        subtitle="Recogida y traslado sanitario de leche cruda y derivados lácteos a 4 °C en cisternas de acero inoxidable aisladas con certificado ATP."
        badges={["Leche & Lácteos", "ATP Isotérmico", "Frío a 4 °C"]}
        imageUrl="/images/spanish_milk_tanker_truck.jpg"
        imageAlt="Cisterna isotérmica de leche en granja lechera"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Transporte de Leche" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Servicio lácteo con toma de muestras e inspección continua</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de leche en cisterna</strong> exige máxima rapidez y pulcritud para evitar el incremento de la carga bacteriana. Nuestras cisternas cuentan con agitación suave y colectores homologados.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre Transporte de Leche" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
