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
  { label: "Sobre", href: "#sobre" },
  { label: "Como trabalho", href: "#metodo" },
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
    "Há 17 anos desenho sobrancelhas à mão livre, respeitando os seus pelos, o formato do seu rosto e o que você deseja.",
  secondaryLink: { label: "Ver antes e depois", href: "#resultados" },
  trust: ["17 anos de experiência", "Formação avançada em fio a fio", "Ceilândia Sul, das 8h às 20h"],
  image: {
    src: "/images/jaqueline-trigueiro-sala.jpg",
    width: 1200,
    height: 1500,
    alt: "Jaqueline Trigueiro sorrindo na sua sala de atendimento, em Ceilândia (DF)",
  },
  imageCaption: { title: "Jaqueline Trigueiro", detail: "Designer de sobrancelhas · Ceilândia Sul" },
};

type Photo = { src: string; width: number; height: number; alt: string; position?: string };

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
      forWho: "Para quem quer a sobrancelha alinhada, sem perder a naturalidade.",
      description:
        "Feito à mão livre: limpeza na linha e acabamento na pinça. Mantenho o seu desenho natural e tiro só o que precisa sair.",
      details: ["Com henna", "Sem henna", "Tintura de sobrancelha"],
      linkLabel: "Agendar design",
      message: "design",
      image: {
        src: "/images/resultado-sobrancelha-olhos-fechados.jpg",
        width: 1600,
        height: 866,
        alt: "Sobrancelhas alinhadas depois do design, vistas de frente com os olhos fechados",
      },
    },
    {
      id: "micropigmentacao",
      title: "Micropigmentação de sobrancelhas",
      forWho: "Para quem quer acordar com a sobrancelha pronta, sem precisar de maquiagem.",
      description:
        "Primeiro faço o design e as medições para a simetria do seu rosto. Depois escolhemos juntas a cor e você aprova o desenho. Só então começo, com anestésico.",
      details: ["Técnica fio a fio", "Desenho aprovado por você", "Com anestésico"],
      linkLabel: "Agendar micropigmentação",
      message: "micropigmentacao",
      image: {
        src: "/images/resultado-sobrancelha-perfil.jpg",
        width: 900,
        height: 1600,
        alt: "Sobrancelhas recém-pigmentadas, com fios desenhados e cor uniforme",
        position: "50% 42%",
      },
    },
  ],
  more: [
    {
      id: "brow-lamination",
      title: "Brow lamination",
      forWho: "Para quem quer fios alinhados e penteados.",
      description: "Alinha e direciona os fios para a sobrancelha parecer mais cheia e uniforme.",
      linkLabel: "Agendar brow lamination",
      message: "browLamination",
    },
    {
      id: "micropigmentacao-labial",
      title: "Micropigmentação labial",
      forWho: "Para quem quer lábios com mais cor e contorno definido.",
      description: "A cor é escolhida junto com você, para combinar com o seu tom de pele.",
      linkLabel: "Agendar micropigmentação labial",
      message: "labial",
    },
    {
      id: "depilacao",
      title: "Depilação de corpo inteiro",
      forWho: "Para quem quer uma depilação feita com calma e cuidado.",
      description: "Epilação de corpo inteiro, feita por quem trabalha com depilação há 17 anos.",
      linkLabel: "Agendar depilação",
      message: "depilacao",
    },
  ],
};

export const servicesSection = {
  eyebrow: "Serviços",
  title: "O que você procura hoje?",
  intro:
    "Sobrancelha é a minha especialidade. Escolha o serviço e me chame no WhatsApp. Se ficar em dúvida, eu te ajudo a escolher o que combina com você.",
};

