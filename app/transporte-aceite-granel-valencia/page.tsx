import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Transporte de Aceite a Granel en Cisterna | Valencia",
  description: "Transporte de aceite de oliva virgen extra y aceites vegetales a granel. Cisternas de acero inoxidable con calefacción por vapor para descargas fluidas.",
};

const faqs = [
  {
    question: "¿Cómo se evita el cuajado del aceite durante el invierno?",
    answer: "Utilizamos cisternas con serpentín de vapor o agua caliente para atemperar el aceite antes de la descarga y mantener su fluidez óptima.",
  }
];

export default function TransporteAceitePage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de aceite a granel en cisterna alimentaria"
        subtitle="Transporte de aceite de oliva, orujo y aceites vegetales entre almazaras, refinadoras y plantas embotelladoras con cisternas Inox calefactadas."
        badges={["Aceite de Oliva", "Calefacción por Vapor", "Inox 316L"]}
        imageUrl="/images/spanish_tanker_truck_wine_olive_oil.jpg"
        imageAlt="Cisterna cargando en almazara rodeada de olivares"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Aceite a Granel" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Solución integral para almazaras e industrias aceiteras</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de aceite a granel</strong> requiere mantener la pureza del virgen extra sin alterar su acidez ni sus polifenoles. Garantizamos lavado sin detergentes agresivos y secado total.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre Transporte de Aceite" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
