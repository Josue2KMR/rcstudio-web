import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="px-4 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            TU ESTILO, <span className="text-accent">TU FIRMA.</span>
          </h1>
          <p className="mt-4 text-text-secondary">
            Precisos cortes, inmaculados fades y tatuajes que hablan por ti. Un
            espacio en el que cada detalle está pensado para que salgas con un
            estilo que te represente.
          </p>
          <p className="mt-2 text-sm uppercase tracking-wide text-text-muted">
            Cortes • Fade • Tattoos
          </p>
          <a
            href={getWhatsappLink(siteConfig.contacts.cortes)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-foreground transition-opacity hover:opacity-90"
          >
            Reserva tu turno
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://picsum.photos/seed/rcstudio-hero/800/600"
            alt="RCStudio"
            className="w-full rounded-xl border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
}
