import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { TechSpecsTabs } from "@/components/ui/TechSpecsTabs";
import { Droplets, ShieldCheck, Check, Truck, ArrowRight, FileCheck, Layers } from "lucide-react";

export const metadata = {
  title: "Transporte de Líquidos Alimentarios en Cisterna | Valencia",
  description:
    "Especialistas en transporte de líquidos alimentarios en cisterna de acero inoxidable AISI 316L con registro sanitario. Cobertura nacional e internacional.",
};

const faqs = [
  {
    question: "¿Qué garantía existe de que la cisterna no ha transportado químicos?",
    answer:
      "Nuestra empresa opera con una flota de dedicación 100 % alimentaria. Suscribimos contractual y legalmente que nuestros vehículos jamás han cargado productos peligrosos, lubricantes ni químicos industriales.",
  },
  {
    question: "¿Qué es el certificado ECD / EFTCO de lavado y cuándo se emite?",
    answer:
      "Es el documento estándar europeo expedido por un lavadero acreditado tras desinfectar y vaporizar la cisterna a 100 °C. Se adjunta obligatoriamente a la documentación de cada transporte antes de proceder a la carga.",
  },
  {
    question: "¿Disponen de cisternas multicompartimento para llevar diferentes líquidos?",
    answer:
      "Sí, contamos con cisternas divididas en 2, 3 y 4 compartimentos totalmente independientes con colectores y bombas separadas para transportar distintas variedades o productos en un mismo trayecto.",
  },
];

export default function LiquidosAlimentariosPage() {
  return (
    <div className="space-y-12">
      {/* 1. Hero Block */}
      <HeroHero
        title="Transporte de líquidos alimentarios en cisterna de acero inoxidable"
        subtitle="Servicio profesional de transporte a granel con depósitos sanitarios Inox AISI 316L, registro sanitario RGSEAA y certificados de desinfección EFTCO en Valencia, España y Francia."
        badges={["Alimentario Exclusivo", "Registro RGSEAA", "Certificado EFTCO"]}
        imageUrl="/images/spanish_food_tanker_truck_valencia_highway.jpg"
        imageAlt="Conductor conectando manguera sanitaria a cisterna inox en fábrica de bebidas"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/transporte-de-liquidos/" }, { label: "Líquidos Alimentarios" }]}
      />

      {/* 2. Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Logística alimentaria a granel con máxima garantía de inocuidad
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte de líquidos alimentarios</strong> exige los más altos estándares de higiene y control sanitario del sector logístico. En Cisternas Alimentarias Valencia ofrecemos un servicio integral diseñado para proteger la calidad organoléptica de sus materias primas líquidas. Nuestra flota está integrada exclusivamente por cisternas monocámara y multicompartimento de acero inoxidable alimentario (AISI 316L) con acabado pulido espejo que impiden la adherencia de residuos y garantizan una limpieza microbiológica completa.
          </p>
        </div>
      </section>

      {/* 3. Qué líquidos transportamos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Catálogo de Productos</span>
          <h2 className="text-3xl font-extrabold text-navy-900">¿Qué líquidos alimentarios transportamos?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold text-slate-800">
          <div className="bg-white p-5 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-brand-500 font-extrabold block text-sm">Vino & Mosto</span>
            <p className="text-slate-600 text-xs">Vinos tintos, blancos, rosados, mostos azufrados y rectificados a granel.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-brand-500 font-extrabold block text-sm">Leche & Lácteos</span>
            <p className="text-slate-600 text-xs">Leche cruda de vaca, oveja o cabra, suero lácteo y nata a temperatura controlada.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-brand-500 font-extrabold block text-sm">Aceites Alimentarios</span>
            <p className="text-slate-600 text-xs">Aceite de oliva virgen extra, girasol, semillas y aceites vegetales comestibles.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="text-brand-500 font-extrabold block text-sm">Zumos & Horchata</span>
            <p className="text-slate-600 text-xs">Zumo de naranja valenciano, concentrados de fruta, horchata de chufa y jarabes.</p>
          </div>
        </div>
      </section>

      {/* 4. Technical Specs Tabs Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsTabs />
      </section>

      {/* 5. Normativa e higiene */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-navy-900 text-white p-8 md:p-12 rounded-3xl border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-route">Cumplimiento Legal Europeo</span>
            <h2 className="text-3xl font-extrabold">Normativa de Higiene y Reglamento CE 852/2004</h2>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Todos nuestros transportes se rigen estrictamente por el Reglamento (CE) nº 852/2004 relativo a la higiene de los productos alimenticios. Disponemos de número de Registro Sanitario de Empresas Alimentarias y Alimentos (RGSEAA) y aplicamos sistemas de Autocontrol basados en el Análisis de Peligros y Puntos de Control Crítico (APPCC).
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-slate-200">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Registro RGSEAA</span>
              <span className="flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-accent-route" /> Lavado EFTCO / ECD</span>
              <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-brand-500" /> Precintos Numerados</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-navy-800 p-6 rounded-2xl border border-navy-700 space-y-3">
            <span className="text-xs font-bold text-accent-route uppercase">Protocolo de Lavado:</span>
            <ul className="space-y-2 text-xs text-slate-200 font-medium">
              <li>• Desinfección química alimentaria neutra</li>
              <li>• Vaporizado con agua a &gt;90 °C durante 30 min</li>
              <li>• Secado con aire filtrado estéril</li>
              <li>• Emisión inmediata de certificado ECD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Cómo funciona el servicio (4 pasos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-navy-900">¿Cómo funciona el servicio en 4 pasos?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-sm">1</span>
            <h3 className="font-extrabold text-navy-900 text-sm">Solicitud & Asignación</h3>
            <p className="text-slate-600">Definición de carga, volumen, ruta y tipo de cisterna necesaria.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-sm">2</span>
            <h3 className="font-extrabold text-navy-900 text-sm">Lavado & Inspección</h3>
            <p className="text-slate-600">Verificación de certificado ECD y precintado en estación de lavado.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-sm">3</span>
            <h3 className="font-extrabold text-navy-900 text-sm">Carga & Tránsito GPS</h3>
            <p className="text-slate-600">Conexión sanitaria, precintado final y seguimiento en tiempo real.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-2">
            <span className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-sm">4</span>
            <h3 className="font-extrabold text-navy-900 text-sm">Descarga & Documentación</h3>
            <p className="text-slate-600">Comprobación de precintos, descarga asistida y entrega de albarán.</p>
          </div>
        </div>
      </section>

      {/* 7. Related Zone Links & Price Factors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-navy-900">¿Necesitas transporte de líquidos a Francia o Alicante?</h3>
            <p className="text-text-600 text-sm mt-1">Consulta nuestras páginas específicas de ruta para más información.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/transporte-cisterna-espana-francia/" className="bg-navy-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-brand-500 transition-colors">
              Ruta España – Francia →
            </Link>
            <Link href="/transporte-liquidos-alicante/" className="bg-white border border-border-100 text-navy-900 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors">
              Ruta Alicante →
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre Líquidos Alimentarios" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
