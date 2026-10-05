import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { RouteMap } from "@/components/ui/RouteMap";
import { TechSpecsTabs } from "@/components/ui/TechSpecsTabs";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  Droplets,
  Truck,
  Wine,
  Milk,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";

export const metadata = {
  title: "Transporte de Líquidos en Cisterna | Valencia y España",
  description:
    "Hub principal de transporte de líquidos alimentarios a granel, cisternas isotérmicas ATP y suministro de agua potable. Cobertura nacional e internacional.",
};

const hubFaqs = [
  {
    question: "¿Qué diferencia existe entre el hub de servicios alimentarios y cisternas industriales?",
    answer:
      "Nuestra flota opera exclusivamente bajo código sanitario alimentario. Esto significa que los vehículos nunca han cargado ni cargarán productos químicos, carburantes ni líquidos peligrosos, evitando de raíz cualquier riesgo de contaminación.",
  },
  {
    question: "¿Tienen capacidad para gestionar grandes campañas estacionales?",
    answer:
      "Sí. Contamos con flexibilidad operativa y acuerdos de refuerzo de flota para cubrir picos intensivos de demanda, como la vendimia de vino y mosto en Utiel-Requena y Castilla-La Mancha, o la campaña de cítricos y aceites.",
  },
  {
    question: "¿Cómo se calcula el precio de un transporte en cisterna?",
    answer:
      "El importe se determina en función del volumen total (litros), tipo de producto (requisitos de temperatura o calefactado), distancia kilométrica de la ruta, tiempos de carga/descarga y servicios adicionales como desinfección o análisis.",
  },
];

export default function ServicesHubPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte de líquidos en cisterna: alimentarios, agua y a granel"
        subtitle="Catálogo completo de servicios especializados para la industria agroalimentaria, distribuidores de bebidas, bodegas, ayuntamientos e industrias en Valencia y rutas europeas."
        badges={["Hub de Servicios", "Inox 316L", "Isotérmicas ATP"]}
        imageUrl="/images/spanish_company_tanker_hq.jpg"
        imageAlt="Flota de camiones cisterna de acero inoxidable alimentario"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Hub Transporte de Líquidos" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-accent-route" />
            Catálogo Especializado por Carga
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Nuestras Landings de Servicio Específicas
          </h2>
          <p className="text-text-600 text-base">
            Selecciona la categoría exacta de tu producto para consultar normativas, fichas técnicas y condiciones de transporte.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Líquidos Alimentarios en Cisterna"
            description="Solución principal para materias primas alimentarias líquidas en cisternas Inox sanitaria monocámara o compartimentadas."
            href="/transporte-liquidos-alimentarios/"
            icon={Droplets}
            badge="Alimentario"
          />
          <ServiceCard
            title="Cisterna Isotérmica ATP"
            description="Control estricto de temperatura constante para productos lácteos, zumos refrigerados y líquidos termosensibles."
            href="/transporte-cisterna-isotermica-atp/"
            icon={ShieldCheck}
            badge="Frío & Calor"
          />
          <ServiceCard
            title="Vino y Mosto a Granel"
            description="Transporte de cosechas, varietales y caldos a granel con bombas sanitarias de bajo cizallamiento y documento e-AD."
            href="/transporte-vino-mosto-granel/"
            icon={Wine}
            badge="D.O. Vino"
          />
          <ServiceCard
            title="Transporte de Agua Potable"
            description="Suministro garantizado de agua potable con registro sanitario para consumo humano, ayuntamientos e industria."
            href="/transporte-agua-potable/"
            icon={Truck}
            badge="Registro Sanitario"
          />
          <ServiceCard
            title="Camión Cisterna de Agua Valencia"
            description="Cubas de agua de 10.000 a 30.000 litros para obras, emergencias y suministros locales en la provincia de Valencia."
            href="/camion-cisterna-agua-valencia/"
            icon={Droplets}
            badge="Urgencias 24h"
          />
          <ServiceCard
            title="Llenado de Piscinas"
            description="Abastecimiento rápido de agua clorada para piscinas privadas, comunitarias e instalaciones deportivas."
            href="/llenado-piscinas-camion-cisterna/"
            icon={Sun}
            badge="Servicio Limpio"
          />
          <ServiceCard
            title="Recogida de Leche en Cisterna"
            description="Recogida en granjas e industrias lácteas a 4 °C con toma de muestras y certificado ATP de cisterna isotérmica."
            href="/transporte-leche-cisterna/"
            icon={Milk}
            badge="Fase 2"
          />
          <ServiceCard
            title="Transporte de Aceite a Granel"
            description="Aceite de oliva virgen extra y aceites vegetales en cisternas calefactadas por vapor para descargas fluidas."
            href="/transporte-aceite-granel/"
            icon={Droplets}
            badge="Fase 2"
          />
          <ServiceCard
            title="Zumos, Horchata y Jarabes"
            description="Especialistas en concentrados de cítricos valencianos, chufa y jarabes viscosos con agitación e higiene superior."
            href="/transporte-zumos-horchata-jarabes/"
            icon={Sparkles}
            badge="Fase 2"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RouteMap />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsTabs />
      </section>

      <FaqAccordion items={hubFaqs} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QuoteForm />
      </section>
    </div>
  );
}
