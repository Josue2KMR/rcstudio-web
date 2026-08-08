import { siteConfig } from "@/lib/site-config";

const diasOrden = ["Sabado", "Domingo"] as const;

export function ServiceCard() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto flex max-w-6xl flex-col itmes-center gap-10 md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4698.666759230005!2d-56.103599!3d-34.841904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8759de7b770f%3A0x2f3cab6bf1747086!2sCarlos%20Reyes%20Lerena%205986%2C%2013000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e1!3m2!1ses-419!2suy!4v1786221781854!5m2!1ses-419!2suy"
            width="400"
            height="300"
            style={{ border: 0 }}
            className="h-[300px] w-full md:h-full md:min-h-[320px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="w-full md:w-1/2">
          <span className="font-body text-xs uppercase tracking-widest text-accent">
            Solo findes
          </span>
          <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
            Horarios de <span className="text-accent">atención</span>
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Abrimos sábados y domingos. Fuera de ese horario, coordiná tu turno
            por WhatsApp.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {diasOrden.map((dia) => {
              const info = siteConfig.horarios.dias[dia];
              return (
                <div
                  key={dia}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <p className="font-body text-xs uppercase tracking-wide text-text-muted">
                    {dia}
                  </p>
                  <p className="mt-1 font-display text-lg text-foreground">
                    {info.Abierto ?? "Cerrado"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
