import Image from "next/image";
import { about } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="mx-auto w-full max-w-sm lg:col-span-5">
          {/* Sem zoom: o arquivo tem 722 px de largura e perde nitidez se ampliado */}
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white bg-cha-deep shadow-[var(--shadow-soft)]">
            <Image
              src={about.photo.src}
              width={about.photo.width}
              height={about.photo.height}
              alt={about.photo.alt}
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="size-full object-cover object-top"
            />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-6xl leading-none text-gold sm:text-7xl">{stat.value}</span>
                  <span className="ml-1.5 font-display text-2xl text-gold">{stat.unit}</span>
                  <span className="mt-2 block text-sm leading-snug text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <SectionHeading id="sobre-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/85">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 max-w-2xl rounded-[var(--radius-card)] border border-cha-deep bg-white p-6 sm:p-7">
            <h3 className="font-display text-2xl text-ink">{about.educationTitle}</h3>
            <ul className="mt-4 divide-y divide-cha-deep">
              {about.education.map((item) => (
                <li key={item.course} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold-line" />
                  <span>
                    <span className="block font-medium text-ink">{item.course}</span>
                    <span className="block text-muted">{item.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CtaButton location="sobre" className="mt-10 w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
