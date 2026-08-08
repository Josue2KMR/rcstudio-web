import Carrusel from "./Carrusel";
import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/utils";

type ArtistCardProps = {
  id: string;
  category: string;
  name: string;
  role: string;
  description: string;
  images: string[];
  contact: { phone: string; message: string };
};

function ArtistCard({
  id,
  category,
  name,
  role,
  description,
  images,
  contact,
}: ArtistCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-20 grid gap-6 rounded-lg border border-border bg-surface p-6 md:grid-cols-2"
    >
      <Carrusel images={images} />
      <div className="flex flex-col justify-center gap-3">
        <span className="font-body text-xs uppercase tracking-widest text-accent">
          {category}
        </span>
        <h3 className="font-display text-2xl text-foreground">{name}</h3>
        <p className="text-sm text-text-secondary">{role}</p>
        <p className="text-sm text-text-muted">{description}</p>
        <a
          href={getWhatsappLink(contact)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block w-fit rounded-md bg-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-opacity hover:opacity-90"
        >
          Agenda una cita
        </a>
      </div>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="flex flex-col gap-8">
      <ArtistCard
        id="peluqueria"
        category="Barbería"
        name="Mateo"
        role="Barbero & Especialista en Fades"
        description="Cortes precisos, fades limpios y un estilo adaptado a cada cliente. Mateo se enfoca en los detalles para que cada corte tenga un acabado impecable."
        images={[
          "https://picsum.photos/seed/rcstudio-mateo-1/600/600",
          "https://picsum.photos/seed/rcstudio-mateo-2/600/600",
          "https://picsum.photos/seed/rcstudio-mateo-3/600/600",
        ]}
        contact={siteConfig.contacts.cortes}
      />
      <ArtistCard
        id="tattoo"
        category="Tattoo"
        name="Cando"
        role="Tattoo Artist"
        description="Diseños personalizados, líneas precisas y atención al detalle. Cando transforma tus ideas en tatuajes pensados para representar tu estilo."
        images={[
          "https://picsum.photos/seed/rcstudio-cando-1/600/600",
          "https://picsum.photos/seed/rcstudio-cando-2/600/600",
          "https://picsum.photos/seed/rcstudio-cando-3/600/600",
        ]}
        contact={siteConfig.contacts.tattoo}
      />
    </div>
  );
}
