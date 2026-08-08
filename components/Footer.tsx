import { siteConfig } from "@/lib/site-config";
import { getWhatsappLink } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#top" },
  { name: "Peluquería", href: "#peluqueria" },
  { name: "Tattoo", href: "#tattoo" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <a href="#top" className="font-display text-xl text-foreground">
            RC<span className="text-accent">STUDIO</span>
          </a>

          <p className="mt-3 max-w-xs text-sm text-text-muted">
            Cortes, fades y tatuajes en un mismo espacio. Estilo con identidad,
            cita a cita.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-text-muted">
            Navegación
          </h3>

          <ul className="mt-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs uppercase tracking-widest text-text-muted">
            Contacto
          </h3>

          <ul className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Carlos+Reyes+Lerena+5986+Montevideo"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {siteConfig.business.address}
              </a>
            </li>

            <li>
              <a
                href={getWhatsappLink(siteConfig.contacts.cortes)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Agendar corte
              </a>
            </li>

            <li>
              <a
                href={getWhatsappLink(siteConfig.contacts.tattoo)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Consultar tattoo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4">
        <p className="mx-auto max-w-6xl text-center text-xs text-text-muted">
          © {year} {siteConfig.business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
