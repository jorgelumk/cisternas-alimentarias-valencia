"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function FaqAccordion({
  items,
  title = "Preguntas Frecuentes sobre Transporte en Cisterna",
  subtitle = "Resolvemos tus dudas sobre requisitos sanitarios, tiempos de tránsito, capacidad y presupuestos.",
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-white">
      {/* Dynamic JSON-LD script for FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-accent-route" />
            Resolución de Dudas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            {title}
          </h2>
          <p className="text-text-600 text-base">{subtitle}</p>
        </div>

        {/* Desktop Split View / Mobile Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Questions Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => toggleFaq(idx)}
                className={`w-full text-left p-4 rounded-2xl font-extrabold text-sm transition-all duration-200 flex items-center justify-between border ${
                  activeIndex === idx
                    ? "bg-navy-900 text-white border-navy-900 shadow-lg"
                    : "bg-blue-25 text-slate-800 border-border-100 hover:bg-blue-50"
                }`}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform ${
                    activeIndex === idx ? "rotate-180 text-accent-route" : "text-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Active Answer Card */}
          <div className="lg:col-span-7 bg-blue-25 rounded-3xl p-8 border border-border-100 min-h-[240px] flex flex-col justify-center">
            {activeIndex !== null ? (
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-500 uppercase tracking-wider block">
                  Respuesta del Especialista:
                </span>
                <h3 className="text-xl font-extrabold text-navy-900">
                  {items[activeIndex].question}
                </h3>
                <p className="text-text-600 text-sm leading-relaxed font-medium">
                  {items[activeIndex].answer}
                </p>
              </div>
            ) : (
              <div className="text-center text-slate-400 py-8">
                <p>Haz clic en cualquier pregunta de la izquierda para ver la respuesta detallada.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
