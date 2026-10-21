import { SITE_URL, brand, contact, faq, seo, services } from "@/content/site";

// Somente dados informados pela cliente: sem horário estruturado (dias a confirmar) e sem avaliações.
export function JsonLd() {
  const { address } = contact;
  const business = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE_URL}/#negocio`,
    name: brand.name,
    description: seo.description,
    url: SITE_URL,
    logo: `${SITE_URL}${brand.logo.src}`,
    image: `${SITE_URL}/images/espaco-atendimento.jpg`,
    telephone: "+55-61-98453-7188",
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street} — ${address.district}`,
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "State", name: "Distrito Federal" },
      { "@type": "State", name: "Goiás" },
    ],
    sameAs: [contact.instagram.url],
    founder: { "@type": "Person", name: brand.name, jobTitle: brand.role },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: [...services.featured, ...services.more].map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.description },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      {[business, faqPage].map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
