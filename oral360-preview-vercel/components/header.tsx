"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, whatsappUrl } from "@/lib/clinic";
import { Brand } from "./ui";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1100px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    media.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", escape);
      media.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          aria-label="Oral 360 — início"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          aria-label="Navegação principal"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="header-cta"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar avaliação <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (WhatsApp, nova aba)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
