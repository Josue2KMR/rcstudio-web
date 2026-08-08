"use client";

import { useState } from "react";

const navItems = [
  { name: "Inicio", href: "#top" },
  { name: "Peluquería", href: "#peluqueria" },
  { name: "Tattoo", href: "#tattoo" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-foreground"
        >
          RC<span className="text-accent">STUDIO</span>
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-foreground md:hidden"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          )}
        </button>

        <ul className="hidden gap-8 font-body text-sm uppercase tracking-wide text-foreground md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 border-t border-border bg-background px-4 py-4 font-body text-sm uppercase tracking-wide text-foreground md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
