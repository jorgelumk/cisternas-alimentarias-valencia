import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cisternasalimentariasvalencia.com";

  const routes = [
    "",
    "/transporte-de-liquidos/",
    "/transporte-liquidos-alimentarios-valencia/",
    "/transporte-cisterna-isotermica-valencia/",
    "/transporte-agua-potable-valencia/",
    "/camion-cisterna-agua-valencia/",
    "/llenado-piscinas-camion-cisterna-valencia/",
    "/transporte-vino-mosto-valencia/",
    "/transporte-leche-cisterna-valencia/",
    "/transporte-aceite-granel-valencia/",
    "/transporte-zumos-horchata-valencia/",
    "/lavado-cisternas-alimentarias-valencia/",
    "/transporte-cisterna-espana-francia/",
    "/transporte-liquidos-alicante/",
    "/transporte-liquidos-castilla-la-mancha/",
    "/transporte-liquidos-castellon/",
    "/flota/",
    "/calidad-y-certificaciones/",
    "/sobre-nosotros/",
    "/presupuesto/",
    "/contacto/",
    "/faq/",
    "/blog/",
    "/blog/camion-cisterna-tipos-capacidad/",
    "/blog/cuanto-cuesta-camion-cisterna-agua/",
    "/blog/que-es-el-atp-cisternas/",
    "/mapa-del-sitio/",
    "/aviso-legal/",
    "/politica-de-privacidad/",
    "/politica-de-cookies/",
  ];

  return routes.map((route) => {
    const isLegal = route.includes("politica") || route.includes("aviso");
    const isService = route.includes("transporte") || route.includes("camion") || route.includes("llenado") || route.includes("lavado");
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" || isService ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : isService ? 0.9 : isLegal ? 0.3 : 0.7,
    };
  });
}
