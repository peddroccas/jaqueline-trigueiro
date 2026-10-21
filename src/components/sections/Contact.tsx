import { contact, contactSection } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { ClockIcon, InstagramIcon, MailIcon, PinIcon, WhatsappIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

const linkClass = "inline-flex min-h-11 items-center text-lg text-ink underline decoration-gold-line decoration-1 underline-offset-[6px] hover:text-gold";

export function Contact() {
  const { address } = contact;
  const items = [
    {
      icon: WhatsappIcon,
      label: "WhatsApp",
      content: (
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-cta="contato-numero" className={linkClass}>
          {contact.whatsappDisplay}
        </a>
      ),
    },
    {
      icon: ClockIcon,
      label: "Horário",
      content: <p className="text-lg text-ink">{contact.hours}</p>,
    },
    {
      icon: PinIcon,
      label: "Endereço",
      content: (
        <div>
          <p className="text-lg leading-relaxed text-ink">
            {address.street}
            <br />
            {address.district}, {address.city} — {address.state}
          </p>
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Abrir no Google Maps
          </a>
        </div>
      ),
    },
    {
      icon: MailIcon,
      label: "E-mail",
      content: (
        <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
          {contact.email}
        </a>
      ),
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      content: (
        <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {contact.instagram.handle}
        </a>
      ),
    },
  ];

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contato-title"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            intro={contactSection.text}
          />
          <CtaButton location="contato" className="mt-8 w-full sm:w-auto" />
        </div>

        <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-cha-deep bg-cha-deep shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:col-span-7">
          {items.map(({ icon: Icon, label, content }, index) => (
            <div key={label} className={`bg-white p-6 sm:p-7 ${index === items.length - 1 && items.length % 2 === 1 ? "sm:col-span-2" : ""}`}>
              <dt className="flex items-center gap-2.5">
                <Icon className="size-5 text-gold" />
                <span className="eyebrow text-gold">{label}</span>
              </dt>
              <dd className="mt-3">{content}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
