import { Link } from "react-router-dom";
import styled from "styled-components";

const serviceCards = [
  {
    title: "Technika a náklad",
    text: "Převoz manipulační techniky, stavebních strojů, kontejnerů, oplocení, paletového zboží a materiálu do 14 tun.",
    meta: "Odtahové speciály, HR, navijáky",
    href: "/vozovy-park",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16h12.2l2.1-4H20v4h1.5v2h-2.1a2.6 2.6 0 0 1-5.1 0H9.7a2.6 2.6 0 0 1-5.1 0H3v-2h1Zm2.6 2.8a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm10.3 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM5 14V7h8.7l2 7H5Zm10.4 0-1.4-5H7v5h8.4Z" />
      </svg>
    ),
  },
  {
    title: "Auta a dodávky",
    text: "Přeprava osobních i užitkových vozidel na odtahové plošině, podvalu i s přívěsem.",
    meta: "Plošiny, přívěsy",
    href: "/vozovy-park",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 11 6.6 7h10.8L19 11h1.5v6h-2a2.4 2.4 0 0 1-4.8 0H10.3a2.4 2.4 0 0 1-4.8 0h-2v-6H5Zm2.8 6.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm8.4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM7 11h10l-.8-2H7.8L7 11Z" />
      </svg>
    ),
  },
  {
    title: "Pneuservis",
    text: "Profesionální přezutí a vyvážení pneumatik pro osobní i nákladní automobily, včetně zimní a letní sezóny.",
    meta: "Pneuservis",
    href: "/pneuservis",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h11v9h2.1l1.6-3.5V9H21v6h1v2h-1.2a2.3 2.3 0 0 1-4.5 0H9.7a2.3 2.3 0 0 1-4.5 0H3V6Zm4.5 11.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm11 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM5 8v7h7V8H5Z" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <Section id="sluzby">
      <Intro>
        <Eyebrow>Služby</Eyebrow>
        <SectionTitle>Co pro vás vyřešíme</SectionTitle>
        <p>
          Od těžké techniky přes vozidla až po pneuservis. Vše je postavené na
          rychlé domluvě, vhodné technice a bezpečném doručení.
        </p>
      </Intro>
      <ServiceLayout>
        <CardGrid>
          {serviceCards.map((service) => (
            <Card key={service.title} to={service.href}>
              <Icon>{service.icon}</Icon>
              <CardText>
                <span>{service.meta}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </CardText>
            </Card>
          ))}
        </CardGrid>
      </ServiceLayout>
    </Section>
  );
}

export default ServicesSection;

const Section = styled.section`
  min-height: 100svh;
  display: grid;
  align-content: center;
  gap: clamp(1.4rem, 3vw, 2.2rem);
  padding: clamp(6.2rem, 9vw, 7.4rem) 5vw clamp(2rem, 5vw, 3.5rem);
  background:
    radial-gradient(
      circle at 86% 18%,
      rgba(255, 122, 26, 0.12),
      transparent 28%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent 45%);
`;

const Intro = styled.header`
  display: grid;
  gap: 0.75rem;
  max-width: 820px;

  p {
    margin: 0;
    color: #d0d0d7;
    max-width: 62ch;
    line-height: 1.65;
  }
`;

const Eyebrow = styled.span`
  color: #ff9f57;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.74rem;
  font-weight: 800;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(2.5rem, 6.4vw, 6.2rem);
  line-height: 1.12;
  letter-spacing: -0.055em;
  text-transform: uppercase;
`;

const CardGrid = styled.div`
  display: grid;
  gap: clamp(0.8rem, 1.6vw, 1.1rem);
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceLayout = styled.div`
  display: block;
`;

const Card = styled(Link)`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: clamp(1rem, 2vw, 1.4rem);
  min-height: clamp(230px, 26vh, 310px);
  padding: clamp(1rem, 2.2vw, 1.45rem);
  color: inherit;
  text-decoration: none;
  background:
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    #101116;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: "";
    position: absolute;
    inset: auto -22% -42% 30%;
    height: 72%;
    background: radial-gradient(
      circle,
      rgba(255, 122, 26, 0.16),
      transparent 64%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    border-color: rgba(255, 159, 87, 0.36);
    background:
      linear-gradient(
        155deg,
        rgba(255, 255, 255, 0.095),
        rgba(255, 255, 255, 0.02)
      ),
      #111218;
    outline: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }
`;

const Icon = styled.div`
  position: relative;
  z-index: 1;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 0.85rem;
  color: #ff9f57;
  background: rgba(255, 159, 87, 0.1);
  border: 1px solid rgba(255, 159, 87, 0.18);

  svg {
    width: 1.55rem;
    height: 1.55rem;
    fill: currentColor;
  }
`;

const CardText = styled.div`
  position: relative;
  z-index: 1;
  align-self: end;

  span {
    display: block;
    margin-bottom: 0.65rem;
    color: #ffb274;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 0.7rem;
    font-size: clamp(1.3rem, 2vw, 1.75rem);
    line-height: 1;
    letter-spacing: -0.04em;
    color: #f4f4f7;
  }

  p {
    color: #babac1;
    margin: 0;
    line-height: 1.55;
  }
`;
