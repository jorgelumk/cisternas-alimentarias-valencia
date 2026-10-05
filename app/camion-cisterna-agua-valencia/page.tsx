import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Truck, Droplets, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Camión Cisterna de Agua en Valencia | Cuba de Agua",
  description:
    "Alquiler y servicio de camión cisterna de agua y cubas de agua en Valencia. Cubas rígidas de 10.000L a 30.000L. Servicio rápido y presupuesto sin compromiso.",
};

const faqs = [
  {
    question: "¿Cuánto tarda en llegar un camión cisterna de agua en Valencia?",
    answer:
      "Para emergencias en la provincia de Valencia (Paterna, Torrent, Sagunto, Alzira, Gandia), disponemos de posicionamiento en menos de 2 a 4 horas previa confirmación telefónica.",
  },
  {
    question: "¿Qué precio tiene una cuba de agua en Valencia?",
    answer:
      "El precio varía según el volumen (10.000, 15.000 o 30.000 litros), la distancia desde nuestra base y la dificultad de acceso para la descarga. Contacta para un presupuesto exacto sin compromiso.",
  },
  {
    question: "¿Es apta el agua para consumo humano o solo para riego/piscinas?",
    answer:
      "Toda nuestra agua es 100 % potable con registro sanitario. Puede utilizarse indiferentemente para consumo, piscinas, riego de jardines u obras.",
  },
];

export default function CamionCisternaAguaValenciaPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Camión cisterna de agua y cuba de agua en Valencia"
        subtitle="Servicio de abastecimiento directo de agua limpia en camión cuba rígido o semirremolque en Valencia capital y municipios de la provincia."
        badges={["Valencia & Provincia", "Cubas de 10.000 L a 30.000 L", "Servicio Express"]}
        imageUrl="/images/spanish_water_tanker_pool.jpg"
        imageAlt="Camión cuba de agua en urbanización mediterránea en Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Cuba de Agua Valencia" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Alquiler de camión cuba de agua con conductor en Valencia
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            Si buscas un <strong>camión cisterna de agua en Valencia</strong> o una <strong>cuba de agua</strong> para resolver un desabastecimiento puntual, llenar un depósito o realizar trabajos de riego y limpieza, en Cisternas Alimentarias Valencia te ofrecemos la máxima agilidad. Contamos con vehículos adaptados para circular por calles estrechas de urbanizaciones o polígonos industriales de toda la Huerta de Valencia, Camp de Túria, Ribera Alta/Baixa y Safor.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-2xl font-extrabold text-brand-500">10.000 Litros</span>
            <span className="block font-bold text-navy-900 text-xs">Cuba Rígida 2 Ejes</span>
            <p className="text-slate-500 text-xs">Ideal para chalets, calles estrechas y urbanizaciones.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-2xl font-extrabold text-brand-500">15.000 Litros</span>
            <span className="block font-bold text-navy-900 text-xs">Cuba Rígida 3 Ejes</span>
            <p className="text-slate-500 text-xs">Equilibrio perfecto entre capacidad y maniobrabilidad.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-2xl font-extrabold text-brand-500">30.000 Litros</span>
            <span className="block font-bold text-navy-900 text-xs">Semirremolque Cisterna</span>
            <p className="text-slate-500 text-xs">Máxima capacidad para grandes depósitos e industrias.</p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Camiones Cisterna de Agua en Valencia" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
