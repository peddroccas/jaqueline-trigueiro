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
  days: "[A CONFIRMAR: dias de atendimento]",
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
    "Design de sobrancelhas com e sem henna, micropigmentação de sobrancelhas e labial, brow lamination e depilação na Ceilândia Sul (DF). 17 anos de experiência. Agende pelo WhatsApp.",
};

export const hero = {
  eyebrow: "Designer de sobrancelhas · Ceilândia Sul",
  slogan: "Tirar pelo de sobrancelha todos conseguem, saber qual pelo tirar é o meu diferencial.",
  titleStart: "Design de sobrancelhas",
  titleEmphasis: "e micropigmentação",
  titleEnd: "em Ceilândia, DF",
  subtitle:
    "Há 17 anos desenho sobrancelhas à mão livre, respeitando o seu desenho natural, a quantidade de pelos e o formato do seu rosto.",
  secondaryLink: { label: "Ver antes e depois", href: "#resultados" },
  trust: ["17 anos de experiência", "Atendimento presencial na Ceilândia Sul", "Das 8h às 20h"],
  image: {
    src: "/images/resultado-sobrancelha-perfil.jpg",
    width: 900,
    height: 1600,
    alt: "Cliente deitada na maca com as sobrancelhas recém-finalizadas por Jaqueline Trigueiro",
  },
  imageCaption: { title: "Trabalho de Jaqueline Trigueiro", detail: "Sobrancelhas · Ceilândia Sul" },
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
      forWho: "Para quem quer a sobrancelha alinhada sem perder o desenho natural.",
      description:
        "Feito à mão livre: a limpeza é com epilação com linha e o design, com pinça. Respeito o desenho original, a quantidade de pelos e o que você deseja.",
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
      forWho: "Para quem quer acordar com a sobrancelha desenhada, sem preencher com maquiagem.",
      description:
        "Começa pelo design e por medições que buscam a simetria do seu rosto. A cor é escolhida para combinar com você, e a pigmentação só começa depois que você aprova o desenho, com anestésico.",
      details: ["Medição e simetria", "Desenho aprovado por você", "Com anestésico"],
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
      forWho: "Para quem quer os fios alinhados e penteados.",
      description: "Técnica que alinha e direciona os fios da sobrancelha.",
      linkLabel: "Agendar brow lamination",
      message: "browLamination",
    },
    {
      id: "micropigmentacao-labial",
      title: "Micropigmentação labial",
      forWho: "Para quem quer mais cor e definição nos lábios.",
      description: "Pigmentação dos lábios com uma cor escolhida para combinar com você.",
      linkLabel: "Agendar micropigmentação labial",
      message: "labial",
    },
    {
      id: "depilacao",
      title: "Depilação de corpo inteiro",
      forWho: "Para quem quer cuidar da depilação com quem já cuida da sua sobrancelha.",
      description: "Epilação de corpo inteiro, com 17 anos de experiência na área.",
      linkLabel: "Agendar depilação",
      message: "depilacao",
    },
  ],
};

export const servicesSection = {
  eyebrow: "Serviços",
  title: "O que você procura hoje?",
  intro:
    "Sobrancelhas são a minha especialidade. Escolha o serviço e me chame no WhatsApp para agendar.",
};

// [A CONFIRMAR: qual serviço aparece em cada foto] — por enquanto as legendas dizem só a região.
export const results = {
  eyebrow: "Antes e depois",
  title: "Antes e depois, feitos aqui",
  intro: "Fotos de clientes atendidas pela Jaqueline. O resultado varia de pessoa para pessoa.",
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
      text: "Conta o que deseja para a sua sobrancelha e escolhemos juntas o melhor horário.",
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
  eyebrow: "Sobre a Jaqueline",
  title: "Prazer, eu sou a Jaqueline",
  paragraphs: [
    "Trabalho com design de sobrancelhas e depilação há 17 anos e, há 12, também com micropigmentação. Escolhi esta profissão para poder organizar meus horários de acordo com a rotina da minha família.",
    "Tenho clientes que me acompanham desde que comecei. Em cada atendimento, dedico o tempo necessário para entender o que você deseja e entregar um serviço de qualidade.",
    "Meu foco é você se sentir segura do começo ao fim.",
  ],
  stats: [
    { value: "17", unit: "anos", label: "de design de sobrancelhas e depilação" },
    { value: "12", unit: "anos", label: "de micropigmentação" },
  ],
  educationTitle: "Formação e especializações",
  education: [
    "Curso de design de sobrancelhas e depilação",
    "Micropigmentação básica",
    "Micropigmentação avançada",
  ],
  // [A CONFIRMAR: foto profissional da Jaqueline] — sem foto, a seção usa o logotipo.
};

export const space = {
  eyebrow: "O espaço",
  title: "Onde eu atendo",
  text: "O atendimento é presencial, na minha sala na Ceilândia Sul. Recebo clientes de todo o Distrito Federal e de Goiás.",
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
      question: "Como faço para agendar?",
      answer: "O agendamento é pelo WhatsApp (61) 98453-7188. Atendo das 8h às 20h.",
    },
    {
      question: "Atende quem vem de outras cidades?",
      answer:
        "Sim. O atendimento é presencial, na Ceilândia Sul, e recebo clientes do Distrito Federal e de Goiás.",
    },
  ],
  moreTitle: "Não encontrou sua dúvida?",
  moreText: "Me chame no WhatsApp e pergunte antes de agendar.",
};

export const contactSection = {
  eyebrow: "Agendamento",
  title: "Agende seu horário",
  text: "O agendamento é feito pelo WhatsApp. Me conte qual serviço você procura e o melhor horário para você.",
};
