import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Lavado de Cisternas Alimentarias | Valencia",
  description: "Estación de lavado y desinfección de cisternas alimentarias con emisión de certificado ECD / EFTCO. Vaporizado a alta presión y secado de aire estéril.",
};

const faqs = [
  {
    question: "¿Emiten certificado oficial EFTCO de lavado?",
    answer: "Sí, tras la desinfección y vaporizado emitimos el documento ECD (European Cleaning Document) unívoco con el número de precintos de seguridad.",
  }
];

export default function LavadoCisternasPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Lavado de cisternas alimentarias en Valencia"
        subtitle="Limpieza, sanitización y vaporizado a alta presión para cisternas de transporte de alimentos con certificación oficial EFTCO / ECD."
        badges={["Certificado ECD", "Vapor a 100 °C", "Desinfección Sanitaria"]}
        imageUrl="/images/spanish_tanker_wash_station.jpg"
        imageAlt="Estación de lavado de cisternas alimentarias EFTCO en Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Lavado de Cisternas" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Lavadero homologado con cabezales rotativos de alto impacto</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>lavado de cisternas alimentarias</strong> elimina cualquier resto de carga previa, alérgenos y olores mediante detergentes grado alimentario y ciclos de aclarado estéril.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre Lavado de Cisternas" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
