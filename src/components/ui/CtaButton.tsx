import { primaryCta, type WhatsappMessageKey } from "@/content/site";
import clsx from "@/lib/clsx";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowIcon, WhatsappIcon } from "./Icons";

type Props = {
  location: string;
  message?: WhatsappMessageKey;
  className?: string;
};

/* Ação principal do site: único elemento com a cor de destaque preenchida. */
export function CtaButton({ location, message = "default", className }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      className={clsx(
        "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-base font-medium text-ink shadow-[var(--shadow-cta)] transition-colors hover:bg-accent-hover motion-reduce:transition-none",
        className,
      )}
    >
      <WhatsappIcon className="size-5 shrink-0" />
      {primaryCta.label}
    </a>
  );
}

/* Ação secundária em estilo de link, para os cartões de serviço */
export function WhatsappLink({
  location,
  message,
  children,
  className,
}: {
  location: string;
  message: WhatsappMessageKey;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      className={clsx(
        "group inline-flex min-h-12 items-center gap-2 font-medium underline decoration-1 underline-offset-[6px] transition-colors motion-reduce:transition-none",
        className,
      )}
    >
      {children}
      <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
      <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </a>
  );
}
