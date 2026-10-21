// Todo o conteúdo do site. Os componentes só leem daqui.
// Marcadores "[A CONFIRMAR: ...]" são dados que a cliente ainda precisa enviar (ver docs/briefing.md, seção 16).

// [A CONFIRMAR: domínio do site] — a cliente ainda não tem domínio.
export const SITE_URL = "https://dominio-a-confirmar.com.br";

export const brand = {
  name: "Jaqueline Trigueiro",
  role: "Designer de sobrancelhas e micropigmentadora",
  logo: {
    src: "/images/jaqueline-trigueiro-logo.png",
    width: 828,
    height: 440,
    alt: "Jaqueline Trigueiro — Designer de sobrancelhas, micropigmentação e depilação",
  },
};

export const contact = {
  whatsapp: "5561984537188",
  whatsappDisplay: "(61) 98453-7188",
  phoneHref: "tel:+5561984537188",
  email: "jaquelinetrigueiro0@gmail.com",
  instagram: {
    handle: "@jaqueline.trigueiro",
    url: "https://www.instagram.com/jaqueline.trigueiro",
  },
  address: {
    street: "QNM 19, Conjunto C, Lote 47, Sala 105",
    district: "Ceilândia Sul",
    city: "Ceilândia",
    state: "DF",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("QNM 19 Conjunto C Lote 47, Ceilândia Sul, Ceilândia - DF"),
  hours: "Das 8h às 20h",
  // [A CONFIRMAR: dias de atendimento] — não exibido no site até a cliente informar.
  regions: "Distrito Federal e Goiás",
};

// Mesmo texto em todos os botões principais do site.
export const primaryCta = {
  label: "Agendar pelo WhatsApp",
};

// Mensagens pré-preenchidas por ponto de entrada (a validar com a cliente).
export const whatsappMessages = {
  default: "Olá, Jaqueline! Vi seu site e gostaria de agendar um horário.",
  doubt: "Olá, Jaqueline! Tenho uma dúvida antes de agendar.",
  design: "Olá, Jaqueline! Gostaria de agendar um design de sobrancelhas.",
  micropigmentacao: "Olá, Jaqueline! Tenho interesse em micropigmentação de sobrancelhas.",
  browLamination: "Olá, Jaqueline! Gostaria de agendar um brow lamination.",
  labial: "Olá, Jaqueline! Tenho interesse em micropigmentação labial.",
  depilacao: "Olá, Jaqueline! Gostaria de agendar uma depilação.",
} as const;

export type WhatsappMessageKey = keyof typeof whatsappMessages;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Antes e depois", href: "#resultados" },
  { label: "Como trabalho", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Espaço", href: "#espaco" },
  { label: "Contato", href: "#contato" },
];

export const seo = {
  title: "Design de Sobrancelhas e Micropigmentação em Ceilândia (DF) | Jaqueline Trigueiro",
  description:
    "Design de sobrancelhas com e sem henna, micropigmentação fio a fio, micropigmentação labial, brow lamination e depilação na Ceilândia Sul (DF). 17 anos de experiência. Agende pelo WhatsApp.",
};

export const hero = {
  eyebrow: "Sobrancelhas · Micropigmentação · Ceilândia Sul",
  slogan: "Tirar pelo de sobrancelha todos conseguem, saber qual pelo tirar é o meu diferencial.",
  titleStart: "Design de sobrancelhas",
  titleEmphasis: "e micropigmentação",
  titleEnd: "em Ceilândia, DF",
  subtitle:
    "Sobrancelhas desenhadas à mão livre para combinar com o seu rosto, por quem faz isso há 17 anos. Eu respeito os seus pelos e o seu desenho natural; você só precisa fechar os olhos e confiar.",
  secondaryLink: { label: "Ver antes e depois", href: "#resultados" },
  trust: ["17 anos de experiência", "Clientes que me acompanham desde o início", "Ceilândia Sul, das 8h às 20h"],
  image: {
    src: "/images/resultado-sobrancelha-perfil.jpg",
    width: 900,
    height: 1600,
    alt: "Cliente deitada na maca com as sobrancelhas recém-finalizadas por Jaqueline Trigueiro",
  },
  imageCaption: { title: "Resultado real", detail: "Design de sobrancelhas · Ceilândia Sul" },
};

type Photo = { src: string; width: number; height: number; alt: string };

export type Service = {
  id: string;
  title: string;
  forWho: string;
  description: string;
  details?: string[];
  linkLabel: string;
  message: WhatsappMessageKey;
  image?: Photo;
};

export const services: { featured: Service[]; more: Service[] } = {
  featured: [
    {
      id: "design",
      title: "Design de sobrancelhas",
      forWho: "Para quem quer a sobrancelha alinhada sem perder a naturalidade.",
      description:
        "À mão livre, com limpeza na linha e acabamento na pinça. Mantenho o seu desenho natural e tiro só o que precisa sair, do jeito que você deseja.",
      details: ["Com henna", "Sem henna", "Tintura de sobrancelha"],
      linkLabel: "Agendar design",
      message: "design",
      image: {
        src: "/images/sobrancelha-3-depois.jpg",
        width: 1200,
        height: 588,
        alt: "Sobrancelhas alinhadas e preenchidas depois do atendimento",
      },
    },
    {
      id: "micropigmentacao",
      title: "Micropigmentação de sobrancelhas",
      forWho: "Para quem quer acordar com a sobrancelha pronta, sem precisar de maquiagem.",
      description:
        "Tenho formação avançada em fio a fio. Antes de pigmentar, faço o design e as medições para encontrar a simetria do seu rosto, escolhemos juntas a cor e você aprova o desenho. Só então começo, com anestésico.",
      details: ["Técnica fio a fio", "Desenho aprovado por você", "Com anestésico"],
      linkLabel: "Agendar micropigmentação",
      message: "micropigmentacao",
      image: {
        src: "/images/sobrancelha-1-depois.jpg",
        width: 1200,
        height: 588,
        alt: "Sobrancelhas pigmentadas com desenho definido e cor uniforme",
      },
    },
  ],
  more: [
    {
      id: "brow-lamination",
      title: "Brow lamination",
      forWho: "Para quem quer os fios alinhados e penteados todos os dias.",
      description: "Os fios são alinhados e direcionados para a sobrancelha ficar uniforme e com aparência mais cheia.",
      linkLabel: "Agendar brow lamination",
      message: "browLamination",
    },
    {
      id: "micropigmentacao-labial",
      title: "Micropigmentação labial",
      forWho: "Para quem quer lábios com mais cor e contorno definido.",
      description: "Pigmentação dos lábios com uma cor escolhida junto com você, para combinar com o seu tom.",
      linkLabel: "Agendar micropigmentação labial",
      message: "labial",
    },
    {
      id: "depilacao",
      title: "Depilação de corpo inteiro",
      forWho: "Para quem quer cuidar da depilação com quem já cuida da sua sobrancelha.",
      description: "Epilação de corpo inteiro, com o mesmo cuidado e os mesmos 17 anos de experiência.",
      linkLabel: "Agendar depilação",
      message: "depilacao",
    },
  ],
};

export const servicesSection = {
  eyebrow: "Serviços",
  title: "O que você procura hoje?",
  intro:
    "Sobrancelhas são a minha especialidade há 17 anos. Escolha o que você procura e me chame no WhatsApp: eu te ajudo a decidir o melhor para o seu rosto.",
};

// [A CONFIRMAR: qual serviço aparece em cada foto] — por enquanto as legendas dizem só a região.
export const results = {
  eyebrow: "Antes e depois",
  title: "Antes e depois de clientes reais",
  intro: "Cada sobrancelha é desenhada para o rosto de quem está na maca. Veja alguns trabalhos meus. O resultado varia de pessoa para pessoa.",
  ctaNote: "Gostou? Me conte no WhatsApp o que você quer para a sua sobrancelha.",
  pairs: [
    { id: "sobrancelha-1", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de pele clara" },
    { id: "sobrancelha-2", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de pele negra" },
    { id: "sobrancelha-3", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de cabelos escuros" },
    { id: "labios-1", label: "Lábios", alt: "lábios de uma cliente" },
  ],
  more: [
    {
      src: "/images/resultado-labios-sobrancelha.jpg",
      width: 1407,
      height: 1220,
      alt: "Cliente com lábios pigmentados e sobrancelhas desenhadas",
    },
    {
      src: "/images/resultado-sobrancelha-rosto.jpg",
      width: 1200,
      height: 1600,
      alt: "Cliente sorrindo na maca com as sobrancelhas finalizadas",
    },
    {
      src: "/images/resultado-sobrancelha-olhos-fechados.jpg",
      width: 1600,
      height: 866,
      alt: "Sobrancelhas finalizadas vistas de frente, com os olhos fechados",
    },
  ] satisfies Photo[],
};

export const method = {
  eyebrow: "Como eu trabalho",
  quote: "Quero que você tenha a confiança de fechar os olhos e saber que vai sair com uma sobrancelha bem feita.",
  title: "Do primeiro contato ao desenho aprovado",
  steps: [
    {
      title: "Você me chama no WhatsApp",
      text: "Me conta o que você deseja e já combinamos o melhor horário para você.",
    },
    {
      title: "Avalio o seu desenho natural",
      text: "Observo a sobrancelha original, a quantidade de pelos e o formato do seu rosto.",
    },
    {
      title: "Marcações e medições",
      text: "Encontro a simetria de acordo com o seu rosto. Na micropigmentação, escolho com você uma cor que combine.",
    },
    {
      title: "Você aprova antes de começar",
      text: "Na micropigmentação, a pele é preparada e a pigmentação só começa com o anestésico em efeito.",
    },
  ],
};

export const about = {
  eyebrow: "Sobre mim",
  title: "Prazer, eu sou a Jaqueline",
  paragraphs: [
    "Há 17 anos cuido de sobrancelhas e depilação, e há 12 também faço micropigmentação. Nesse tempo aprendi que cada rosto pede um desenho diferente, e é isso que eu busco em cada atendimento.",
    "Muitas clientes estão comigo desde o começo. Acho que é porque aqui ninguém é atendida com pressa: eu escuto o que você deseja, explico cada etapa e você aprova o desenho antes de começar.",
    "Meu compromisso é com a sua segurança e com o que você sonhou para a sua sobrancelha. Aqui você pode confiar.",
  ],
  stats: [
    { value: "17", unit: "anos", label: "de design de sobrancelhas e depilação" },
    { value: "12", unit: "anos", label: "de micropigmentação" },
  ],
  educationTitle: "Formação e especializações",
  education: [
    { course: "Design de sobrancelhas e depilação", school: "Instituto Embeleze" },
    { course: "Micropigmentação básica", school: "Ciclos Estética" },
    { course: "Micropigmentação avançada em fio a fio", school: "IESE Goiânia" },
  ],
  // [A CONFIRMAR: foto profissional da Jaqueline] — sem foto, a seção usa o logotipo.
};

export const space = {
  eyebrow: "O espaço",
  title: "Onde eu atendo",
  text: "Atendo com hora marcada na minha sala na Ceilândia Sul, para você ser atendida com calma. Recebo clientes de todo o Distrito Federal e de Goiás.",
  image: {
    src: "/images/espaco-atendimento.jpg",
    width: 1200,
    height: 1600,
    alt: "Sala de atendimento com poltrona, maca, espelho redondo e papel de parede floral",
  },
  mapsLabel: "Como chegar",
};

export const faq = {
  eyebrow: "Dúvidas",
  title: "Antes de agendar",
  items: [
    {
      question: "A micropigmentação dói?",
      answer:
        "Antes de pigmentar, a pele é preparada e recebe anestésico. A pigmentação só começa com o anestésico em efeito. A sensibilidade varia de pessoa para pessoa.",
    },
    {
      question: "A epilação com linha dói?",
      answer:
        "A linha é usada na limpeza da sobrancelha, antes do design com pinça. A sensação varia de pessoa para pessoa. Se você tiver receio, me conte no WhatsApp antes de agendar.",
    },
    {
      question: "A minha sobrancelha vai ficar artificial?",
      answer:
        "O desenho respeita a sua sobrancelha original, a quantidade de pelos e o formato do seu rosto. Na micropigmentação, você aprova o desenho antes de qualquer pigmentação.",
    },
    {
      question: "Você trabalha com a técnica que eu quero?",
      answer:
        "Na micropigmentação, a técnica é escolhida de acordo com a necessidade da sua sobrancelha e o seu gosto. Se você procura uma técnica específica, pergunte pelo WhatsApp antes de agendar.",
    },
    {
      question: "Quanto custa?",
      answer:
        "O valor depende do serviço e do que a sua sobrancelha precisa. Me chame no WhatsApp que eu te passo os valores.",
    },
    {
      question: "Como faço para agendar?",
      answer: "O agendamento é pelo WhatsApp (61) 98453-7188. Atendo das 8h às 20h.",
    },
    {
      question: "Atende quem vem de outras cidades?",
      answer:
        "Sim. O atendimento é presencial, na Ceilândia Sul, e recebo clientes do Distrito Federal e de Goiás.",
    },
  ],
  moreTitle: "Ficou com alguma dúvida?",
  moreText: "Me chame no WhatsApp. Prefiro tirar todas as suas dúvidas antes de você agendar.",
};

export const contactSection = {
  eyebrow: "Agendamento",
  title: "Vamos marcar o seu horário?",
  text: "É só me chamar no WhatsApp, dizer qual serviço você quer e o melhor dia para você. Eu respondo e deixamos tudo combinado.",
};
