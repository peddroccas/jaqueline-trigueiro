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
      <Container className="relative grid gap-14 pt-10 pb-16 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-7">
          <p className="eyebrow text-gold">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-[2.6rem] leading-[1.02] font-medium text-balance text-ink sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            {hero.titleStart} <em className="font-medium text-gold">{hero.titleEmphasis}</em> {hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-7">
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <a
              href={hero.secondaryLink.href}
              className="inline-flex min-h-12 items-center justify-center text-ink underline decoration-gold-line decoration-1 underline-offset-[6px] hover:text-gold"
            >
              {hero.secondaryLink.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 border-t border-cha-deep pt-6 text-[0.9375rem] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden className="size-1.5 rotate-45 bg-gold-line" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:col-span-5 lg:max-w-none lg:pl-6">
          <BrowArc className="absolute -top-8 -left-6 h-24 w-[115%] text-gold-line lg:-left-10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-4 border-white bg-cha shadow-[var(--shadow-soft)]">
            <Image
              src={hero.image.src}
              width={hero.image.width}
              height={hero.image.height}
              alt={hero.image.alt}
              preload
              sizes="(min-width: 1024px) 34vw, 22rem"
              className="size-full object-cover object-[50%_35%]"
            />
          </div>
          <figcaption className="absolute -bottom-6 left-4 rounded-2xl border border-cha-deep bg-white/95 px-4 py-3 shadow-[var(--shadow-soft)] sm:left-0 lg:-left-4">
            <span className="block font-display text-lg leading-tight text-ink">{hero.imageCaption.title}</span>
            <span className="mt-0.5 block text-sm text-muted">{hero.imageCaption.detail}</span>
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
