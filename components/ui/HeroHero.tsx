import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, MessageSquare, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

interface HeroHeroProps {
  title: string;
  subtitle: string;
  badges?: string[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
  imageUrl?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function HeroHero({
  title,
  subtitle,
  badges = ["Nacional", "Internacional", "A granel"],
  primaryCtaText = "Pedir Presupuesto Sin Compromiso",
  secondaryCtaText = "Contactar por WhatsApp",
  imageUrl = "/images/spanish_food_tanker_truck_valencia_highway.jpg",
  imageAlt = "Camión cisterna de líquidos alimentarios en carretera de Valencia",
  breadcrumbs = [{ label: "Inicio", href: "/" }, { label: "Servicios" }],
}: HeroHeroProps) {
  return (
    <section className="relative min-h-[560px] bg-navy-900 text-white overflow-hidden flex items-center">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65 scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Content Superimposed Card */}
          <div className="lg:col-span-8 bg-navy-900/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-navy-700/80 shadow-2xl space-y-6">
            {/* Breadcrumbs */}
            {breadcrumbs && (
              <nav className="flex items-center gap-2 text-xs font-semibold text-blue-200">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-slate-500">/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-accent-route">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Badges bar */}
            <div className="flex flex-wrap items-center gap-2">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-brand-500/20 text-blue-200 border border-brand-500/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-route" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {title}
            </h1>

            {/* Subtitle intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/presupuesto/"
                className="bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-accent-route" />
                <span>{primaryCtaText}</span>
              </Link>

              <a
                href="https://wa.me/34960731206?text=Hola,%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20y%20precio%20de%20transporte%20en%20cisterna"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-4 rounded-full transition-all duration-200 shadow-lg text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="pt-6 border-t border-navy-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-route flex-shrink-0" />
                <span>Respuesta comercial en &lt; 2 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>Cisternas de Inox 316L e Isotérmicas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Certificado ATP y Lavado Homologado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
