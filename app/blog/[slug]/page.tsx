import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Sparkles, ArrowRight } from "lucide-react";

interface ArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const articlesMap: Record<string, ArticleData> = {
  "camion-cisterna-tipos-capacidad": {
    slug: "camion-cisterna-tipos-capacidad",
    title: "Camión cisterna: guía completa de tipos, capacidades en litros y usos",
    metaTitle: "Camión Cisterna: Tipos, Capacidades y Usos | Guía Técnica",
    metaDescription: "Descubre todo sobre el camión cisterna: tipos de depósitos, capacidades en litros (10.000L a 33.000L), materiales e higiene para líquidos y agua.",
    category: "Guía Técnica",
    date: "4 de octubre de 2026",
    readTime: "7 min lectura",
    content: (
      <div className="space-y-6 text-text-600 font-medium leading-relaxed">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
          Un <strong>camión cisterna</strong> es un vehículo pesado de transporte especialmente diseñado para el traslado seguro y eficiente de mercancías líquidas a granel, garantizando la estabilidad del vehículo y la preservación de la carga.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">¿Qué es un camión cisterna y cómo se clasifica?</h2>
        <p>
          En el sector de la logística alimentaria y del agua potable, la elección de la cisterna adecuada determina no solo la eficiencia del trayecto, sino también el cumplimiento estricto de las normativas de higiene y seguridad vial. A diferencia del transporte de carga seca en remolques convencionales, el transporte en cisterna requiere depósitos cilíndricos o elípticos construidos con rompeolas internos para mitigar el efecto de las olas del líquido durante la aceleración y el frenado.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Tipos de camiones cisterna según su estructura</h2>
        <h3 className="text-xl font-bold text-brand-500 pt-2">1. Cubas rígidas de 2 y 3 ejes</h3>
        <p>
          Las cubas de agua rígidas van montadas directamente sobre el chasis del camión rígido. Tienen capacidades habituales de <strong>10.000 a 15.000 litros</strong>. Su principal ventaja es la gran maniobrabilidad en entornos urbanos, chalets con accesos estrechos, calles residenciales o vías secundarias de montaña.
        </p>

        <h3 className="text-xl font-bold text-brand-500 pt-2">2. Semirremolques cisterna articulados</h3>
        <p>
          Enganchados a tractoras europeas (tipo Scania, Volvo o DAF), los semirremolques de 3 ejes ofrecen capacidades masivas de <strong>25.000 a 33.000 litros</strong>. Se emplean en trayectos interurbanos, rutas nacionales e internacionales entre España y Francia para mover volúmenes masivos de vino, leche, aceites o agua potable.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Capacidades en litros habituales en el mercado</h2>
        <div className="bg-blue-25 p-6 rounded-2xl border border-border-100 space-y-2 text-sm">
          <ul className="space-y-2">
            <li>• <strong>10.000 Litros:</strong> Ideal para llenado de aljibes domésticos y riego.</li>
            <li>• <strong>15.000 Litros:</strong> Utilizado en suministros de obras y abastecimiento municipal.</li>
            <li>• <strong>28.000 - 30.000 Litros:</strong> Capacidad estándar en cisterna isotérmica alimentaria.</li>
            <li>• <strong>33.000 Litros:</strong> Capacidad máxima autorizada en semirremolque Inox.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Materiales y requisitos sanitarios alimentarios</h2>
        <p>
          Para el transporte de líquidos alimentarios es obligatorio el uso de acero inoxidable AISI 316L pulido espejo sanitario. Este material evita la porosidad, no altera el sabor de bebidas delicadas como el vino o la leche y permite la aplicación de ciclos de vaporizado a más de 100 °C con certificado ECD de desinfección.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Conclusión</h2>
        <p>
          Seleccionar la capacidad y el tipo de cisterna óptimo es clave para minimizar costes logísticos y asegurar la integridad de su mercancía líquida. En <strong>Cisternas Alimentarias Valencia</strong> disponemos de una flota variada para dar cobertura a cualquier operativa.
        </p>

        <div className="mt-8 bg-gradient-to-r from-navy-900 to-brand-700 text-white p-8 rounded-3xl space-y-4">
          <h3 className="text-2xl font-extrabold">¿Necesitas contratar un camión cisterna en Valencia?</h3>
          <p className="text-slate-200 text-sm">
            Consulta nuestra flota especializada y solicita un presupuesto a medida sin compromiso.
          </p>
          <div className="pt-2">
            <Link href="/flota/" className="bg-accent-route hover:bg-amber-600 text-navy-900 font-extrabold px-6 py-3.5 rounded-full inline-flex items-center gap-2 text-sm transition-colors">
              <span>Ver Nuestra Flota de Cisternas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    ),
  },

