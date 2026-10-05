import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cisternasalimentariasvalencia.com"),
  title: {
    default: "Cisternas Alimentarias Valencia | Transporte de Líquidos y Agua",
    template: "%s | Cisternas Alimentarias Valencia",
  },
  description:
    "Transporte de líquidos alimentarios en cisterna de acero inoxidable e isotérmica ATP. Cobertura en Valencia, España y Francia. Pide presupuesto sin compromiso.",
  keywords: [
    "cisternas alimentarias valencia",
    "transporte de liquidos alimentarios",
    "transporte de agua potable",
    "camion cisterna agua valencia",
    "cisterna isotermica atp",
    "transporte de vino a granel",
  ],
  authors: [{ name: "Cisternas Alimentarias Valencia" }],
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cisternasalimentariasvalencia.com",
    siteName: "Cisternas Alimentarias Valencia",
    title: "Cisternas Alimentarias Valencia | Transporte de Líquidos y Agua",
    description:
      "Especialistas en transporte de líquidos alimentarios a granel y agua potable en cisternas certificadas. Servicio nacional e internacional.",
    images: [
      {
        url: "/images/spanish_food_tanker_truck_valencia_highway.jpg",
        width: 1200,
        height: 630,
        alt: "Cisterna Alimentaria Inox Valencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cisternas Alimentarias Valencia | Transporte de Líquidos y Agua",
    description:
      "Especialistas en transporte de líquidos alimentarios a granel y agua potable en cisternas certificadas.",
    images: ["/images/spanish_food_tanker_truck_valencia_highway.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col pb-16 lg:pb-0">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
