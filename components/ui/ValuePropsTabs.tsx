"use client";

import React, { useState } from "react";
import { ShieldCheck, Eye, MapPin, Award, CheckCircle2 } from "lucide-react";

export function ValuePropsTabs() {
  const [activeTab, setActiveTab] = useState<"higiene" | "trazabilidad" | "cercania" | "calidad">("higiene");

  const values = {
    higiene: {
      title: "Higiene y Sanitización Sin Concesiones",
      icon: ShieldCheck,
      subtitle: "Protocolo estricto de lavado y desinfección con vapor a 100 °C tras cada descarga.",
      details: [
        "Estación de lavado acreditada por EFTCO con certificado ECD unívoco en cada porte.",
        "Precintado de seguridad numerado en boca de carga y válvulas de descarga.",
        "Monitoreo constante contra contaminación cruzada de alérgenos y residuos.",
        "Inspección microbiológica previa al llenado de la cisterna.",
      ],
    },
    trazabilidad: {
      title: "Trazabilidad Digital en Tiempo Real",
      icon: Eye,
      subtitle: "Control continuo de temperatura, ruta GPS y aperturas de válvula durante todo el trayecto.",
      details: [
        "Geolocalización satelital en vivo accesible para el cliente en cargas internacionales.",
        "Registrador termográfico continuo con impresión de gráfica de temperatura al entregar.",
        "Notificaciones automáticas en hitos de carga, tránsito por frontera y llegada a muelle.",
        "Gestión documental e-AD para vino y CMR electrónico sin demoras de papel.",
      ],
    },
    cercania: {
      title: "Cercanía y Flexibilidad de Respuesta",
      icon: MapPin,
      subtitle: "Base logística en Valencia con capacidad de reacción inmediata para portes urgentes.",
      details: [
        "Atención comercial y operativa 24/7 con gestor logístico asignado a su empresa.",
        "Respuesta garantizada a solicitudes de presupuesto en menos de 2 horas laborables.",
        "Adaptación a campañas agrícolas intensivas (vendimia, cítricos, recolección de aceite).",
        "Atención telefónica directa en español y francés para logística internacional.",
      ],
    },
    calidad: {
      title: "Certificaciones Oficiales e Integridad",
      icon: Award,
      subtitle: "Cumplimiento estricto del marco regulatorio sanitario español y europeo.",
      details: [
        "Registro Sanitario RGSEAA para transporte a granel de líquidos de consumo humano.",
        "Certificación ATP de Cisterna Isotérmica Homologada revisada periódicamente.",
        "Flota de tractoras Euro 6 de baja emisión y cisternas de acero inoxidable AISI 316L.",
        "Seguro de mercancías de alta cobertura adaptado al valor de la carga transportada.",
      ],
    },
  };

  const current = values[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-accent-route" />
            Nuestros Valores Diferenciales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            ¿Por qué elegir Cisternas Alimentarias Valencia?
          </h2>
          <p className="text-text-600 text-base">
            Compromiso absoluto con la seguridad alimentaria, la puntualidad en la entrega y la calidad operacional.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-blue-25 p-2 rounded-2xl border border-border-100 max-w-3xl mx-auto">
          {(["higiene", "trazabilidad", "cercania", "calidad"] as const).map((key) => {
            const item = values[key];
            const Icon = item.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-3 px-5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === key
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-transparent text-text-600 hover:bg-white hover:text-navy-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === key ? "text-accent-route" : "text-brand-500"}`} />
                <span className="capitalize">{key}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Content */}
        <div className="bg-blue-25 rounded-3xl p-8 sm:p-12 border border-border-100 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <IconComponent className="w-6 h-6 text-accent-route" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-navy-900">{current.title}</h3>
              <p className="text-text-600 text-sm font-medium mt-1">{current.subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-100">
            {current.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-800 font-semibold leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
