import React from "react";
import Link from "next/link";
import { Map, Droplets, Truck, MapPin, Building2, ShieldCheck, FileText, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Mapa del Sitio | Cisternas Alimentarias Valencia",
  description: "Índice estructurado y jerárquico de todas las páginas y servicios de Cisternas Alimentarias Valencia.",
};

export default function MapaDelSitioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-border-100 pb-6 space-y-2">
        <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
          <Map className="w-4 h-4 text-accent-route" />
          Navegación Estructurada
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Mapa del Sitio Web (Sitemap Visual)
        </h1>
        <p className="text-text-600 text-sm max-w-2xl font-medium">
          Accede fácilmente a cada una de las secciones, landings de servicios geolocalizadas, información de flota y artículos de nuestro blog.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cat 1: Transporte de Líquidos Alimentarios */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <Droplets className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Líquidos Alimentarios</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/transporte-liquidos-alimentarios-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Transporte de Líquidos Alimentarios</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-cisterna-isotermica-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Cisternas Isotérmicas ATP</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-vino-mosto-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Vino y Mosto a Granel</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-leche-cisterna-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Recogida y Transporte de Leche</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-aceite-granel-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Aceite de Oliva y Vegetal</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-zumos-horchata-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Zumos, Horchata y Jarabes</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Cat 2: Suministro de Agua Potable */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <Truck className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Agua Potable & Cubas</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/transporte-agua-potable-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Transporte de Agua Potable</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/camion-cisterna-agua-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Camión Cisterna de Agua Valencia</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/llenado-piscinas-camion-cisterna-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Llenado de Piscinas</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/lavado-cisternas-alimentarias-valencia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Estación de Lavado EFTCO</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Cat 3: Cobertura Geolocalizada */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Rutas y Destinos</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/transporte-cisterna-espana-francia" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Ruta Internacional España – Francia</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-liquidos-alicante" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Ruta Alicante & Murcia</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-liquidos-castellon" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Ruta Castellón</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/transporte-liquidos-castilla-la-mancha" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Ruta Castilla-La Mancha</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Cat 4: Empresa & Calidad */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Empresa y Flota</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/sobre-nosotros" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Sobre Nosotros</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/flota" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Nuestra Flota de Cisternas</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/calidad-y-certificaciones" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Calidad, RGSEAA y ATP</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/presupuesto" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Solicitar Presupuesto</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Contacto Directo</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Cat 5: Blog & Noticias */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Blog Informativo</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/blog" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Índice del Blog</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/blog/camion-cisterna-tipos-capacidad" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Tipos y Capacidad de Cisternas</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/blog/cuanto-cuesta-camion-cisterna-agua" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Precio de Camión Cisterna de Agua</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/blog/que-es-el-atp-cisternas" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Qué es la Certificación ATP</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Cat 6: Términos & Legales */}
        <div className="bg-white p-8 rounded-3xl border border-border-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border-100 text-navy-900 font-extrabold">
            <div className="w-10 h-10 bg-brand-500/10 text-brand-500 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-accent-route" />
            </div>
            <span className="text-lg">Información Legal</span>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <li>
              <Link href="/aviso-legal" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Aviso Legal</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Política de Privacidad</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies" className="hover:text-brand-500 flex items-center justify-between group">
                <span>Política de Cookies</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
