import React from "react";
import { HeroHero } from "@/components/ui/HeroHero";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { ShieldCheck, Award, FileCheck, Layers, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Calidad, Higiene y Certificaciones | Cisternas Alimentarias",
  description: "Registro Sanitario RGSEAA, homologación ATP, lavados EFTCO y protocolo APPCC. Máxima garantía de inocuidad en transporte alimentario.",
};

export default function CalidadPage() {
  return (
    <div className="space-y-12">
      <HeroHero
        title="Calidad, higiene y certificaciones oficiales"
        subtitle="Cumplimiento estricto del marco regulatorio alimentario español y europeo para transporte a granel de productos destinados al consumo humano."
        badges={["Registro RGSEAA", "Certificado ATP", "EFTCO / ECD"]}
        imageUrl="/images/spanish_tanker_quality_certifications.jpg"
        imageAlt="Inspección de válvula sanitaria de acero inoxidable y precintos"
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Calidad y Certificaciones" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <ShieldCheck className="w-8 h-8 text-brand-500" />
            <h3 className="font-extrabold text-navy-900 text-lg">Registro RGSEAA</h3>
            <p className="text-slate-600 text-xs">Habilitación de la Agencia Española de Seguridad Alimentaria y Nutrición.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <Award className="w-8 h-8 text-brand-500" />
            <h3 className="font-extrabold text-navy-900 text-lg">Homologación ATP</h3>
            <p className="text-slate-600 text-xs">Clasificación IN/IR expedida por el Ministerio de Industria para perecederos.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <FileCheck className="w-8 h-8 text-brand-500" />
            <h3 className="font-extrabold text-navy-900 text-lg">Lavado EFTCO / ECD</h3>
            <p className="text-slate-600 text-xs">Certificado europeo de desinfección y vaporización tras cada vaciado.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
            <Layers className="w-8 h-8 text-brand-500" />
            <h3 className="font-extrabold text-navy-900 text-lg">Precintos Inviolables</h3>
            <p className="text-slate-600 text-xs">Identificación de seguridad numerada registrada en el albarán de transporte.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
