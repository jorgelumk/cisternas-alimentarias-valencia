import React from "react";
import Link from "next/link";
import { Truck, Phone, Mail, MapPin, ShieldCheck, FileText, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white">
                <Truck className="w-5 h-5 text-accent-route" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Cisternas Alimentarias Valencia
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Especialistas en transporte de líquidos alimentarios a granel y agua potable en cisternas de acero inoxidable e isotérmicas ATP. Operador logístico con cobertura en Valencia, España y Francia.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-route" />
                <span>Registro Sanitario RGSEAA & Certificado ATP Homologado</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>Base Logística: Provincia de Valencia (Comunidad Valenciana)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Servicios Alimentarios */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-route">Líquidos Alimentarios</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/transporte-liquidos-alimentarios-valencia/" className="hover:text-white transition-colors">
                  Líquidos Alimentarios Inox
                </Link>
              </li>
              <li>
                <Link href="/transporte-cisterna-isotermica-valencia/" className="hover:text-white transition-colors">
                  Cisterna Isotérmica ATP
                </Link>
              </li>
              <li>
                <Link href="/transporte-vino-mosto-valencia/" className="hover:text-white transition-colors">
                  Vino y Mosto a Granel
                </Link>
              </li>
              <li>
                <Link href="/transporte-leche-cisterna-valencia/" className="hover:text-white transition-colors">
                  Recogida de Leche
                </Link>
              </li>
              <li>
                <Link href="/transporte-aceite-granel-valencia/" className="hover:text-white transition-colors">
                  Transporte de Aceite
                </Link>
              </li>
              <li>
                <Link href="/transporte-zumos-horchata-valencia/" className="hover:text-white transition-colors">
                  Zumos y Horchata
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Agua & Rutas */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-route">Agua & Rutas</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/transporte-agua-potable-valencia/" className="hover:text-white transition-colors">
                  Agua Potable
                </Link>
              </li>
              <li>
                <Link href="/camion-cisterna-agua-valencia/" className="hover:text-white transition-colors">
                  Camión Cisterna Valencia
                </Link>
              </li>
              <li>
                <Link href="/llenado-piscinas-camion-cisterna-valencia/" className="hover:text-white transition-colors">
                  Llenado de Piscinas
                </Link>
              </li>
              <li>
                <Link href="/lavado-cisternas-alimentarias-valencia/" className="hover:text-white transition-colors">
                  Lavado de Cisternas
                </Link>
              </li>
              <li>
                <Link href="/transporte-cisterna-espana-francia/" className="hover:text-white transition-colors">
                  Ruta España – Francia
                </Link>
              </li>
              <li>
                <Link href="/transporte-liquidos-alicante/" className="hover:text-white transition-colors">
                  Ruta Alicante & Murcia
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Legales */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-route">Contacto Directo</p>
            <div className="space-y-2 text-sm text-slate-300">
              <a href="tel:+34960731206" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>+34 960 73 12 06</span>
              </a>
              <a href="mailto:info@cisternasalimentariasvalencia.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-500" />
                <span className="truncate">info@cisternasalimentariasvalencia.com</span>
              </a>
            </div>

            <div className="pt-4 border-t border-navy-800 space-y-2 text-xs text-slate-400">
              <Link href="/flota/" className="block hover:text-white">Flota de Cisternas</Link>
              <Link href="/calidad-y-certificaciones/" className="block hover:text-white">Calidad & Certificados</Link>
              <Link href="/presupuesto/" className="block hover:text-white">Solicitar Presupuesto</Link>
              <Link href="/mapa-del-sitio" className="block text-accent-route font-bold hover:text-white">Mapa del Sitio Web</Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal terms */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Cisternas Alimentarias Valencia. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/aviso-legal" className="hover:text-slate-200 transition-colors">Aviso Legal</Link>
            <Link href="/politica-de-privacidad" className="hover:text-slate-200 transition-colors">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-slate-200 transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
