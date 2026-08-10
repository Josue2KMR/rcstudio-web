# RCStudio - Landing page

Estudio ficticio de barbería y tatuajes en Montevideo, Uruguay. Proyecto de práctica orientado a portfolio: sitio de marketing enfocado en conversión directa vía WhatsApp.

**Preview:

## Preview

<div align="center">
  <img src="https://github.com/user-attachments/assets/52fab455-9034-4547-9c50-c8ca3352ce68" width="32%" alt="RCStudio - Hero" />
  <img src="https://github.com/user-attachments/assets/9b5f01fd-ada4-4656-9eef-0ce2f6cfbedf" width="32%" alt="RCStudio - Portfolio" />
  <img src="https://github.com/user-attachments/assets/cc593cb8-e395-4c0c-9e6e-7ba69d5bd49a" width="32%" alt="RCStudio - Contact" />
</div>


**Demo en vivo:** https://rcstudio-web-eight.vercel.app

## Stack técnico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Carrusel:** Embla Carousel + plugin de autoplay
- **Deploy:** Vercel

## Features

- Hero con CTA directo a WhatsApp
- Perfiles de artistas (barbero / tatuador) con carrusel de trabajos, autoplay y navegación manual
- Diseño mobile-first con navbar responsive
- Embed de Google Maps y horarios de atención
- SEO técnico completo: metadata dinámica, sitemap.xml y robots.txt generados por Next.js, datos estructurados JSON-LD (schema.org `HairSalon`) para búsquedas locales
- Sin backend: todo el contacto se resuelve con links `wa.me` pre-completados, sin formularios ni endpoints de API

## Estructura del proyecto

```
app/
  layout.tsx        # metadata global, fuentes, JSON-LD
  page.tsx           # composición de la home
  robots.ts           # robots.txt generado
  sitemap.ts          # sitemap.xml generado
components/
  Nav.tsx             # navbar responsive
  Hero.tsx             # sección hero
  ContactCard.tsx      # tarjetas de artistas + CTA WhatsApp
  Carrusel.tsx          # carrusel de imágenes con autoplay
  LocalBusinessJsonLd.tsx  # datos estructurados para SEO local
lib/
  site-config.ts        # fuente única de verdad: contactos, branding
  utils.ts               # helpers (generación de links de WhatsApp)
public/
  images/                # fotos de portfolio, organizadas por artista
  og-image.jpg             # imagen para previews al compartir el link
  icon.svg                  # favicon
```

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Configuración central

Todos los datos del negocio (contactos de WhatsApp, dirección, mensajes pre-cargados) viven en `lib/site-config.ts`. Cambiar un número de teléfono o un mensaje de contacto no requiere tocar ningún componente.

## Deploy

El proyecto se despliega automáticamente en Vercel con cada push a `main`. Sin variables de entorno necesarias — no hay backend ni claves de API involucradas.
