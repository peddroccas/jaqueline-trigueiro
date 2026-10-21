import clsx from "@/lib/clsx";
import { BrowArc } from "./Icons";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, intro, align = "left", className }: Props) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <BrowArc className={clsx("h-4 w-20 text-gold-line", align === "center" && "mx-auto")} />
      <p className="eyebrow mt-3 text-gold">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-display text-[2.125rem] leading-[1.08] font-medium text-balance text-ink sm:text-5xl lg:text-[3.25rem]"
      >
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
