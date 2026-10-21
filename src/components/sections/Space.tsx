import Image from "next/image";
import { contact, space } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ArrowIcon, PinIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Space() {
  const { address } = contact;
  return (
    <section id="espaco" aria-labelledby="espaco-title" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <div className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-t-full border border-cha-deep bg-cha">
            <Image
              src={space.image.src}
              width={space.image.width}
              height={space.image.height}
              alt={space.image.alt}
              sizes="(min-width: 768px) 28rem, 90vw"
              className="size-full object-cover object-[50%_60%]"
            />
          </div>
        </div>

        <div>
          <SectionHeading id="espaco-title" eyebrow={space.eyebrow} title={space.title} intro={space.text} />
          <address className="mt-8 flex gap-4 rounded-[var(--radius-card)] bg-cha p-6 not-italic">
            <PinIcon className="mt-0.5 size-6 shrink-0 text-gold" />
            <span className="leading-relaxed text-ink">
              {address.street}
              <br />
              {address.district}, {address.city} — {address.state}
            </span>
          </address>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center gap-2 font-medium text-ink underline decoration-gold decoration-1 underline-offset-[6px] hover:text-gold"
          >
            {space.mapsLabel}
            <span className="sr-only"> (abre o Google Maps em nova aba)</span>
            <ArrowIcon className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
