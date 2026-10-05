import React from "react";
import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export function ServiceCard({ title, description, href, icon: Icon, badge }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          {badge && (
            <span className="bg-blue-50 text-brand-500 text-[11px] font-extrabold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-extrabold text-navy-900 group-hover:text-brand-500 transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-text-600 text-xs sm:text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-border-100">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-500 group-hover:text-navy-900 transition-colors"
        >
          <span>Ver servicio detallado</span>
          <ArrowRight className="w-4 h-4 text-accent-route group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
