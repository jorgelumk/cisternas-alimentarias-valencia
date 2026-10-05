import React from "react";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Política de Cookies | Cisternas Alimentarias Valencia",
  description: "Información sobre las cookies utilizadas en la web de Cisternas Alimentarias Valencia.",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-border-100 pb-6 space-y-2">
        <span className="bg-amber-50 text-amber-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-amber-200">
          <Cookie className="w-3.5 h-3.5" />
          Uso de Galletas / Cookies
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Política de Cookies
        </h1>
        <p className="text-text-600 text-sm font-medium">
          Transparencia y opciones de configuración de navegación.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-text-600 text-sm leading-relaxed space-y-6">
        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900 font-extrabold">1. ¿Qué es una Cookie?</h2>
          <p>
            Una cookie es un pequeño fichero de texto que se almacena en su navegador al visitar casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900 font-extrabold">2. Tipos de Cookies Utilizadas</h2>
          <ul className="list-disc pl-5 space-y-2 font-medium text-slate-800">
            <li><strong>Cookies técnicas y estrictamente necesarias:</strong> Permiten la navegación a través de la web y la utilización de los formularios de solicitud de presupuesto.</li>
            <li><strong>Cookies analíticas de rendimiento:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la navegación para mejorar nuestros servicios.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-border-100 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-navy-900 font-extrabold">3. Cómo Configurar o Desactivar las Cookies</h2>
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet (Chrome, Firefox, Safari, Edge).
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-border-100 flex justify-between text-xs text-brand-500 font-bold">
        <Link href="/politica-de-privacidad" className="hover:underline">← Volver a Política de Privacidad</Link>
        <Link href="/aviso-legal" className="hover:underline">Volver a Aviso Legal →</Link>
      </div>
    </div>
  );
}
