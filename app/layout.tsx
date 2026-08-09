import type { Metadata } from "next";
import { New_Rocker, Archivo } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

const newRocker = New_Rocker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });

const SITE_URL = "https://rcstudio-web-tori-s.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RCStudio — Barbería y Tattoo en Montevideo",
    template: "%s | RCStudio",
  },
  description:
    "Barbería y estudio de tatuajes en Montevideo, Uruguay. Cortes, fades y tatuajes personalizados. Agenda tu turno por WhatsApp.",
  keywords: [
    "barbería Montevideo",
    "peluquería Montevideo",
    "tattoo Montevideo",
    "estudio de tatuajes Uruguay",
    "fade Montevideo",
    "cortes de pelo Montevideo",
  ],
  authors: [{ name: "RCStudio" }],
  openGraph: {
    title: "RCStudio — Barbería y Tattoo en Montevideo",
    description:
      "Cortes, fades y tatuajes personalizados en Montevideo. Agenda por WhatsApp.",
    url: SITE_URL,
    siteName: "RCStudio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCStudio — Barbería y Tattoo en Montevideo",
    description: "Cortes, fades y tatuajes personalizados en Montevideo.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${newRocker.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
