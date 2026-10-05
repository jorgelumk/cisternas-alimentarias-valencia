import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Wine, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Transporte de Vino y Mosto a Granel en Cisterna | Valencia",
  description:
    "Especialistas en transporte de vino y mosto a granel en cisternas de acero inoxidable en Valencia. Campaña de vendimia D.O. Utiel-Requena, Valencia y exportación a Francia.",
};

const faqs = [
  {
    question: "¿Cómo gestionan el documento aduanero e-AD para vino a granel?",
    answer:
      "Contamos con amplia experiencia en la tramitación electrónica del documento de acompañamiento e-AD para envíos intracomunitarios de vinos con o sin D.O., agilizando los pasos fronterizos hacia Francia e Italia.",
  },
  {
    question: "¿Tienen bombas de bajo cizallamiento para no alterar el vino?",
    answer:
      "Sí. Empleamos bombas de rodete flexible o lobulares sanitarias de acero inoxidable que realizan el llenado y vaciado a revoluciones controladas sin airear ni maltratar el producto.",
  },
  {
    question: "¿Disponen de flota de refuerzo para los meses de vendimia?",
    answer:
      "Durante los meses de septiembre a noviembre aumentamos nuestra capacidad operativa asignando cisternas en rotación continua entre cooperativas y plantas embotelladoras.",
  },
];

export default function TransporteVinoMostoPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de vino y mosto a granel en cisterna en Valencia"
        subtitle="Solución logística especializada para bodegas, cooperativas y exportadores de vino. Cisternas sanitarias multicompartimento para trasvases e itinerarios internacionales desde Valencia."
        badges={["Vendimia D.O.", "Documento e-AD", "Bombas Suaves Inox"]}
        imageUrl="/images/spanish_tanker_truck_wine_olive_oil.jpg"
        imageAlt="Cisterna inox española cargando vino y mosto a granel en Utiel-Requena Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Vino y Mosto en Valencia" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Logística vitivinícola de precisión desde el viñedo hasta la embotelladora
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de vino a granel</strong> y <strong>mostos</strong> requiere un cuidado extremo para evitar la oxidación prematura, la pérdida de aromas volátiles o la contaminación por levaduras indeseadas. En Cisternas Alimentarias Valencia disponemos de un parque de cisternas inox 316L desinfectadas bajo estrictos protocolos EFTCO y preparadas para trabajar bajo atmósfera inerte de nitrógeno.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Transporte de Vino y Mosto a Granel" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
