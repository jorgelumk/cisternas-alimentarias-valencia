import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { TechSpecsTabs } from "@/components/ui/TechSpecsTabs";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Truck, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nuestra Flota de Camiones Cisterna Alimentarios | Valencia",
  description: "Conoce nuestra flota de cisternas de acero inoxidable AISI 316L y semirremolques isotérmicos ATP. Equipamiento alimentario de última generación.",
};

export default function FlotaPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Nuestra flota de camiones cisterna alimentarios"
        subtitle="Equipamiento moderno y diversificado: desde cubas rígidas de 10.000 litros para accesos urbanos hasta semirremolques de 33.000 litros multicompartimento."
        badges={["Flota Propia Euro 6", "Inox AISI 316L", "Aislamiento ATP"]}
        imageUrl="/images/spanish_food_tanker_truck_fleet.jpg"
        imageAlt="Vista panorámica de la flota de cisternas españolas de acero inoxidable en Valencia"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Nuestra Flota" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechSpecsTabs />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
