import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Transporte de Líquidos en Alicante | Cisternas Alimentarias",
  description: "Transporte de líquidos alimentarios y vino en Alicante. Cobertura directa desde Valencia hacia Elche, Alcoy, Elda y Vega Baja.",
};

const faqs = [
  {
    question: "¿Cuál es el tiempo de tránsito entre Valencia y Alicante?",
    answer: "Nuestros vehículos conectan la provincia de Valencia con Alicante en 1,5 a 3 horas a través de la autovía A-7 y AP-7.",
  }
];

export default function AlicantePage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de líquidos en cisterna en Alicante"
        subtitle="Servicio diario de transporte de alimentos a granel, vinos de Alicante y zumos para embotelladoras y polígonos industriales alicantinos."
        badges={["Ruta Alicante", "Vinos Alicante D.O.", "Tránsito Express"]}
        imageUrl="/images/spanish_food_tanker_truck_valencia_highway.jpg"
        imageAlt="Cisterna alimentaria en ruta por la costa alicantina"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Rutas", href: "/transporte-de-liquidos/" }, { label: "Alicante" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Cobertura completa para la provincia de Alicante</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de líquidos en Alicante</strong> atiende al sector bebidas, mieles, turrones y almazaras del Vinalopó y Vega Baja.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre la Ruta Alicante" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
