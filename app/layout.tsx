import type { Metadata } from "next";
import { New_Rocker, Archivo } from "next/font/google";
import "./globals.css";

const newRocker = New_Rocker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "RCStudio — Tattoo y Peluquería",
  description: "Barber studio | Carlos Reyes Lerena 5986",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${newRocker.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
