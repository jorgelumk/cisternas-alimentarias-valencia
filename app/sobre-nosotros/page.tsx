import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Building2, Users, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Sobre Nosotros | Cisternas Alimentarias Valencia",
  description: "Operador logístico familiar especializado en el transporte de líquidos alimentarios y agua en cisterna desde Valencia. Conoce nuestra historia.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Sobre Cisternas Alimentarias Valencia"
        subtitle="Más de 20 años ofreciendo soluciones de transporte en cisterna para la industria alimentaria de la Comunidad Valenciana, España y sur de Francia."
        badges={["Tomás Sánchez Transportes", "Base Valencia", "20+ Años Experiencia"]}
        imageUrl="/images/spanish_company_tanker_hq.jpg"
        imageAlt="Instalaciones de la base logística en Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Sobre Nosotros" }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-blue-25 p-8 rounded-3xl border border-border-100 space-y-4">
          <h2 className="text-2xl font-extrabold text-navy-900">Especialización exclusiva en carga líquida alimentaria</h2>
          <p className="text-text-600 text-sm leading-relaxed font-medium">
            <strong>Tomás Sánchez Transportes Cisternas SL (Cisternas Alimentarias Valencia)</strong> nació con la misión clara de profesionalizar el transporte a granel de líquidos alimentarios en la provincia de Valencia. Gracias a nuestra vocación de servicio y constante renovación de flota, nos hemos consolidado como el partner logístico de confianza para las principales bodegas, cooperativas y plantas agroalimentarias.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
