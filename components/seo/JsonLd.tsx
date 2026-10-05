import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  faqs?: FaqItem[];
  breadcrumbs?: { name: string; item: string }[];
  serviceName?: string;
  serviceDescription?: string;
}

export function JsonLd({ faqs, breadcrumbs, serviceName, serviceDescription }: JsonLdProps = {}) {
  const mainImage = "https://cisternasalimentariasvalencia.com/images/spanish_food_tanker_truck_fleet.jpg";

  const graph: any[] = [
    {
      "@type": "LocalBusiness",
      "@id": "https://cisternasalimentariasvalencia.com/#organization",
      "name": "Cisternas Alimentarias Valencia",
      "alternateName": "Tomás Sánchez Transportes Cisternas SL",
      "url": "https://cisternasalimentariasvalencia.com/",
      "logo": mainImage,
      "image": mainImage,
      "telephone": "+34960731206",
      "email": "info@cisternasalimentariasvalencia.com",
      "priceRange": "€€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Polígono Industrial Fuente del Jarro",
        "addressLocality": "Paterna",
        "addressRegion": "Valencia",
        "postalCode": "46980",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.5058",
        "longitude": "-0.4439"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Valencia" },
        { "@type": "AdministrativeArea", "name": "Alicante" },
        { "@type": "AdministrativeArea", "name": "Castellón" },
        { "@type": "AdministrativeArea", "name": "Castilla-La Mancha" },
        { "@type": "AdministrativeArea", "name": "Murcia" },
        { "@type": "Country", "name": "España" },
        { "@type": "Country", "name": "Francia" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Transporte en Cisterna",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte de Líquidos Alimentarios"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte en Cisterna Isotérmica ATP"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte de Agua Potable y Cubas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte de Vino y Mosto a Granel"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://cisternasalimentariasvalencia.com/#website",
      "url": "https://cisternasalimentariasvalencia.com/",
      "name": "Cisternas Alimentarias Valencia",
      "publisher": {
        "@id": "https://cisternasalimentariasvalencia.com/#organization"
      },
      "inLanguage": "es-ES"
    }
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  if (serviceName && serviceDescription) {
    graph.push({
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "provider": {
        "@id": "https://cisternasalimentariasvalencia.com/#organization"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Valencia"
      }
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.item
      }))
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
