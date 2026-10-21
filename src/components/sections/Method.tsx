import { method } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { BrowArc } from "@/components/ui/Icons";

export function Method() {
  return (
    <section id="metodo" aria-labelledby="metodo-title" className="bg-cha py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-gold">{method.eyebrow}</p>
          <blockquote className="relative mt-6">
            <BrowArc className="mb-5 h-8 w-40 text-gold" />
            <p className="font-display text-[2.125rem] leading-[1.12] font-medium text-balance text-ink italic sm:text-5xl">
              “{method.quote}”
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <h2 id="metodo-title" className="font-display text-3xl leading-tight font-medium text-ink sm:text-4xl">
            {method.title}
          </h2>
          <ol className="mt-8 space-y-px overflow-hidden rounded-[var(--radius-card)] border border-cha-deep bg-cha-deep">
            {method.steps.map((step, index) => (
              <li key={step.title} className="flex gap-5 bg-paper p-6 sm:gap-6 sm:p-7">
                <span
                  aria-hidden
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-xl text-gold"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <CtaButton location="metodo" className="mt-8 w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
