import React from "react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata = {
  title: "Preguntas Frecuentes sobre Transporte de Cisternas Alimentarias",
  description: "Resolución de todas las preguntas sobre normativas ATP, lavado de cisternas alimentarias, capacidad de agua potable y presupuesto.",
};

const allFaqs = [
  {
    question: "¿Qué garantía existe de que la cisterna no ha cargado químicos?",
    answer: "Nuestra flota es de uso exclusivo alimentario. Garantizamos por contrato que nunca ha transportado mercancías peligrosas o industriales.",
  },
  {
    question: "¿Qué es el certificado de lavado ECD/EFTCO?",
    answer: "Es el documento oficial expedido por un lavadero acreditado tras desinfectar y vaporizar la cisterna a alta temperatura tras cada carga.",
  },
  {
    question: "¿Cómo funciona la cisterna isotérmica con ATP?",
    answer: "El aislamiento térmico reforzado permite mantener la temperatura del producto (frío a 4 °C o calor constante) sin variaciones mayores a 1 °C por día.",
  },
  {
    question: "¿Cuál es el volumen mínimo y máximo de contratación?",
    answer: "Disponemos de cubas rígidas de 10.000 litros para accesos ajustados y semirremolques de hasta 33.000 litros para portes a granel.",
  },
  {
    question: "¿Entregan certificado de potabilidad con el agua?",
    answer: "Sí. Todo el agua proviene de redes de consumo humano analizadas e incluye la medición de cloro libre residual exigida por el RD 3/2023.",
  },
  {
    question: "¿Gestionan la documentación de exportación de vino a Francia?",
    answer: "Sí, tramitamos el documento de acompañamiento electrónico e-AD y la documentación CMR de transporte internacional.",
  },
];

export default function FaqPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Centro de Ayuda y Preguntas Frecuentes
        </h1>
        <p className="text-text-600 text-sm max-w-xl mx-auto">
          Encuentra respuesta inmediata a los aspectos técnicos, sanitarios y de contratación más habituales.
        </p>
      </div>

      <FaqAccordion items={allFaqs} title="Preguntas Frecuentes Generales" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
