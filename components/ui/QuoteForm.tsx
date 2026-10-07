"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, PhoneCall, Sparkles } from "lucide-react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    tipoLiquido: "Alimentario (Vino/Mosto/Zumos/Aceite/Leche)",
    origenDestino: "",
    volumenLitros: "Aproximadamente 25.000 L (Cisterna completa)",
    fechaEstimada: "",
    observaciones: "",
    honeypot: "", // Antispam field
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent reject for spam bots

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Error al enviar la solicitud.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Error al enviar el formulario:", err);
      setErrorMessage(err?.message || "Ocurrió un error al enviar el formulario. Por favor inténtalo de nuevo.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-border-100 shadow-2xl p-6 sm:p-10 relative overflow-hidden" id="presupuesto-form">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-brand-500/10 text-brand-500 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent-route" />
          Cotización Rápida B2B
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
        Solicita Tu Presupuesto de Transporte en Cisterna
      </h2>
      <p className="text-text-600 text-sm mt-1 mb-8">
        Completa el formulario y nuestro equipo de logística te enviará una propuesta personalizada en <strong>menos de 2 horas laborables</strong>.
      </p>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-semibold">
          {errorMessage}
        </div>
      )}

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-emerald-900">¡Solicitud Recibida con Éxito!</h3>
          <p className="text-emerald-800 text-sm max-w-md mx-auto">
            Hemos registrado tu consulta para <strong>{formData.tipoLiquido}</strong>. Un gestor logístico se pondrá en contacto contigo muy pronto.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setStatus("idle")}
              className="bg-navy-900 text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-brand-500 transition-colors"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field (hidden from real users) */}
          <input
            type="text"
            name="website_url_check"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Nombre completo *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Carlos Martínez"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Empresa / Razón Social
              </label>
              <input
                type="text"
                placeholder="Ej. Bodegas Valencia S.L."
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Teléfono de contacto *
              </label>
              <input
                type="tel"
                required
                placeholder="+34 960 73 12 06"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Correo electrónico *
              </label>
              <input
                type="email"
                required
                placeholder="ejemplo@empresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Tipo de líquido a transportar *
              </label>
              <select
                value={formData.tipoLiquido}
                onChange={(e) => setFormData({ ...formData, tipoLiquido: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              >
                <option value="Líquidos Alimentarios Inox">Líquidos Alimentarios (General Inox)</option>
                <option value="Cisterna Isotérmica ATP">Cisterna Isotérmica ATP (Frío/Calor)</option>
                <option value="Agua Potable / Cubas">Agua Potable / Cubas de Agua</option>
                <option value="Llenado de Piscinas">Llenado de Piscinas</option>
                <option value="Vino y Mosto a Granel">Vino y Mosto a Granel</option>
                <option value="Leche">Leche en cisterna isotérmica</option>
                <option value="Aceite de Oliva/Vegetal">Aceite a granel</option>
                <option value="Zumos y Horchata">Zumos, Horchata o Jarabes</option>
                <option value="Lavado de Cisternas">Lavado / Vaporizado de cisterna</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                Volumen o capacidad aproximada
              </label>
              <select
                value={formData.volumenLitros}
                onChange={(e) => setFormData({ ...formData, volumenLitros: e.target.value })}
                className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
              >
                <option value="10.000 Litros">Cuba rígida de 10.000 Litros</option>
                <option value="15.000 Litros">Cuba rígida de 15.000 Litros</option>
                <option value="25.000 Litros">Cisterna de 25.000 Litros</option>
                <option value="30.000 Litros">Semirremolque cisterna completo (30.000 L)</option>
                <option value="Varios viajes / Flota continua">Varios viajes / Operativa continua</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
              Origen, Destino y Detalles de la Ruta *
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Carga en Requena (Valencia) -> Descarga en Perpiñán (Francia)"
              value={formData.origenDestino}
              onChange={(e) => setFormData({ ...formData, origenDestino: e.target.value })}
              className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
              Observaciones o requisitos especiales
            </label>
            <textarea
              rows={3}
              placeholder="Indica si necesitas control de temperatura, cisterna multicompartimento o fecha específica de carga..."
              value={formData.observaciones}
              onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
              className="w-full px-4 py-3 bg-blue-25 border border-border-100 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-500 transition-colors"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="aceptoTerminos"
              required
              className="mt-1 w-4 h-4 text-brand-500 rounded border-border-100 focus:ring-brand-500 cursor-pointer"
            />
            <label htmlFor="aceptoTerminos" className="text-xs text-text-600 font-medium leading-normal cursor-pointer">
              He leído y acepto el{" "}
              <a href="/aviso-legal" target="_blank" className="text-brand-500 font-bold underline hover:text-navy-900">
                Aviso Legal
              </a>{" "}
              y la{" "}
              <a href="/politica-de-privacidad" target="_blank" className="text-brand-500 font-bold underline hover:text-navy-900">
                Política de Privacidad
              </a>
              . Entiendo que mis datos serán tratados para gestionar mi consulta de transporte. *
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-extrabold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              {status === "submitting" ? (
                <span>Procesando solicitud...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 text-accent-route" />
                  <span>Obtener Presupuesto Personalizado</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-3 border-t border-border-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Datos protegidos según RGPD. Sin spam.
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-500" />
              Respuesta garantizada en &lt; 2h laborables.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
