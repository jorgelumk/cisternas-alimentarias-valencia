import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Transporte de Vino y Líquidos en Castilla-La Mancha",
  description: "Transporte de vino y mosto a granel en Castilla-La Mancha. Servicio especial para bodegas de Tomelloso, Alcázar, Valdepeñas y Albacete.",
};

const faqs = [
  {
    question: "¿Tienen cisternas de gran tonelaje para trasvases entre bodegas manchegas?",
    answer: "Sí, disponemos de semirremolques de 30.000 a 33.000 litros ideales para grandes volúmenes de vino y mosto.",
  }
];

export default function CastillaLaManchaPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de vino y líquidos en cisterna en Castilla-La Mancha"
        subtitle="Flota continua de apoyo para el mayor viñedo del mundo. Carga de vinos y mostos en Tomelloso, Valdepeñas, Villarrobledo y Albacete."
        badges={["Ruta La Mancha", "Bodegas D.O.", "Vino & Mosto"]}
        imageUrl="/images/spanish_tanker_truck_wine_olive_oil.jpg"
        imageAlt="Cisterna alimentaria en llanura manchega entre viñedos"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Rutas", href: "/transporte-de-liquidos/" }, { label: "Castilla-La Mancha" }]}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Enlace logístico A-3 y A-31 con el corazón vitivinícola de España</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de vino en Castilla-La Mancha</strong> conecta la producción a granel manchega con el Puerto de Valencia y la exportación hacia Francia.
          </p>
        </div>
      </section>
      <FaqAccordion items={faqs} title="Preguntas sobre la Ruta Castilla-La Mancha" />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
