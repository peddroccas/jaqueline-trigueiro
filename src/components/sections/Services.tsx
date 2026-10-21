import Image from "next/image";
import { services, servicesSection, type Service } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { WhatsappLink } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

function FeaturedService({ service }: { service: Service }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-cha">
      {service.image && (
        <div className="aspect-[16/7] overflow-hidden bg-cha-deep">
          <Image
            src={service.image.src}
            width={service.image.width}
            height={service.image.height}
            alt={service.image.alt}
            sizes="(min-width: 768px) 46vw, 92vw"
            className="size-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col px-6 pt-6 pb-3 lg:px-7 lg:pt-7 lg:pb-4">
        <h3 className="font-display text-[1.875rem] leading-tight font-medium text-ink lg:text-[2.125rem]">{service.title}</h3>
        <p className="mt-1.5 font-display text-xl leading-snug text-gold italic">{service.forWho}</p>
        <p className="mt-3 leading-relaxed text-ink/85">{service.description}</p>
        {service.details && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Inclui">
            {service.details.map((detail) => (
              <li key={detail} className="rounded-full border border-cha-deep bg-paper/70 px-3.5 py-1 text-sm text-ink">
                {detail}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-2">
          <WhatsappLink location={`servico-${service.id}`} message={service.message} className="text-ink decoration-gold hover:text-gold">
            {service.linkLabel}
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading id="servicos-title" {...servicesSection} />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.featured.map((service) => (
            <FeaturedService key={service.id} service={service} />
          ))}
        </div>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {services.more.map((service) => (
            <li key={service.id} className="flex flex-col rounded-[var(--radius-card)] border border-cha-deep bg-white px-6 pt-6 pb-3">
              <h3 className="font-display text-[1.625rem] leading-tight font-medium text-ink">{service.title}</h3>
              <p className="mt-1.5 font-display text-lg leading-snug text-gold italic">{service.forWho}</p>
              <p className="mt-3 leading-relaxed text-ink/85">{service.description}</p>
              <div className="mt-auto pt-1">
                <WhatsappLink location={`servico-${service.id}`} message={service.message} className="text-ink decoration-gold hover:text-gold">
                  {service.linkLabel}
                </WhatsappLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
