import { useEffect } from "react";
import styled from "styled-components";
import vp1 from "../assets/vp1.jpeg";
import vp2 from "../assets/vp2.jpeg";
import vp3 from "../assets/vp3.jpeg";
import vp4 from "../assets/vp4.jpeg";
import vp5 from "../assets/vp5.jpeg";
import vp6 from "../assets/vp6.jpeg";
import vp7 from "../assets/vp7.jpeg";
import vp8 from "../assets/vp8.jpeg";

const vehicles = [
  {
    name: "Iveco Eurocargo",
    type: "Odtahový speciál na převoz techniky a automobilů",
    specs: ["Ložná plocha 2,5 x 7,5 m", "Naviják", "Nosnost 9 t"],
    image: vp1,
  },
  {
    name: "Odtahový speciál MAN",
    type: "Převoz stavební techniky",
    specs: [
      "Nosnost 14 tun",
      "Hydraulický naviják",
      "Ložná plocha 7,5 x 2,5 m",
    ],
    image: vp2,
  },
  {
    name: "Renault Premium",
    type: "Odtahový speciál s hydraulickou rukou",
    specs: [
      "Nosnost vozu 10 tun",
      "Hydraulická ruka délka 10,8 m",
      "Možnost převážení stavebních kontejnerů, oplocení, paletového a stavebního materiálu",
      "Rozměr ložné plochy 7,5 x 2,5 m",
    ],
    image: vp3,
  },
  {
    name: "MAN TGL",
    type: "Hydraulické čelo s nosností 2 tuny",
    specs: [
      "Ložná plocha 5 x 2,2 m",
      "Nosnost 3 t",
      "Tažné zařízení 3,5 tuny",
      "Převoz malých plošin, palet a materiálu",
    ],
    image: vp4,
  },
  {
    name: "Fiat Ducato",
    type: "Dodávka s nosností 1,5 tuny",
    specs: [
      "Převoz pracovních plošin",
      "Převoz stavebního materiálu",
      "Možnost VZV a složení palet",
    ],
    image: vp5,
  },
  {
    name: "Mercedes Sprinter 316 CDI",
    type: "Dodávka pro vozidla a materiál",
    specs: [
      "Nosnost 1300 kg",
      "Tažné zařízení 2,8 t",
      "Možnost převozu 2 ks automobilů nebo materiálu",
    ],
    image: vp6,
  },
  {
    name: "Dodge Ram",
    type: "Převoz automobilů, plošin, bagrů a stavební techniky",
    specs: ["Tažné zařízení 3,5 t", "Možnost převozu 2 ks osobních vozů"],
    image: vp7,
  },
  {
    name: "Chladící dodávka Fiat Ducato",
    type: "Chladící a mrazící přeprava",
    specs: ["Ford Transit s nosností 1,5 tun", "6 ks vozů skladem"],
    image: vp8,
  },
];

function FleetPage() {
  useEffect(() => {
    document.title = "Vozový park | Převezem.cz";

    let descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      "content",
      "Vozový park Převezem.cz pro převoz manipulační techniky, automobilů, stavebního materiálu, palet i chladící přepravu.",
    );
  }, []);

  return (
    <main>
      <Hero aria-labelledby="fleet-title">
        <HeroCopy>
          <Eyebrow>Vozový park</Eyebrow>
          <h1 id="fleet-title">Technika pro každý převoz</h1>
          <p>
            Odtahové speciály, hydraulická ruka, dodávky i chladící vozy pro
            převoz manipulační techniky, automobilů a nákladu.
          </p>
        </HeroCopy>
        <HeroStats aria-label="Souhrn vozového parku">
          <li>
            <strong>14 t</strong>
            <span>maximální nosnost</span>
          </li>
          <li>
            <strong>10,8 m</strong>
            <span>hydraulická ruka</span>
          </li>
          <li>
            <strong>8</strong>
            <span>vozů k dispozici</span>
          </li>
        </HeroStats>
      </Hero>

      <FleetGrid aria-label="Seznam vozidel">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={vehicle.name}>
            <ImageWrap>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                loading={index < 2 ? "eager" : "lazy"}
              />
            </ImageWrap>
            <CardContent>
              <CardNumber>{String(index + 1).padStart(2, "0")}</CardNumber>
              <h2>{vehicle.name}</h2>
              <p>{vehicle.type}</p>
              <SpecList>
                {vehicle.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </SpecList>
            </CardContent>
          </VehicleCard>
        ))}
      </FleetGrid>
    </main>
  );
}

export default FleetPage;

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: end;
  padding: clamp(8rem, 14vw, 10rem) 5vw clamp(2.5rem, 6vw, 4rem);
  background:
    radial-gradient(
      circle at 82% 18%,
      rgba(255, 122, 26, 0.18),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 42%);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.header`
  max-width: 860px;

  h1 {
    margin: 0.8rem 0 1rem;
    font-size: clamp(3rem, 8.4vw, 8rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
    text-transform: uppercase;
    max-width: 10ch;
  }

  p {
    margin: 0;
    color: #d6d6dd;
    max-width: 58ch;
    font-size: clamp(1rem, 1.45vw, 1.2rem);
    line-height: 1.65;
  }
`;

const Eyebrow = styled.p`
  margin: 0;
  color: #ff9f57;
  font-size: 0.74rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 800;
`;

const HeroStats = styled.ul`
  display: grid;
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.045);
  }

  strong {
    display: block;
    color: #fff;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
  }

  span {
    display: block;
    margin-top: 0.35rem;
    color: #ffb274;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const FleetGrid = styled.section`
  display: grid;
  gap: clamp(1rem, 3vw, 1.6rem);
  padding: 0 5vw clamp(3.5rem, 7vw, 5.5rem);
`;

const VehicleCard = styled.article`
  display: grid;
  grid-template-columns: minmax(260px, 0.92fr) minmax(0, 1.08fr);
  min-height: clamp(300px, 34vw, 420px);
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    #101116;

  &:nth-child(even) {
    grid-template-columns: minmax(0, 1.08fr) minmax(260px, 0.92fr);
  }

  &:nth-child(even) figure {
    order: 2;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr;
    }

    &:nth-child(even) figure {
      order: 0;
    }
  }
`;

const ImageWrap = styled.figure`
  position: relative;
  margin: 0;
  min-height: 280px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    filter: saturate(0.88) contrast(1.08) brightness(0.82);
  }
`;

const CardContent = styled.div`
  position: relative;
  display: grid;
  align-content: center;
  padding: clamp(1.2rem, 4vw, 2.4rem);

  h2 {
    margin: 0;
    padding-right: 3.2rem;
    font-size: clamp(2rem, 5vw, 4.8rem);
    line-height: 0.9;
    letter-spacing: -0.055em;
    text-transform: uppercase;
  }

  p {
    margin: 0.8rem 0 0;
    color: #ffb274;
    font-weight: 800;
    line-height: 1.35;
    letter-spacing: 0.01em;
  }
`;

const CardNumber = styled.span`
  position: absolute;
  top: clamp(1.2rem, 4vw, 2.4rem);
  right: clamp(1.2rem, 4vw, 2.4rem);
  color: rgba(255, 159, 87, 0.72);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.18em;
`;

const SpecList = styled.ul`
  display: grid;
  gap: 0.55rem;
  margin: clamp(1.2rem, 2.4vw, 1.8rem) 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 1rem;
    color: #d7d7de;
    line-height: 1.55;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 50%;
    background: #ff8d3a;
  }
`;
