import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Blog sobre Transporte en Cisterna y Logística Alimentaria",
  description: "Artículos informativos, normativas ATP, costes de agua potable y guías técnicas sobre el transporte de líquidos alimentarios en cisterna.",
};

const articles = [
  {
    slug: "camion-cisterna-tipos-capacidad",
    title: "Camión cisterna: tipos, capacidades en litros y usos recomendados",
    excerpt: "Guía completa sobre el camión cisterna, desde cubas de agua rígidas de 10.000L hasta semirremolques de acero inoxidable de 33.000 Litros.",
    category: "Guía Técnica",
    readTime: "6 min lectura",
  },
  {
    slug: "cuanto-cuesta-camion-cisterna-agua",
    title: "Cuánto cuesta un camión cisterna de agua: precios y factores clave",
    excerpt: "Desglose de costes para contratar un camión cisterna de agua en Valencia. Factores que influyen en el precio por viaje o litros.",
    category: "Precios & Tarifas",
    readTime: "5 min lectura",
  },
  {
    slug: "que-es-el-atp-cisternas",
    title: "Qué es el ATP en cisternas isotérmicas y por qué es obligatorio",
    excerpt: "Todo sobre la normativa ATP de transporte perecedero, categorías IN e IR y cómo garantiza la temperatura del producto.",
    category: "Normativa & Calidad",
    readTime: "5 min lectura",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-accent-route" />
          Blog Logístico & Divulgación
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Blog sobre Transporte de Líquidos y Cisternas Alimentarias
        </h1>
        <p className="text-text-600 text-sm max-w-xl mx-auto">
          Noticias, guías técnicas, normativas de higiene y respuestas sobre la logística de líquidos a granel.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article key={art.slug} className="bg-white rounded-3xl border border-border-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="text-brand-500 uppercase tracking-wider">{art.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                </div>
                <h2 className="text-xl font-extrabold text-navy-900 group-hover:text-brand-500 transition-colors leading-snug">
                  <Link href={`/blog/${art.slug}/`}>{art.title}</Link>
                </h2>
                <p className="text-text-600 text-xs sm:text-sm leading-relaxed font-medium">{art.excerpt}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-border-100">
                <Link href={`/blog/${art.slug}/`} className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-500 group-hover:text-navy-900 transition-colors">
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-4 h-4 text-accent-route group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
