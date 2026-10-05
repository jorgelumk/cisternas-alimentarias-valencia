import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad | Cisternas Alimentarias Valencia",
  description: "Información sobre el tratamiento de datos personales conforme al RGPD y LOPDGDD en Cisternas Alimentarias Valencia.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-border-100 pb-6 space-y-2">
        <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          Protección de Datos RGPD (UE 2016/679)
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Política de Privacidad y Tratamiento de Datos
        </h1>
        <p className="text-text-600 text-sm font-medium">
          Garantía de confidencialidad en solicitudes B2B y presupuestos.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-text-600 text-sm leading-relaxed space-y-6">
        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            1. Responsable del Tratamiento
          </h2>
          <ul className="list-disc pl-5 space-y-1 font-medium text-slate-800">
            <li><strong>Identidad:</strong> Cisternas Alimentarias Valencia S.L.</li>
            <li><strong>NIF:</strong> B-96000000</li>
            <li><strong>Dirección:</strong> Polígono Industrial Fuente del Jarro, Paterna, Valencia.</li>
            <li><strong>Contacto DPD:</strong> privacidad@cisternasalimentariasvalencia.com</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            Tratamos la información facilitada por los usuarios para gestionar la elaboración y envío de presupuestos de transporte de líquidos alimentarios, atender consultas comerciales e implementar la logística de rutas contratadas.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">3. Legitimación y Conservación</h2>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento otorgado al enviar el formulario de presupuesto o consulta. Los datos se conservarán durante el tiempo necesario para cumplir con las obligaciones legales y comerciales derivadas.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900">4. Derechos del Usuario (ARCO / ARSOPOL)</h2>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando una solicitud a <strong>privacidad@cisternasalimentariasvalencia.com</strong> adjuntando copia de su DNI o documento identificativo.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-border-100 flex justify-between text-xs text-brand-500 font-bold">
        <Link href="/aviso-legal" className="hover:underline">← Volver a Aviso Legal</Link>
        <Link href="/politica-de-cookies" className="hover:underline">Ir a Política de Cookies →</Link>
      </div>
    </div>
  );
}
