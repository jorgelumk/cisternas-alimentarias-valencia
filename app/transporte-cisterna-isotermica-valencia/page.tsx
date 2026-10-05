import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { TechSpecsTabs } from "@/components/ui/TechSpecsTabs";
import { ShieldCheck, Thermometer, CheckCircle2, FileCheck, Layers, Droplets } from "lucide-react";

export const metadata = {
  title: "Transporte en Cisterna Isotérmica ATP | Valencia",
  description:
    "Transporte de líquidos a temperatura controlada en cisterna isotérmica con certificado ATP. Control térmico de frío (4 °C) y calor constante hasta 65 °C.",
};

const faqs = [
  {
    question: "¿Qué es el certificado ATP y por qué es obligatorio?",
    answer:
      "El acuerdo ATP (Acuerdo sobre Transportes Internacionales de Mercancías Perecederas) establece las normas para garantizar que los alimentos perecederos mantengan sus condiciones de temperatura durante el tránsito. El certificado acredita que la cisterna tiene el aislamiento suficiente para evitar variaciones térmicas.",
  },
  {
    question: "¿Cómo se registra la temperatura durante el trayecto?",
    answer:
      "Nuestras cisternas cuentan con registradores termográficos calibrados e independientes que miden la temperatura en cada compartimento cada minuto. Al finalizar el servicio, imprimimos el ticket oficial con la gráfica térmica.",
  },
  {
    question: "¿Tienen cisternas calefactadas para productos viscosos como aceites o jarabes?",
    answer:
      "Sí, disponemos de cisternas con sistema de calefacción por serpentín de vapor o agua caliente para mantener la fluidez del producto antes de la descarga.",
  },
];

export default function CisternaIsotermicaAtpPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte en cisterna isotérmica con certificado ATP"
        subtitle="Mantenimiento riguroso de la cadena de frío a 4 °C o calor constante hasta 65 °C con cisternas homologadas e impresor termográfico continuo."
        badges={["Certificado ATP Homologado", "Control Frío/Calor", "Registrador Térmico"]}
        imageUrl="/images/spanish_food_tanker_truck_fleet.jpg"
        imageAlt="Cisterna isotérmica con placa ATP en muelle de carga refrigerado"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Cisterna Isotérmica ATP" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Control térmico de precisión para mercancías alimentarias sensibles
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte en cisterna isotérmica ATP</strong> es indispensable para mantener la estabilidad fisiológica y microbiológica de líquidos que sufren degradación con oscilaciones térmicas. En Cisternas Alimentarias Valencia disponemos de semirremolques isotérmicos reforzados de acero inoxidable aislados con espumas de poliuretano de alta densidad que reducen las pérdidas térmicas a menos de 1 °C por cada 24 horas de trayecto.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsTabs />
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Cisternas Isotérmicas ATP" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
