"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Navigation, Clock, ShieldCheck } from "lucide-react";

interface RouteInfo {
  id: string;
  name: string;
  destination: string;
  distance: string;
  transitTime: string;
  highlights: string[];
  link: string;
}

const routesData: RouteInfo[] = [
  {
    id: "francia",
    name: "Ruta España – Francia",
    destination: "Sur de Francia (Perpiñán, Burdeos, Lyon, Aviñón)",
    distance: "650 - 1.100 km",
    transitTime: "12 - 24 horas",
    highlights: ["Tránsito directo por La Jonquera", "Documentación CMR e-AD", "Vino, mosto y zumos"],
    link: "/transporte-cisterna-espana-francia/",
  },
  {
    id: "alicante",
    name: "Corredor Alicante & Murcia",
    destination: "Alicante, Elche, Murcia, Cartagena",
    distance: "180 - 250 km",
    transitTime: "2 - 4 horas",
    highlights: ["Suministro a industria de bebidas", "Agua potable urgente", "Enlace directo AP-7"],
    link: "/transporte-liquidos-alicante/",
  },
  {
    id: "castilla",
    name: "Ruta Castilla-La Mancha",
    destination: "Tomelloso, Alcázar de San Juan, Valdepeñas, Albacete",
    distance: "200 - 350 km",
    transitTime: "3 - 5 horas",
    highlights: ["Especial Vendimia y Mosto a Granel", "Cisternas multicompartimento", "Flota de apoyo continuo"],
    link: "/transporte-liquidos-castilla-la-mancha/",
  },
  {
    id: "castellon",
    name: "Ruta Castellón & Cítricos",
    destination: "Castellón de la Plana, Vila-real, Vinaròs",
    distance: "75 - 150 km",
    transitTime: "1 - 2 horas",
    highlights: ["Recogida de zumo de naranja y aceites", "Conexión directa A-7 / AP-7", "Respuesta inmediata"],
    link: "/transporte-liquidos-castellon/",
  },
];

export function RouteMap() {
  const [activeRoute, setActiveRoute] = useState<string>("francia");
  const current = routesData.find((r) => r.id === activeRoute) || routesData[0];

  return (
    <section className="bg-navy-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-12 border border-navy-800 shadow-2xl overflow-hidden relative">
      {/* Decorative Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="bg-brand-500/20 text-blue-200 border border-brand-500/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-accent-route" />
            Conexiones Logísticas Estratégicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Rutas Principales de Cisternas desde Valencia
          </h2>
          <p className="text-slate-300 text-base">
            Ubicación privilegiada en la provincia de Valencia con salida directa a la AP-7 y A-3 para conectar rápidamente con cualquier punto de la Península Ibérica y Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Map Visualizer */}
          <div className="lg:col-span-7 bg-navy-800/80 backdrop-blur p-8 rounded-2xl border border-navy-700 relative min-h-[380px] flex flex-col justify-between">
            {/* Visual Node Representation */}
            <div className="relative w-full h-64 border border-navy-700/60 rounded-xl bg-navy-900/60 p-6 flex items-center justify-between">
              {/* Central Node: Valencia */}
              <div className="flex flex-col items-center gap-2 group z-20">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-accent-route animate-ping absolute inset-0 opacity-75" />
                  <div className="w-8 h-8 rounded-full bg-accent-route text-navy-900 font-extrabold flex items-center justify-center text-xs shadow-lg relative z-10 border-2 border-white">
                    VLC
                  </div>
                </div>
                <div className="text-center">
                  <span className="block text-xs font-extrabold text-accent-route uppercase">Base Valencia</span>
                  <span className="text-[10px] text-slate-400">Hub Central</span>
                </div>
              </div>

              {/* Dynamic Connection Line */}
              <div className="flex-1 mx-6 relative h-1 bg-gradient-to-r from-accent-route via-brand-500 to-blue-400 rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-900 text-brand-500 border border-brand-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent-route" />
                  <span>{current.transitTime}</span>
                </div>
              </div>

              {/* Destination Node */}
              <div className="flex flex-col items-center gap-2 z-20">
                <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-extrabold flex items-center justify-center text-xs shadow-lg border-2 border-white">
                  DEST
                </div>
                <div className="text-center">
                  <span className="block text-xs font-extrabold text-white">{current.name.replace("Ruta ", "")}</span>
                  <span className="text-[10px] text-slate-300">{current.distance}</span>
                </div>
              </div>
            </div>

            {/* Route Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
              {routesData.map((route) => (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(route.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between border ${
                    activeRoute === route.id
                      ? "bg-brand-500 text-white border-brand-500 shadow-md"
                      : "bg-navy-900/60 text-slate-300 border-navy-700 hover:bg-navy-700 hover:text-white"
                  }`}
                >
                  <span className="truncate">{route.name}</span>
                  {activeRoute === route.id && <MapPin className="w-3.5 h-3.5 text-accent-route flex-shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Active Route Technical Details Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 p-8 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-1 border-b border-border-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Detalles del Trayecto</span>
              <h3 className="text-2xl font-extrabold text-navy-900">{current.name}</h3>
              <p className="text-sm text-text-600 font-medium">{current.destination}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-25 p-3 rounded-xl border border-blue-50">
                <span className="text-xs text-slate-500 font-medium block">Distancia Estimada</span>
                <span className="text-lg font-extrabold text-navy-900">{current.distance}</span>
              </div>
              <div className="bg-blue-25 p-3 rounded-xl border border-blue-50">
                <span className="text-xs text-slate-500 font-medium block">Tiempo de Tránsito</span>
                <span className="text-lg font-extrabold text-brand-500">{current.transitTime}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Puntos Fuertes del Servicio:</span>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={current.link}
              className="w-full bg-navy-900 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl transition-colors text-center text-sm flex items-center justify-center gap-2 group shadow-md"
            >
              <span>Ver información detallada de la ruta</span>
              <ArrowRight className="w-4 h-4 text-accent-route group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
