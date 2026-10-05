import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroHero } from "@/components/ui/HeroHero";
import { RouteMap } from "@/components/ui/RouteMap";
import { TechSpecsTabs } from "@/components/ui/TechSpecsTabs";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ValuePropsTabs } from "@/components/ui/ValuePropsTabs";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  Droplets,
  Truck,
  Wine,
  Milk,
  Sun,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Sparkles,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Cisternas Alimentarias en Valencia | Transporte de Líquidos",
  description:
    "Transporte de líquidos alimentarios en cisterna inox e isotérmica ATP desde Valencia a toda España y Francia. Pide presupuesto sin compromiso.",
};

const homeFaqs = [
  {
    question: "¿Qué tipos de líquidos alimentarios se pueden transportar en sus cisternas?",
    answer:
      "Transportamos todo tipo de productos alimentarios líquidos a granel: vino y mostos de uva, leche fresca y derivados lacteos, aceites de oliva y vegetales, zumos de frutas y concentrados, horchata, jarabes, glucosa, agua potable y alcohol etílico de origen agrícola. Todas nuestras cisternas disponen de registro sanitario RGSEAA.",
  },
  {
    question: "¿Qué certificados de higiene y limpieza acompañan a cada servicio?",
    answer:
      "Cada transporte se realiza con un Certificado de Lavado ECD/EFTCO expedido por una estación homologada tras un proceso de desinfección y vaporizado a alta temperatura. Además, la cisterna se entrega precintada en bocas de carga y válvulas con numeración única registrada en el albarán.",
  },
  {
    question: "¿Disponen de cisternas isotérmicas con certificado ATP para control de temperatura?",
    answer:
      "Sí, contamos con una flota especializada de cisternas isotérmicas con certificado ATP vigente (categorías IN y IR) equipadas con registrador termográfico continuo. Mantenemos productos refrigerados a 4 °C o cargas que requieren temperatura constante hasta 65 °C sin variaciones durante el trayecto.",
  },
  {
    question: "¿Cuál es el tiempo de respuesta para solicitar un presupuesto o transporte urgente?",
    answer:
      "Atendemos todas las solicitudes de presupuesto en menos de 2 horas laborables. Para portes urgentes en la provincia de Valencia, Alicante, Castellón o rutas habituales con Francia, nuestra proximidad a los principales nodos logísticos nos permite posicionar un vehículo en 12 a 24 horas.",
  },
  {
    question: "¿Realizan transporte internacional de líquidos alimentarios entre España y Francia?",
    answer:
      "Sí, realizamos operativas diarias entre España y el sur de Francia (Perpiñán, Burdeos, Lyon, Tolosa) a través del paso fronterizo de La Jonquera e Irún, gestionando toda la documentación aduanera y sanitaria necesaria como el documento e-AD para vinos y el CMR internacional.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* 1. Hero Block */}
      <HeroHero
        title="Cisternas alimentarias en Valencia"
        subtitle="Transporte especializado de líquidos alimentarios a granel y agua potable en cisternas de acero inoxidable e isotérmicas ATP. Operador logístico con cobertura directa en Valencia, España y Francia."
        badges={["Nacional", "Internacional", "A granel"]}
        imageUrl="/images/spanish_food_tanker_truck_valencia_highway.jpg"
        imageAlt="Camión cisterna español de líquidos alimentarios por la autovía en Valencia"
      />

      {/* 2. Anchor Navigation Bar */}
      <div className="bg-white border-y border-border-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto py-3 text-xs sm:text-sm font-bold text-text-600 gap-6 no-scrollbar">
            <a href="#cobertura" className="hover:text-brand-500 whitespace-nowrap">
              ¿Dónde transportamos?
            </a>
            <a href="#definicion" className="hover:text-brand-500 whitespace-nowrap">
              Transporte Alimentario
            </a>
            <a href="#rutas" className="hover:text-brand-500 whitespace-nowrap">
              Mapa de Rutas
            </a>
            <a href="#servicios" className="hover:text-brand-500 whitespace-nowrap">
              Servicios por Líquido
            </a>
            <a href="#cisternas" className="hover:text-brand-500 whitespace-nowrap">
              Tipos de Cisterna
            </a>
            <a href="#por-que" className="hover:text-brand-500 whitespace-nowrap">
              Por Qué Elegirnos
            </a>
            <a href="#presupuesto-form" className="text-brand-500 hover:text-navy-900 whitespace-nowrap font-extrabold">
              Pide Presupuesto →
            </a>
          </div>
        </div>
      </div>

      {/* 3. National / International Coverage Tabs Block */}
      <section id="cobertura" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-25 rounded-3xl p-8 sm:p-12 border border-border-100">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
              Ámbito Operativo
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900">
              ¿Dónde quieres llevar tu carga alimentaria?
            </h2>
            <p className="text-text-600 text-sm">
              Conectamos las principales zonas productoras agrícolas e industriales de la Península con centros de embotellado y distribución europeos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-navy-900 text-accent-route rounded-2xl flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">Transporte Nacional en España</h3>
              <p className="text-text-600 text-sm leading-relaxed font-medium">
                Cobertura completa desde nuestra base en Valencia hacia la Comunidad Valenciana, Castilla-La Mancha, Murcia, Andalucía, Cataluña, Aragón y Norte de España. Rutas diarias con máxima puntualidad.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Enlace directo A-3 y AP-7 en menos de 15 minutos.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cisternas monocámara y multicompartimento.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-2xl flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6 text-accent-route" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">Transporte Internacional – Francia</h3>
              <p className="text-text-600 text-sm leading-relaxed font-medium">
                Operativa especializada entre España y Francia por La Jonquera e Irún. Gestión completa de albaranes comunitarios e-AD para vino a granel y cumplimiento estricto de regulación europea.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Conductores bilingües formados en normativa ATP.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Trazabilidad satelital en tiempo real durante el tránsito.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "¿Qué es el transporte en cisterna alimentaria?" Block */}
      <section id="definicion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-route" />
              Seguridad Alimentaria Garantizada
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              ¿Qué es el transporte en cisterna alimentaria?
            </h2>
            <div className="prose prose-slate text-text-600 text-sm leading-relaxed space-y-4 font-medium">
              <p>
                El <strong>transporte en cisterna alimentaria</strong> es la modalidad logística especializada en el traslado a granel de mercancías líquidas destinadas al consumo humano o a la industria agroalimentaria. A diferencia de las cisternas químicas o industriales, este servicio exige la utilización exclusiva de depósitos de acero inoxidable sanitario (AISI 316L) y materiales homologados por la Autoridad Sanitaria Europea.
              </p>
              <p>
                En <strong>Cisternas Alimentarias Valencia</strong> garantizamos la preservación de las propiedades organolépticas, físico-químicas y sanitarias del producto desde el punto de origen hasta su descarga en muelle. Cada cisterna es sometida a un riguroso proceso de sanitización, vaporizado y desinfección tras cada servicio, emitiendo un certificado de lavado acreditado e identificando las cargas con precintos de seguridad numerados e inviolables.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-blue-50 p-8 rounded-3xl border border-blue-100 space-y-4">
            <h3 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-route" />
              Ventajas Clave de Nuestro Servicio Alimentario:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
              <div className="bg-white p-4 rounded-xl border border-border-100 shadow-sm space-y-1">
                <span className="font-extrabold text-brand-500 block">Exclusividad Alimentaria</span>
                <span>Nuestra flota jamás ha transportado mercancías peligrosas ni químicas.</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border-100 shadow-sm space-y-1">
                <span className="font-extrabold text-brand-500 block">Aislamiento Térmico ATP</span>
                <span>Mantención estricta de temperatura en leche, zumos y derivados.</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border-100 shadow-sm space-y-1">
                <span className="font-extrabold text-brand-500 block">Bombas Sanitarias Inox</span>
                <span>Sistemas de impulsión independientes para descargas higiénicas.</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border-100 shadow-sm space-y-1">
                <span className="font-extrabold text-brand-500 block">Registro Sanitario RGSEAA</span>
                <span>Habilitación oficial para transporte alimentario de consumo directo.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Route Map Component Block */}
      <section id="rutas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RouteMap />
      </section>

      {/* 6. Service Cards Grid Block */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-accent-route" />
            Especialización por Producto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Servicios de transporte de líquidos en cisterna
          </h2>
          <p className="text-text-600 text-base">
            Landings especializadas para dar respuesta exacta a cada necesidad de producto a granel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Líquidos Alimentarios en Cisterna"
            description="Transporte general en acero inoxidable sanitario para la industria agroalimentaria. Cumplimiento de normativa europea y lavado certificado."
            href="/transporte-liquidos-alimentarios-valencia/"
            icon={Droplets}
            badge="Más solicitado"
          />
          <ServiceCard
            title="Cisterna Isotérmica ATP"
            description="Mantención estricta de la cadena de frío a 4 °C o calor constante hasta 65 °C con certificado ATP homologado e impresor termográfico."
            href="/transporte-cisterna-isotermica-valencia/"
            icon={ShieldCheck}
            badge="Certificado ATP"
          />
          <ServiceCard
            title="Vino y Mosto a Granel"
            description="Operativa especial de vendimia e inter-bodegas. Cisternas multicompartimento para D.O. Utiel-Requena, Valencia, La Mancha y exportación a Francia."
            href="/transporte-vino-mosto-valencia/"
            icon={Wine}
            badge="Campañas D.O."
          />
          <ServiceCard
            title="Transporte de Agua Potable"
            description="Suministro de agua garantizada para consumo humano en cortes de red, industrias, obras y comunidades autónomas con registro sanitario."
            href="/transporte-agua-potable-valencia/"
            icon={Truck}
            badge="Agua Garantizada"
          />
          <ServiceCard
            title="Camión Cisterna de Agua Valencia"
            description="Cubas rígidas de 10.000 a 30.000 litros para suministros rápidos en la provincia de Valencia. Servicio de urgencias 24h."
            href="/camion-cisterna-agua-valencia/"
            icon={Droplets}
            badge="Valencia Local"
          />
          <ServiceCard
            title="Llenado de Piscinas"
            description="Servicio directo con mangueras de gran caudal para llenar piscinas residenciales y de chalets con agua clorada impecable sin esperas."
            href="/llenado-piscinas-camion-cisterna-valencia/"
            icon={Sun}
            badge="Rápido & Limpio"
          />
        </div>
      </section>

      {/* 7. Contact Callout Banner */}
      <section className="bg-gradient-to-r from-navy-900 to-brand-700 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent-route">
              Disponibilidad Inmediata de Flota
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              ¿Necesitas mover líquidos a granel esta semana?
            </h3>
            <p className="text-slate-200 text-sm max-w-xl">
              Consulta disponibilidad de vehículos y tarifas sin compromiso. Te asignamos un gestor logístico dedicado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+34960731206"
              className="bg-accent-route hover:bg-amber-600 text-navy-900 font-extrabold px-6 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Llamar: 960 73 12 06</span>
            </a>
            <a
              href="https://wa.me/34960731206?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20un%20transporte%20de%20cisterna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-full transition-all flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Technical Specifications Component Block */}
      <section id="cisternas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsTabs />
      </section>

      {/* 9. FAQ Accordion Block */}
      <FaqAccordion items={homeFaqs} />

      {/* 10. Value Proposition Tabs Block */}
      <section id="por-que" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ValuePropsTabs />
      </section>

      {/* 11. Customer Reviews Block */}
      <section className="bg-blue-25 py-16 border-y border-border-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900">
              Opiniones de Clientes y Bodegas
            </h2>
            <p className="text-text-600 text-sm font-medium">
              Empresas agroalimentarias y bodegas de vino confían diariamente en nuestro servicio de transporte en cisterna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Excelente coordinación durante la campaña de vendimia. Movieron más de 300.000 litros de mosto desde Requena a Francia con certificados de lavado impecables en cada camión."
              </p>
              <div className="pt-2 border-t border-border-100">
                <span className="font-extrabold text-navy-900 text-xs block">Director de Logística</span>
                <span className="text-[11px] text-slate-500">Bodegas D.O. Utiel-Requena</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Nos dieron respuesta inmediata en un corte accidental del suministro de agua industrial. En menos de 3 horas teníamos 2 cubas de agua potable descargando en la planta."
              </p>
              <div className="pt-2 border-t border-border-100">
                <span className="font-extrabold text-navy-900 text-xs block">Jefe de Planta Agroalimentaria</span>
                <span className="text-[11px] text-slate-500">Polígono Fuente del Jarro (Paterna)</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "Servicio de transporte de horchata en cisterna isotérmica ATP con temperatura perfecta a 4 °C. Cumplen a rajatabla los tiempos de entrega."
              </p>
              <div className="pt-2 border-t border-border-100">
                <span className="font-extrabold text-navy-900 text-xs block">Resp. Operaciones Bebidas</span>
                <span className="text-[11px] text-slate-500">Comunidad Valenciana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Quote Form Section Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QuoteForm />
      </section>
    </div>
  );
}
