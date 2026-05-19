export const SITE_URL = "https://www.prevezem.cz";
export const SITE_NAME = "Převezem.cz";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type PageMeta = {
  title: string;
  description: string;
  path?: string;
  robots?: string;
};

export const defaultPageMeta: PageMeta = {
  title: "Převoz manipulační techniky, aut a zboží | Převezem.cz",
  description:
    "Přeprava manipulační techniky, aut a nákladního zboží po celé ČR i Evropě. Rychle, bezpečně a profesionálně.",
  path: "/",
};

const routeMeta: Record<string, PageMeta> = {
  "/": defaultPageMeta,
  "/sluzby": {
    title: "Služby | Převezem.cz",
    description:
      "Převoz manipulační techniky, vozidel, nákladu a pneuservis. Kompletní dopravní služby v Ostravě, po ČR i Evropě.",
    path: "/sluzby",
  },
  "/vozovy-park": {
    title: "Vozový park | Převezem.cz",
    description:
      "Vozový park Převezem.cz pro převoz manipulační techniky, automobilů, stavebního materiálu a palet.",
    path: "/vozovy-park",
  },
  "/pneuservis": {
    title: "Pneuservis | Převezem.cz",
    description:
      "Pneuservis pro osobní i nákladní automobily. Výměna pneumatik, montáž, demontáž a vyvážení v Ostravě.",
    path: "/pneuservis",
  },
  "/kariera": {
    title: "Kariéra | Převezem.cz",
    description:
      "Volná pracovní pozice v Převezem.cz: řidič na vnitrostátní nákladní dopravu s odtahovým vozidlem a HR.",
    path: "/kariera",
  },
  "/kontakt": {
    title: "Kontakt | Převezem.cz",
    description:
      "Kontaktní informace Převezem.cz a fakturační údaje. Napište nám přes formulář a připravíme rychlé řešení přepravy.",
    path: "/kontakt",
  },
};

const notFoundMeta: PageMeta = {
  title: "Stránka nenalezena | Převezem.cz",
  description: "Požadovaná stránka na Převezem.cz nebyla nalezena.",
  robots: "noindex, nofollow",
};

export function getPageMeta(pathname: string): PageMeta {
  return routeMeta[pathname] ?? { ...notFoundMeta, path: pathname };
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.href = href;
}

export function setPageMeta(meta: PageMeta) {
  const path = meta.path ?? "/";
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const title =
    meta.title.includes(SITE_NAME) || meta.title.includes("|")
      ? meta.title
      : `${meta.title} | ${SITE_NAME}`;

  document.title = title;

  upsertMeta("name", "description", meta.description);
  upsertMeta("name", "robots", meta.robots ?? "index, follow");
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", OG_IMAGE);
  upsertMeta("property", "og:locale", "cs_CZ");
  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", meta.description);
  upsertMeta("name", "twitter:image", OG_IMAGE);

  upsertLink("canonical", url);
}
