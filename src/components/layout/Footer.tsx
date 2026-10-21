import Image from "next/image";
import { brand, contact, nav } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/whatsapp";

const linkClass = "inline-flex min-h-11 items-center hover:text-gold";

export function Footer() {
  const { address } = contact;
  return (
    <footer className="border-t border-cha-deep bg-cha text-muted">
      <Container className="grid gap-10 pt-14 pb-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={brand.logo.src}
            width={brand.logo.width}
            height={brand.logo.height}
            alt={brand.logo.alt}
            sizes="220px"
            className="h-auto w-52"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {brand.role} na {address.district}, {address.city} — {address.state}.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="eyebrow text-gold">Navegação</p>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-gold">Contato</p>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-cta="rodape" className={linkClass}>
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {contact.instagram.handle}
              </a>
            </li>
            <li className="pt-2 text-sm leading-relaxed">
              {address.street}
              <br />
              {address.district}, {address.city} — {address.state}
            </li>
          </ul>
        </div>

        <p className="border-t border-cha-deep pt-6 text-sm md:col-span-3">© {brand.name}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
