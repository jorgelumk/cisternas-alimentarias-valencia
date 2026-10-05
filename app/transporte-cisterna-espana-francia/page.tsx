import React from "react";
import Link from "next/link";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { RouteMap } from "@/components/ui/RouteMap";
import { MapPin, ShieldCheck, Clock, FileCheck } from "lucide-react";

export const metadata = {
  title: "Transporte en Cisterna España–Francia | Vino y Líquidos",
  description:
    "Ruta de transporte en cisterna alimentaria entre España y Francia por La Jonquera e Irún. Vinos, mostos, aceites y zumos con documentación CMR e-AD.",
};

const faqs = [
  {
    question: "¿Cuánto tarda el tránsito de una cisterna desde Valencia al sur de Francia?",
    answer:
      "El tiempo de tránsito directo para destinos como Perpiñán, Narbona, Montpellier o Tolosa oscila entre 12 y 16 horas. Para zonas del centro o norte de Francia (Lyon, Burdeos, París) el plazo es de 24 a 36 horas.",
  },
  {
    question: "¿Hablan francés sus gestores de tráfico y conductores?",
    answer:
      "Sí, contamos con equipo bilingüe en nuestro departamento de tráfico internacional para facilitar la comunicación con las plantas francesas de recepción y aduanas.",
  },
];

export default function RutaEspanaFranciaPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Transporte en cisterna entre España y Francia"
        subtitle="Corredor internacional de transporte alimentario en cisterna Inox y ATP. Conexión diaria por AP-7 / La Jonquera y A-8 / Irún con destino al mercado francés."
        badges={["Ruta España – Francia", "Paso La Jonquera", "CMR & e-AD"]}
        imageUrl="/images/spanish_food_tanker_truck_valencia_highway.jpg"
        imageAlt="Cisterna alimentaria circulando por la AP-7 cerca de La Jonquera hacia Francia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Rutas Logísticas", href: "/transporte-de-liquidos/" }, { label: "España – Francia" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">
            Conexión logística fluida entre los mayores productores y compradores de vino y alimentos
          </h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            El <strong>transporte en cisterna entre España y Francia</strong> es una de nuestras principales especialidades operativas. Transportamos vino a granel, mosto concentrado, aceites de oliva, zumos y productos lácteos desde la Comunidad Valenciana, Castilla-La Mancha y Murcia hacia los principales centros de embotellado y plantas de procesado francesas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RouteMap />
      </section>

      <FaqAccordion items={faqs} title="Preguntas sobre el Transporte España – Francia" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
