import styled from "styled-components";
import vp1 from "../assets/vpImages/vp1.jpg";
import vp2 from "../assets/vpImages/vp2.jpg";
import vp3 from "../assets/vpImages/vp3.jpg";
import vp4 from "../assets/vpImages/vp4.jpg";
import vp5 from "../assets/vpImages/vp5.jpg";
import vp6 from "../assets/vpImages/vp6.jpg";
import vp7 from "../assets/vpImages/vp7.jpg";
import vp8 from "../assets/vpImages/vp8.jpg";
import vp9 from "../assets/vpImages/vp9.jpg";
import vp11 from "../assets/vpImages/vp11.jpg";

interface FleetVehicle {
  name: string;
  specs: string[];
  image: string;
}

const vehicles: FleetVehicle[] = [
  {
    name: "Fiat Doblo Maxi",
    specs: ["Délka ložné plochy 2,05m", "Nosnost 900kg"],
    image: vp1,
  },
  {
    name: "Peugeot Boxer L4 H3",
    specs: ["Délka ložné plochy 4,5m", "Nosnost 1500KG"],
    image: vp2,
  },
  {
    name: "MAN TGX",
    specs: ["Ložná plocha 2,5x7,6m", "Nosnost 9t"],
    image: vp3,
  },
  {
    name: "Dodge RAM",
    specs: ["Tažné zařízení 3500kg "],
    image: vp4,
  },
  {
    name: "MAN TGL",
    specs: ["Čelo nosnost 2000kg, Ložná plocha 2,2 x 5,0m , Nosnost 3000kg"],
    image: vp5,
  },
  {
    name: "MAN TGL Valník",
    specs: ["Ložná plocha 2,5 x 7,2m , Nosnost 6 Tun"],
    image: vp6,
  },
  {
    name: "MAN TGM",
    specs: ["Ložná plocha 2,5 x 7,5m", "Nosnost 12,5t"],
    image: vp7,
  },
  {
    name: "MAN TGA",
    specs: ["Ložná plocha 2,5 x 8m", "Nosnost 9,0t"],
    image: vp8,
  },
  {
    name: "MAN TGA HR EFFER 370",
    specs: ["Ložná plocha 2,5x6,5m", "Nosnost 10 Tun "],
    image: vp9,
  },
  {
    name: "Renault Premium HR EFFER 220",
    specs: ["Ložná plocha 2,5x7,5m", "Nosnost 10t"],
    image: vp11,
  },
];

function FleetPage() {
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
            <span>nosnost do 14 t</span>
          </li>
          <li>
            <strong>17 m</strong>
            <span>hydraulická ruka do 17 m</span>
          </li>
          <li>
            <strong>5 t</strong>
            <span>nosnost ruky až 5 t</span>
          </li>
          <li>
            <strong>10+</strong>
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
    line-height: 1.12;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
