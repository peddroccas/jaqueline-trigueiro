import { faq } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { PlusIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="bg-cha py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="duvidas-title" eyebrow={faq.eyebrow} title={faq.title} />
          <div className="mt-10 hidden lg:block">
            <MoreQuestions />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-cha-deep border-y border-cha-deep">
            {faq.items.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left">
                  <span className="font-display text-2xl leading-snug font-medium text-ink sm:text-[1.75rem]">{item.question}</span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform group-open:rotate-45 group-open:bg-paper motion-reduce:transition-none">
                    <PlusIcon className="size-5" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-lg leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 lg:hidden">
            <MoreQuestions />
          </div>
        </div>
      </Container>
    </section>
  );
}

function MoreQuestions() {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{faq.moreTitle}</p>
      <p className="mt-2 text-muted">{faq.moreText}</p>
      <CtaButton location="duvidas" message="doubt" className="mt-5 w-full sm:w-auto" />
    </div>
  );
}