// [A CONFIRMAR: qual serviço aparece em cada foto] — por enquanto as legendas dizem só a região.
export const results = {
  eyebrow: "Antes e depois",
  title: "Antes e depois de clientes reais",
  intro: "Cada sobrancelha é desenhada para o rosto da cliente. Veja alguns dos meus trabalhos (o resultado varia de pessoa para pessoa).",
  ctaNote: "Gostou? Me conte no WhatsApp o que você quer para a sua sobrancelha.",
  pairs: [
    { id: "sobrancelha-1", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de pele clara" },
    { id: "sobrancelha-2", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de pele negra" },
    { id: "sobrancelha-3", label: "Sobrancelhas", alt: "sobrancelhas de uma cliente de cabelos escuros" },
    { id: "labios-1", label: "Lábios", alt: "lábios de uma cliente" },
  ],
};

export const method = {
  eyebrow: "Como eu trabalho",
  quote: "Quero que você tenha a confiança de fechar os olhos e saber que vai sair com uma sobrancelha bem feita.",
  title: "Como é o seu atendimento",
  steps: [
    {
      title: "Você me chama no WhatsApp",
      text: "Você conta o que deseja e combinamos o melhor horário.",
    },
    {
      title: "Avalio a sua sobrancelha",
      text: "Olho o desenho natural, a quantidade de pelos e o formato do seu rosto.",
    },
    {
      title: "Faço o design",
      text: "Limpeza na linha e acabamento na pinça, tirando só o que precisa sair. Se você escolheu henna, tintura ou brow lamination, é aqui que entram.",
    },
  ],
  micro: {
    title: "Na micropigmentação, além disso:",
    items: [
      "Faço as medições para encontrar a simetria do seu rosto.",
      "Escolhemos juntas a cor que combina com você.",
      "Você aprova o desenho antes de qualquer pigmentação.",
      "A pigmentação só começa com o anestésico em efeito.",
    ],
  },
};

export const about = {
  eyebrow: "Sobre mim",
  title: "Prazer, eu sou a Jaqueline",
  paragraphs: [
    "São 17 anos cuidando de sobrancelhas e depilação e 12 com micropigmentação. Nesse tempo aprendi que cada rosto pede um desenho diferente.",
    "Tenho clientes que confiam em mim há muitos anos, porque aqui ninguém é atendida com pressa: eu escuto o que você quer e explico cada etapa.",
    "Meu compromisso é com a sua segurança e com a sobrancelha que você sonhou. Aqui você pode confiar.",
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
  photo: {
    src: "/images/jaqueline-trigueiro.jpg",
    width: 722,
    height: 863,
    alt: "Jaqueline Trigueiro, designer de sobrancelhas e micropigmentadora em Ceilândia (DF)",
  },
};

export const space = {
  eyebrow: "O espaço",
  title: "Atendimento na Ceilândia Sul",
  text: "Atendo com hora marcada, na minha sala, para você ser atendida com calma. Recebo clientes de todo o Distrito Federal e de Goiás.",
  image: {
    src: "/images/espaco-atendimento.jpg",
    width: 1200,
    height: 1600,
    alt: "Sala de atendimento com poltrona, maca, espelho redondo e papel de parede floral",
  },
  mapsLabel: "Como chegar",
};

export const faq = {
  eyebrow: "Dúvidas frequentes",
  title: "Antes de agendar",
  items: [
    {
      question: "A micropigmentação dói?",
      answer:
        "A pele recebe anestésico antes, e a pigmentação só começa com ele em efeito. A sensibilidade varia de pessoa para pessoa.",
    },
    {
      question: "A epilação com linha dói?",
      answer:
        "A linha é usada só na limpeza, antes do acabamento na pinça. A sensação varia de pessoa para pessoa; se você tiver receio, me conte no WhatsApp.",
    },
    {
      question: "A minha sobrancelha vai ficar artificial?",
      answer:
        "O objetivo é o contrário: o desenho segue a sua sobrancelha original, os seus pelos e o formato do seu rosto. Na micropigmentação, você aprova o desenho antes.",
    },
    {
      question: "Você trabalha com a técnica que eu quero?",
      answer:
        "Tenho formação avançada em fio a fio, e a técnica é escolhida pela necessidade da sua sobrancelha e pelo seu gosto. Procura outra técnica? Me pergunte no WhatsApp.",
    },
    {
      question: "Quanto custa?",
      answer:
        "O valor depende do serviço e do que a sua sobrancelha precisa. Me chame no WhatsApp que eu te passo os valores.",
    },
    {
      question: "Como faço para agendar?",
      answer: "Pelo WhatsApp (61) 98453-7188. Atendo das 8h às 20h.",
    },
    {
      question: "Atende quem vem de outras cidades?",
      answer:
        "Sim. Recebo clientes de todo o Distrito Federal e de Goiás na minha sala, na Ceilândia Sul.",
    },
  ],
  moreTitle: "Não encontrou a sua dúvida?",
  moreText: "Me chame no WhatsApp. Prefiro tirar todas as suas dúvidas antes de você agendar.",
};

export const contactSection = {
  eyebrow: "Agendamento",
  title: "Vamos marcar o seu horário?",
  text: "Me chame no WhatsApp, diga o serviço e o melhor dia para você. Eu respondo e deixamos tudo combinado.",
};