  "cuanto-cuesta-camion-cisterna-agua": {
    slug: "cuanto-cuesta-camion-cisterna-agua",
    title: "Cuánto cuesta un camión cisterna de agua: precios y factores clave",
    metaTitle: "Cuánto Cuesta un Camión Cisterna de Agua | Precios Valencia",
    metaDescription: "Descubre cuánto cuesta un camión cisterna de agua en Valencia. Factores que determinan el precio: volumen en litros, distancia y tipo de suministro.",
    category: "Precios & Tarifas",
    date: "4 de octubre de 2026",
    readTime: "5 min lectura",
    content: (
      <div className="space-y-6 text-text-600 font-medium leading-relaxed">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
          Saber <strong>cuánto cuesta un camión cisterna de agua</strong> es una de las principales consultas de propietarios de piscinas, ayuntamientos, industrias y gestores de obras en la provincia de Valencia.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Factores que influyen en el precio de una cuba de agua</h2>
        <p>
          El coste final de alquilar o contratar un camión cisterna de agua no depende únicamente de la cantidad de litros contratados, sino de una serie de factores operativos que determinan la logística del trayecto:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Volumen contratado (Litros):</strong> No es lo mismo desplazar una cuba de 10.000 litros que un semirremolque completo de 30.000 litros.</li>
          <li><strong>Distancia en kilómetros:</strong> El kilometraje desde la base logística en Valencia hasta el punto de descarga.</li>
          <li><strong>Dificultad de acceso:</strong> Si se requieren mangueras de más de 50 metros o bombas impulsoras especiales para desnivel.</li>
          <li><strong>Urgencia del servicio:</strong> Suministros programados frente a emergencias 24 horas.</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Rango de tarifas orientativas en Valencia</h2>
        <p>
          Aunque cada servicio se cotiza a medida, de forma orientativa los suministros locales en la provincia de Valencia oscilan según la capacidad de la cisterna y el destino. Para obtener una tarifa exacta garantizada sin sorpresas, lo más recomendable es solicitar una cotización personalizada.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Conclusión</h2>
        <p>
          Contratar un servicio profesional de agua potable en cisterna evita problemas en el contador de casa y garantiza agua limpia con registro sanitario en menos de 24 horas.
        </p>

        <div className="mt-8 bg-gradient-to-r from-navy-900 to-brand-700 text-white p-8 rounded-3xl space-y-4">
          <h3 className="text-2xl font-extrabold">¿Quieres conocer el precio exacto para tu suministro de agua?</h3>
          <p className="text-slate-200 text-sm">
            Pide tu presupuesto online sin compromiso y te responderemos en menos de 2 horas.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link href="/camion-cisterna-agua-valencia/" className="bg-accent-route hover:bg-amber-600 text-navy-900 font-extrabold px-6 py-3.5 rounded-full inline-flex items-center gap-2 text-sm transition-colors">
              <span>Camión Cisterna de Agua Valencia</span>
            </Link>
            <Link href="/llenado-piscinas-camion-cisterna-valencia/" className="bg-white text-navy-900 font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 text-sm hover:bg-blue-50 transition-colors">
              <span>Llenado de Piscinas</span>
            </Link>
          </div>
        </div>
      </div>
    ),
  },

  "que-es-el-atp-cisternas": {
    slug: "que-es-el-atp-cisternas",
    title: "Qué es el ATP en cisternas isotérmicas y por qué es obligatorio",
    metaTitle: "Qué es el ATP en Cisternas Isotérmicas | Normativa",
    metaDescription: "Conoce qué es el certificado ATP en cisternas isotérmicas para transporte de líquidos perecederos, clases IN/IR y cómo garantiza el control térmico.",
    category: "Normativa & Calidad",
    date: "4 de octubre de 2026",
    readTime: "5 min lectura",
    content: (
      <div className="space-y-6 text-text-600 font-medium leading-relaxed">
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
          El <strong>certificado ATP en cisternas</strong> es el documento legal regulatorio que homologa los vehículos para el transporte de mercancías perecederas a temperatura controlada.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Origen y propósito del acuerdo ATP</h2>
        <p>
          El Acuerdo sobre Transportes Internacionales de Mercancías Perecederas (ATP) fue firmado en Ginebra para fijar los criterios de aislamiento térmico de furgones, camiones y cisternas. Su objetivo principal es asegurar que los alimentos de consumo humano como la leche, natas, zumos y derivados mantengan su estabilidad sin romper la cadena de frío o calor.
        </p>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Clasificación de cisternas según ATP</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Cisterna Isotérmica Normal (IN):</strong> Aislamiento básico para evitar saltos bruscos de temperatura en rutas cortas.</li>
          <li><strong>Cisterna Isotérmica Reforzada (IR):</strong> Coeficiente de transmisión de calor K &le; 0,40 W/m²K, diseñada para largos recorridos e internacionales.</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-navy-900 pt-4">Conclusión</h2>
        <p>
          Asegurarse de que el operador logístico cuenta con certificado ATP en regla es la mejor garantía contra pérdidas económicas por deterioro de producto.
        </p>

        <div className="mt-8 bg-gradient-to-r from-navy-900 to-brand-700 text-white p-8 rounded-3xl space-y-4">
          <h3 className="text-2xl font-extrabold">¿Buscas transporte en cisterna isotérmica con ATP?</h3>
          <p className="text-slate-200 text-sm">
            Conoce nuestras cisternas de temperatura controlada e impresor termográfico.
          </p>
          <div className="pt-2">
            <Link href="/transporte-cisterna-isotermica-valencia/" className="bg-accent-route hover:bg-amber-600 text-navy-900 font-extrabold px-6 py-3.5 rounded-full inline-flex items-center gap-2 text-sm transition-colors">
              <span>Cisterna Isotérmica ATP Valencia</span>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];
  if (!article) return { title: "Artículo no encontrado" };

  const canonicalUrl = `https://cisternasalimentariasvalencia.com/blog/${slug}/`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesMap[slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link href="/blog/" className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-500 hover:text-navy-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al índice del blog</span>
        </Link>

        <div className="space-y-4 border-b border-border-100 pb-8">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
            <span className="bg-brand-500/10 text-brand-500 px-3 py-1 rounded-full uppercase tracking-wider">{article.category}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="prose prose-slate max-w-none">
          {article.content}
        </div>
      </div>
    </article>
  );
}
