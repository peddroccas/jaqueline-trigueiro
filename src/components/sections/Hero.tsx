import Image from "next/image";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { BrowArc } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_85%_10%,var(--color-blush)_0%,var(--color-cha)_45%,var(--color-paper)_100%)]"
    >
      <Container className="relative grid gap-5 pt-4 pb-16 sm:gap-10 sm:pt-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-7">
          {/* No celular o sobretítulo sai: repetia o título e empurrava o botão para baixo */}
          <p className="eyebrow text-gold max-sm:hidden">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="font-display text-[2.25rem] leading-[1.04] font-medium text-balance text-ink sm:mt-5 sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            {hero.titleStart} <em className="font-medium text-gold">{hero.titleEmphasis}</em> {hero.titleEnd}
          </h1>
          <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-muted sm:mt-6 sm:text-xl">{hero.subtitle}</p>

          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-7">
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <a
              href={hero.secondaryLink.href}
              className="inline-flex min-h-12 items-center justify-center text-ink underline decoration-gold-line decoration-1 underline-offset-[6px] hover:text-gold"
            >
              {hero.secondaryLink.label}
            </a>
          </div>

          <ul className="mt-6 flex flex-col gap-2.5 border-t border-cha-deep pt-6 text-[0.9375rem] text-muted sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rotate-45 bg-gold-line" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Celular e tablet: foto no topo, larga e recortada no rosto. Desktop: arco à direita. */}
        <figure className="relative order-first w-full lg:order-none lg:col-span-5 lg:pl-6">
          <BrowArc className="absolute -top-8 -left-10 h-24 w-[115%] text-gold-line max-lg:hidden" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border-4 border-white bg-cha shadow-[var(--shadow-soft)] sm:aspect-[16/10] lg:aspect-[4/5] lg:rounded-none lg:rounded-t-full">
            <Image
              src={hero.image.src}
              width={hero.image.width}
              height={hero.image.height}
              alt={hero.image.alt}
              preload
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="size-full object-cover object-[40%_26%] lg:object-[50%_35%]"
            />
          </div>
          {/* Legenda abaixo da foto, sem cobrir o rosto nem as mãos */}
          <figcaption className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2 text-center lg:mt-4">
            <span className="font-display text-lg leading-tight text-ink">{hero.imageCaption.title}</span>
            <span className="text-sm text-muted">{hero.imageCaption.detail}</span>
          </figcaption>
        </figure>
      </Container>

      <Container className="relative pb-14 lg:pb-16">
        <blockquote className="mx-auto max-w-4xl text-center">
          <BrowArc className="mx-auto h-6 w-28 text-gold-line" />
          <p className="mt-4 font-display text-[1.75rem] leading-snug font-medium text-balance text-ink italic sm:text-4xl">
            “{hero.slogan}”
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
