import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, Scale } from "lucide-react";

export const metadata = {
  title: "Aviso Legal | Cisternas Alimentarias Valencia",
  description: "Información legal, términos de uso y datos identificativos de Cisternas Alimentarias Valencia conforme a la LSSI-CE.",
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-border-100 pb-6 space-y-2">
        <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5" />
          Información Jurídica LSSI-CE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Aviso Legal y Condiciones de Uso
        </h1>
        <p className="text-text-600 text-sm font-medium">
          Última actualización: {new Date().getFullYear()}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-text-600 text-sm leading-relaxed space-y-6">
        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-500" />
            1. Datos Identificativos del Titular
          </h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular del sitio web:
          </p>
          <ul className="list-disc pl-5 space-y-1 font-medium text-slate-800">
            <li><strong>Denominación social:</strong> Cisternas Alimentarias Valencia S.L.</li>
            <li><strong>CIF / NIF:</strong> B-96000000</li>
            <li><strong>Domicilio social:</strong> Polígono Industrial Fuente del Jarro, 46980 Paterna, Valencia, España.</li>
            <li><strong>Registro Sanitario RGSEAA:</strong> 40.0000000/V</li>
            <li><strong>Teléfono de contacto:</strong> +34 960 73 12 06</li>
            <li><strong>Correo electrónico:</strong> info@cisternasalimentariasvalencia.com</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">2. Objeto y Ámbito de Aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>cisternasalimentariasvalencia.com</strong>. El acceso a la web atribuye la condición de Usuario e implica la aceptación plena de todas y cada una de las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, fotografías, imágenes de cisternas, logotipos, elementos gráficos, diseño y código fuente) son propiedad exclusiva de Cisternas Alimentarias Valencia S.L. o de terceros que han autorizado su inclusión. Queda prohibida la reproducción parcial o total sin autorización previa por escrito.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">4. Responsabilidad y Garantías</h2>
          <p>
            Cisternas Alimentarias Valencia S.L. no se hace responsable de los daños o perjuicios derivados de interferencias, interrupciones o virus informáticos en el funcionamiento de este sitio web por causas ajenas al titular.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-border-100 flex justify-between text-xs text-brand-500 font-bold">
        <Link href="/politica-de-privacidad" className="hover:underline">Ir a Política de Privacidad →</Link>
        <Link href="/politica-de-cookies" className="hover:underline">Ir a Política de Cookies →</Link>
      </div>
    </div>
  );
}
