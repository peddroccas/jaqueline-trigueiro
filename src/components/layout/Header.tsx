import Image from "next/image";
import { brand, nav } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cha-deep bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a href="#inicio" className="shrink-0 rounded-sm" aria-label={`${brand.name} — início`}>
          <Image
            src={brand.logo.src}
            width={brand.logo.width}
            height={brand.logo.height}
            alt=""
            preload
            sizes="140px"
            className="h-14 w-auto lg:h-16"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-12 items-center text-[0.9375rem] text-muted transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton location="header" className="px-5 max-md:hidden" />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
