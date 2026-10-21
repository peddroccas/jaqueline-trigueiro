import Image from "next/image";
import { services, servicesSection, type Service } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { WhatsappLink } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ForWho({ text }: { text: string }) {
  return (
    <p className="text-[0.9375rem] leading-snug text-muted">
      <span className="eyebrow mr-2 text-gold">Para quem</span>
      {text.replace(/^Para quem /, "")}
    </p>
  );
}

function FeaturedService({ service }: { service: Service }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-cha">
      {service.image && (
        <div className="relative aspect-[2/1] overflow-hidden">
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
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <ForWho text={service.forWho} />
        <h3 className="mt-4 font-display text-[2rem] leading-tight font-medium text-ink sm:text-4xl">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-ink/85">{service.description}</p>
        {service.details && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Inclui">
            {service.details.map((detail) => (
              <li key={detail} className="rounded-full border border-cha-deep bg-paper/60 px-3.5 py-1.5 text-sm text-ink">
                {detail}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
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

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.featured.map((service) => (
            <FeaturedService key={service.id} service={service} />
          ))}
        </div>

        <ol className="mt-10 border-t border-cha-deep">
          {services.more.map((service, index) => (
            <li
              key={service.id}
              className="grid gap-x-8 gap-y-2 border-b border-cha-deep py-7 md:grid-cols-[4rem_1.1fr_1.4fr_auto] md:items-center"
            >
              <span aria-hidden className="font-display text-3xl text-gold">
                {String(index + 3).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[1.75rem] leading-tight font-medium text-ink">{service.title}</h3>
                <div className="mt-1.5">
                  <ForWho text={service.forWho} />
                </div>
              </div>
              <p className="leading-relaxed text-ink/85">{service.description}</p>
              <WhatsappLink
                location={`servico-${service.id}`}
                message={service.message}
                className="text-ink decoration-gold hover:text-gold md:justify-self-end"
              >
                Agendar
                <span className="sr-only"> {service.title.toLowerCase()}</span>
              </WhatsappLink>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
