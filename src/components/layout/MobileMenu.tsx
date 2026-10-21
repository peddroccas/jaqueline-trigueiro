"use client";

import { useEffect, useRef, useState } from "react";
import { contact, nav } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-12 items-center justify-center rounded-full text-ink hover:bg-cha"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      <nav
        id="menu-mobile"
        aria-label="Menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-cha-deep bg-paper px-5 pt-2 pb-6 shadow-[var(--shadow-soft)] sm:px-8"
      >
        <ul className="divide-y divide-cha-deep">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center font-display text-2xl text-ink hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <CtaButton location="menu-mobile" className="mt-5 w-full md:hidden" />
        <p className="mt-4 text-sm text-muted">
          WhatsApp {contact.whatsappDisplay} · {contact.hours}
        </p>
      </nav>
    </div>
  );
}
