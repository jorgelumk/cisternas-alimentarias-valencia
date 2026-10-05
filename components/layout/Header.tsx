"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ChevronDown, Truck, Droplets, MapPin, Sparkles, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-600">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/transporte-de-liquidos/"
                className="flex items-center gap-1.5 py-2 hover:text-brand-500 transition-colors"
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {/* MegaMenu Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-2xl shadow-2xl border border-border-100 p-6 grid grid-cols-3 gap-6 z-50 transition-all duration-200">
                  {/* Category 1: Alimentarios */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-border-100 text-navy-900 font-bold text-xs uppercase tracking-wider">
                      <Droplets className="w-4 h-4 text-brand-500" />
                      <span>Alimentarios a Granel</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <Link href="/transporte-liquidos-alimentarios-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Líquidos Alimentarios</span>
                          <span className="text-slate-500">Cisternas Inox sanitarias</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-cisterna-isotermica-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Cisterna Isotérmica ATP</span>
                          <span className="text-slate-500">Control estricto de temperatura</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-vino-mosto-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Vino y Mosto a Granel</span>
                          <span className="text-slate-500">Campañas de vendimia D.O.</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-leche-cisterna-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Recogida de Leche</span>
                          <span className="text-slate-500">Isotérmico con ATP sanitario</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-aceite-granel-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Aceite de Oliva y Vegetal</span>
                          <span className="text-slate-500">Almazaras e industrias</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-zumos-horchata-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Zumos, Horchata y Jarabes</span>
                          <span className="text-slate-500">Producto local valenciano</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Agua Potable */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-border-100 text-navy-900 font-bold text-xs uppercase tracking-wider">
                      <Truck className="w-4 h-4 text-brand-500" />
                      <span>Agua Potable & Cubas</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <Link href="/transporte-agua-potable-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Transporte de Agua Potable</span>
                          <span className="text-slate-500">Suministro para ayuntamientos e industria</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/camion-cisterna-agua-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Camión Cisterna de Agua Valencia</span>
                          <span className="text-slate-500">Cubas de agua de 10.000 a 30.000 L</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/llenado-piscinas-camion-cisterna-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Llenado de Piscinas</span>
                          <span className="text-slate-500">Agua clorada limpia y rápida</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/lavado-cisternas-alimentarias-valencia/" className="block p-2 rounded-lg hover:bg-blue-50 hover:text-brand-500 transition-colors">
                          <span className="font-bold block text-slate-900">Lavado de Cisternas</span>
                          <span className="text-slate-500">Vaporizado y certificado EFTCO</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3: Rutas Logísticas */}
                  <div className="space-y-3 bg-blue-25 p-4 rounded-xl border border-blue-50">
                    <div className="flex items-center gap-2 pb-2 border-b border-border-100 text-navy-900 font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-accent-route" />
                      <span>Rutas Destacadas</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <Link href="/transporte-cisterna-espana-francia/" className="block p-2 rounded-lg bg-white hover:bg-blue-50 hover:text-brand-500 transition-colors border border-border-100 shadow-sm">
                          <span className="font-bold block text-slate-900">España – Francia</span>
                          <span className="text-slate-500">Ruta internacional La Jonquera/Irún</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-liquidos-alicante/" className="block p-2 rounded-lg bg-white hover:bg-blue-50 hover:text-brand-500 transition-colors border border-border-100 shadow-sm">
                          <span className="font-bold block text-slate-900">Ruta Alicante</span>
                          <span className="text-slate-500">Industria agroalimentaria y bebidas</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-liquidos-castilla-la-mancha/" className="block p-2 rounded-lg bg-white hover:bg-blue-50 hover:text-brand-500 transition-colors border border-border-100 shadow-sm">
                          <span className="font-bold block text-slate-900">Ruta Castilla-La Mancha</span>
                          <span className="text-slate-500">Bodegas de vino y mostos</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/transporte-liquidos-castellon/" className="block p-2 rounded-lg bg-white hover:bg-blue-50 hover:text-brand-500 transition-colors border border-border-100 shadow-sm">
                          <span className="font-bold block text-slate-900">Ruta Castellón</span>
                          <span className="text-slate-500">Sector agrícola y citrícola</span>
                        </Link>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <Link
                        href="/transporte-de-liquidos/"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 hover:text-navy-900 transition-colors"
                      >
                        <span>Ver todas las rutas y servicios</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/flota/" className="hover:text-brand-500 transition-colors">Flota</Link>
            <Link href="/calidad-y-certificaciones/" className="hover:text-brand-500 transition-colors">Calidad & ATP</Link>
            <Link href="/sobre-nosotros/" className="hover:text-brand-500 transition-colors">Empresa</Link>
            <Link href="/blog/" className="hover:text-brand-500 transition-colors">Blog</Link>
            <Link href="/contacto/" className="hover:text-brand-500 transition-colors">Contacto</Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/presupuesto/"
              className="bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-accent-route" />
              <span>Pide Presupuesto</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-500 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border-100 px-4 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Servicios principales</p>
            <div className="grid grid-cols-1 gap-1 text-sm font-semibold text-slate-800">
              <Link href="/transporte-de-liquidos/" className="p-2 hover:bg-blue-50 rounded-lg">Hub de Transporte de Líquidos</Link>
              <Link href="/transporte-liquidos-alimentarios-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Líquidos Alimentarios Inox</Link>
              <Link href="/transporte-cisterna-isotermica-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Cisterna Isotérmica ATP</Link>
              <Link href="/transporte-agua-potable-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Transporte de Agua Potable</Link>
              <Link href="/camion-cisterna-agua-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Camión Cisterna de Agua (Valencia)</Link>
              <Link href="/llenado-piscinas-camion-cisterna-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Llenado de Piscinas</Link>
              <Link href="/transporte-vino-mosto-valencia/" className="p-2 hover:bg-blue-50 rounded-lg">Vino y Mosto a Granel</Link>
              <Link href="/transporte-cisterna-espana-francia/" className="p-2 hover:bg-blue-50 rounded-lg">Ruta España – Francia</Link>
            </div>
          </div>

          <div className="pt-2 border-t border-border-100 flex flex-col gap-2 font-semibold text-slate-700">
            <Link href="/flota/" className="p-2 hover:bg-blue-50 rounded-lg">Flota de Cisternas</Link>
            <Link href="/calidad-y-certificaciones/" className="p-2 hover:bg-blue-50 rounded-lg">Calidad & Registro Sanitario</Link>
            <Link href="/sobre-nosotros/" className="p-2 hover:bg-blue-50 rounded-lg">Sobre Nosotros</Link>
            <Link href="/blog/" className="p-2 hover:bg-blue-50 rounded-lg">Blog Informativo</Link>
            <Link href="/contacto/" className="p-2 hover:bg-blue-50 rounded-lg">Contacto Directo</Link>
          </div>

          <div className="pt-4 border-t border-border-100">
            <Link
              href="/presupuesto/"
              className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 rounded-full shadow-md"
            >
              Solicitar Presupuesto Gratuito
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
