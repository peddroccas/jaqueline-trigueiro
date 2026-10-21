import Image from "next/image";
import { results } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import clsx from "@/lib/clsx";

function Labeled({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <div className="relative aspect-[2/1] overflow-hidden bg-cha-deep">
      <Image src={src} width={1200} height={588} alt={alt} sizes="(min-width: 768px) 46vw, 92vw" className="size-full object-cover" />
      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-[0.14em] text-ink uppercase">
        {label}
      </span>
    </div>
  );
}

export function Results() {
  return (
    <section id="resultados" aria-labelledby="resultados-title" className="bg-cha py-14 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading id="resultados-title" eyebrow={results.eyebrow} title={results.title} intro={results.intro} />

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {results.pairs.map((pair) => (
            <li key={pair.id}>
              <figure className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)]">
                <div className="grid gap-0.5">
                  <Labeled label="Antes" src={`/images/${pair.id}-antes.jpg`} alt={`Antes: ${pair.alt}`} />
                  <Labeled label="Depois" src={`/images/${pair.id}-depois.jpg`} alt={`Depois: ${pair.alt}`} />
                </div>
                <figcaption className="px-5 py-4 font-display text-xl text-ink">{pair.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3" aria-label="Mais resultados">
          {results.more.map((photo, index) => (
            <li
              key={photo.src}
              className={clsx(
                "overflow-hidden rounded-[var(--radius-card)] bg-cha-deep",
                index === 2 ? "col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]",
              )}
            >
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                sizes="(min-width: 768px) 30vw, 46vw"
                className="size-full object-cover"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <CtaButton location="resultados" className="w-full sm:w-auto" />
          <p className="text-muted">{results.ctaNote}</p>
        </div>
      </Container>
    </section>
  );
}
