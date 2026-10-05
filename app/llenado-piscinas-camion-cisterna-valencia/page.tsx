import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Sun, Droplets, CheckCircle2, Calculator } from "lucide-react";

export const metadata = {
  title: "Llenado de Piscinas con Camión Cisterna | Valencia",
  description:
    "Llenado de piscinas rápido con camión cisterna de agua tratada en Valencia. Evita averías en la bomba de casa. Pide tu presupuesto de cubas de agua.",
};

const faqs = [
  {
    question: "¿Cuántos litros de agua necesita mi piscina?",
    answer:
      "Una piscina rectangular estándar de 8x4 metros con profundidad media de 1,5 metros requiere 48.000 litros (aprox. 2 viajes de cisterna). Una piscina de 6x3m requiere unos 27.000 litros (1 cisterna de 30.000L).",
  },
  {
    question: "¿Cuánto tiempo se tarda en llenar la piscina con el camión?",
    answer:
      "La descarga de una cisterna completa de 30.000 litros se realiza mediante motobomba impulsora en tan solo 45 a 60 minutos.",
  },
  {
    question: "¿Es mejor llenar la piscina con cisterna que con el grifo de casa?",
    answer:
      "Sí. Llenar con el grifo de casa puede tardar de 3 a 5 días continuos, lo que corre el riesgo de quemar la bomba doméstica, subir de tramo tarifario de agua y dañar el vaso de la piscina por cambios de presión.",
  },
];

export default function LlenadoPiscinasPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Llenado de piscinas con camión cisterna en Valencia"
        subtitle="Llenado express de piscinas residenciales, comunitarias y de chalets con agua clara y limpia sin esperas ni riesgo de avería en tu contador doméstico."
        badges={["Llenado en 1 Hora", "Agua Clorada Limpia", "Mangueras de Gran Longitud"]}
        imageUrl="/images/spanish_water_tanker_pool.jpg"
        imageAlt="Manguera llenando una piscina de chalet con camión cisterna al fondo"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Llenado de Piscinas" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Disfruta de tu piscina llena en menos de 2 horas sin complicaciones
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>llenado de piscinas con camión cisterna</strong> es la solución más rápida, cómoda y segura para poner a punto tu piscina en Valencia. Ya sea una piscina recién construida, una reforma con cambio total de agua o la apertura de temporada en urbanizaciones, nuestro equipo despliega mangueras sanitarias de alta resistencia e impulsa el agua limpia directamente al vaso en cuestión de minutos.
          </p>
        </div>
      </section>

      {/* Pool Volume Calculator Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-500 text-white rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-accent-route" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-navy-900">Guía Orientativa de Medidas y Litros de Piscina</h3>
              <p className="text-slate-500 text-xs">Calcula cuántos viajes de cuba de agua necesitarás para llenar tu piscina.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-blue-25 p-4 rounded-xl border border-blue-50 space-y-1">
              <span className="font-extrabold text-navy-900 text-sm block">Piscina 6 x 3 m (Prof. 1,5m)</span>
              <span className="text-brand-500 font-bold block text-base">27.000 Litros</span>
              <p className="text-slate-600">Requiere 1 cisterna de 30.000L (llenado completo en 1 hora).</p>
            </div>
            <div className="bg-blue-25 p-4 rounded-xl border border-blue-50 space-y-1">
              <span className="font-extrabold text-navy-900 text-sm block">Piscina 8 x 4 m (Prof. 1,5m)</span>
              <span className="text-brand-500 font-bold block text-base">48.000 Litros</span>
              <p className="text-slate-600">Requiere 2 viajes de cisterna (1 semirremolque + 1 cuba rígida).</p>
            </div>
            <div className="bg-blue-25 p-4 rounded-xl border border-blue-50 space-y-1">
              <span className="font-extrabold text-navy-900 text-sm block">Piscina 10 x 5 m (Prof. 1,5m)</span>
              <span className="text-brand-500 font-bold block text-base">75.000 Litros</span>
              <p className="text-slate-600">Requiere 2 a 3 cisternas continuas sin interrumpir el baño.</p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Llenado de Piscinas con Cisterna" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
