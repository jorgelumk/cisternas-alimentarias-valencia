import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Transporte de Zumos, Horchata y Jarabes a Granel",
  description: "Especialistas en transporte de zumos concentrados, horchata valenciana de chufa y jarabes líquidos en cisterna isotérmica con agitación e higiene superior.",
};

const faqs = [
  {
    question: "¿Cómo se transporta la horchata para mantener su estabilidad?",
    answer: "La horchata natural requiere una cisterna isotérmica ATP a 2-4 °C para prevenir la precipitación o fermentación del almidón de la chufa.",
  }
];

export default function ZumosHorchataPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de zumos, horchata y jarabes en cisterna"
        subtitle="Logística para el sector de bebidas valenciano. Zumos de cítricos, horchata fresca de chufa y concentrados en cisterna Inox sanitaria isotérmica."
        badges={["Zumos Cítricos", "Horchata de Chufa", "Jarabes Viscosos"]}
        imageUrl="/images/spanish_juice_horchata_tanker.jpg"
        imageAlt="Cisterna inox en planta de zumos entre naranjos valencianos"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Zumos & Horchata" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Especialistas en la industria de bebidas de la Comunidad Valenciana</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de zumos y horchata</strong> requiere cisternas sanitarias con sistemas de agitación y limpieza bacteriológica completa para garantizar la frescura del producto.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre Zumos y Horchata" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
