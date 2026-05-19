import { SITE_URL } from "./siteMeta";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Převezem.cz",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+420732750428",
  email: "info@prevezem.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Teslova 1128/2a",
    addressLocality: "Ostrava",
    postalCode: "702 00",
    addressCountry: "CZ",
  },
  areaServed: ["CZ", "EU"],
  sameAs: ["https://www.facebook.com/prevezem.cz/"],
  description:
    "Přeprava manipulační techniky, aut a nákladního zboží po celé ČR i Evropě.",
};

export function injectOrganizationSchema() {
  const scriptId = "prevezem-organization-schema";

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(script);
}
