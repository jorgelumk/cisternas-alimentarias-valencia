"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Thermometer, ShieldAlert, Layers, Sparkles, Droplets } from "lucide-react";

interface SpecItem {
  id: string;
  name: string;
  shortDesc: string;
  capacity: string;
  material: string;
  compartments: string;
  temperature: string;
  certificates: string;
  imageUrl: string;
  imageAlt: string;
  features: string[];
}

const specsData: SpecItem[] = [
  {
    id: "inox",
    name: "Cisterna Inox Alimentaria",
    shortDesc: "Fabricada íntegramente en acero inoxidable AISI 316L pulido espejo sanitario para máxima higiene.",
    capacity: "28.000 L a 33.000 Litros",
    material: "Acero Inoxidable AISI 316L Monobloc",
    compartments: "1 a 4 compartimentos independientes con bombas sanitarias",
    temperature: "Ambiente / Calefactada por serpentín de vapor",
    certificates: "Registro Sanitario RGSEAA, EFTCO / ECD Lavado",
    imageUrl: "/images/spanish_food_tanker_truck_fleet.jpg",
    imageAlt: "Semirremolque cisterna de acero inoxidable alimentario",
    features: [
      "Descarga por presión con nitrógeno o aire filtrado estéril",
      "Válvulas de mariposa sanitarias de acero inoxidable 316",
      "Bomba bacteriológica autónoma integrada de alto caudal",
      "Pasarela de seguridad antideslizante con línea de vida",
    ],
  },
  {
    id: "atp",
    name: "Cisterna Isotérmica ATP",
    shortDesc: "Aislamiento térmico reforzado de poliuretano de alta densidad para mantener cadena de frío o calor.",
    capacity: "25.000 L a 32.000 Litros",
    material: "Inox AISI 316L con recubrimiento de poliuretano isotérmico",
    compartments: "Multi-compartimento aislado con colectores sanitarios",
    temperature: "Mantenedora de frío (4 °C) o calor constante (hasta 65 °C)",
    certificates: "Certificado ATP Homologado (IN / IR), Registro Sanitario",
    imageUrl: "/images/spanish_tanker_quality_certifications.jpg",
    imageAlt: "Cisterna isotérmica alimentaria certificada ATP",
    features: [
      "Registrador termográfico continuo calibrado en tiempo real",
      "Termómetros digitales calibrados en cada compartimento",
      "Aislamiento térmico que evita variaciones >1 °C en 24 horas",
      "Homologada para transporte de leche fresca, zumos y horchata",
    ],
  },
  {
    id: "agua",
    name: "Cisterna de Agua Potable",
    shortDesc: "Depósito especializado para suministro humano, ayuntamientos, obras, industrias y piscinas.",
    capacity: "10.000 L (Cuba rígida 3 ejes) a 30.000 L (Semirremolque)",
    material: "Acero Inoxidable / Tratamiento Epoxi Alimentario Certificado",
    compartments: "1 o 2 compartimentos rompeolas de gran estabilidad",
    temperature: "Ambiente (Agua clorada limpia y garantizada)",
    certificates: "Autorización Sanitaria de Consumo Humano (Real Decreto 3/2023)",
    imageUrl: "/images/spanish_water_tanker_pool.jpg",
    imageAlt: "Camión cuba de agua potable abasteciendo en Valencia",
    features: [
      "Mangueras de caucho alimentario de alta presión y racores Guillemin",
      "Bomba motobomba impulsora de alto caudal (hasta 40.000 L/h)",
      "Análisis periódicos bacteriológicos y de cloro libre residual",
      "Apta para llenado rápido de piscinas y depósitos comunitarios",
    ],
  },
];

export function TechSpecsTabs() {
  const [activeTab, setActiveTab] = useState<string>("inox");

  return (
    <section className="py-16 bg-blue-25 border-y border-border-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-route" />
            Flota Especializada y Homologada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            ¿Qué tipo de cisternas utilizamos para su carga?
          </h2>
          <p className="text-text-600 text-base">
            Equipamiento de última generación con mantenimiento riguroso y certificación oficial para asegurar la máxima calidad en cada porte.
          </p>
        </div>

        {/* Accessible Tab List */}
        <div
          role="tablist"
          aria-label="Especificaciones de Cisternas Alimentarias"
          className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-2xl border border-border-100 shadow-sm max-w-3xl mx-auto"
        >
          {specsData.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-transparent text-text-600 hover:bg-blue-50 hover:text-navy-900"
              }`}
            >
              <Droplets className={`w-4 h-4 ${activeTab === tab.id ? "text-accent-route" : "text-brand-500"}`} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Panels (rendered for SEO, toggled by CSS/State) */}
        {specsData.map((spec) => (
          <div
            key={spec.id}
            id={`tabpanel-${spec.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${spec.id}`}
            className={`${activeTab === spec.id ? "block" : "hidden"}`}
          >
            <div className="bg-white rounded-3xl border border-border-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[460px] bg-slate-100 overflow-hidden">
                <Image
                  src={spec.imageUrl}
                  alt={spec.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-route block">Ficha Técnica</span>
                  <h3 className="text-xl font-extrabold">{spec.name}</h3>
                </div>
              </div>

              {/* Right Column: Specs Table & Details */}
              <div className="lg:col-span-7 p-8 md:p-10 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-500 hidden lg:block">Ficha Técnica Oficial</span>
                  <h3 className="text-2xl font-extrabold text-navy-900 hidden lg:block">{spec.name}</h3>
                  <p className="text-text-600 text-sm mt-2 leading-relaxed font-medium">{spec.shortDesc}</p>
                </div>

                {/* Technical Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">Capacidad Volumétrica</span>
                    <span className="font-extrabold text-navy-900 text-sm">{spec.capacity}</span>
                  </div>
                  <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">Material de Fabricación</span>
                    <span className="font-extrabold text-navy-900 text-sm">{spec.material}</span>
                  </div>
                  <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">Compartimentos</span>
                    <span className="font-extrabold text-navy-900 text-sm">{spec.compartments}</span>
                  </div>
                  <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 space-y-1">
                    <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">Rango de Temperatura</span>
                    <span className="font-extrabold text-navy-900 text-sm">{spec.temperature}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Equipamiento e Higiene:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    {spec.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Badge */}
                <div className="pt-4 border-t border-border-100 flex items-center gap-3 text-xs text-slate-600">
                  <ShieldAlert className="w-5 h-5 text-accent-route flex-shrink-0" />
                  <span className="font-medium"><strong>Normativa Vigente:</strong> {spec.certificates}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
