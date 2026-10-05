import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Transporte de Líquidos en Castellón | Cisternas",
  description: "Transporte de líquidos en cisterna en la provincia de Castellón. Zumo de cítricos, aguas e industria agroalimentaria por la AP-7.",
};

const faqs = [
  {
    question: "¿Tienen cobertura directa con el polígono cerámico y agroalimentario de Castellón?",
    answer: "Sí, conectamos la provincia de Valencia con Castellón de la Plana, Vila-real y Vinaròs en menos de 1 a 2 horas.",
  }
];

export default function CastellonPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de líquidos en cisterna en Castellón"
        subtitle="Solución logística en cisterna Inox alimentaria para la industria agrícola y citrícola de Castellón de la Plana y Plana Baixa."
        badges={["Ruta Castellón", "Sector Cítricos", "AP-7 Directo"]}
        imageUrl="/images/spanish_juice_horchata_tanker.jpg"
        imageAlt="Cisterna alimentaria por la provincia de Castellón entre naranjos"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Rutas", href: "/transporte-de-liquidos/" }, { label: "Castellón" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Agilidad operacional en el corredor de la AP-7</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de líquidos en Castellón</strong> proporciona soporte clave para plantas de zumo, aceite y bebidas.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre la Ruta Castellón" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
