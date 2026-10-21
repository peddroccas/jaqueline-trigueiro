// Junta classes ignorando valores vazios (evita instalar a dependência clsx).
export default function clsx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
