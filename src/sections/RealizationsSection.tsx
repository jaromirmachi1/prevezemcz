import { useState } from "react";
import styled from "styled-components";
import mn1 from "../assets/mn1.jpg";
import mn2 from "../assets/mn2.jpg";
import mn3 from "../assets/mn3.jpg";
import mn4 from "../assets/mn4.jpg";
import mn5 from "../assets/mn5.jpg";
import mn6 from "../assets/mn6.jpg";
import mn7 from "../assets/mn7.jpg";
import mn8 from "../assets/mn8.jpg";
import mn9 from "../assets/mn9.jpg";
import mn10 from "../assets/mn10.jpg";
import mn11 from "../assets/mn11.jpg";
import mn12 from "../assets/mn12.jpg";
import mn13 from "../assets/mn13.jpg";
import mn14 from "../assets/mn14.jpg";
import mn15 from "../assets/mn15.jpg";
import mn16 from "../assets/mn16.jpg";
import mn17 from "../assets/mn17.jpg";
import mn18 from "../assets/mn18.jpg";
import mn19 from "../assets/mn19.jpg";
import mn20 from "../assets/mn20.jpg";
import mn21 from "../assets/mn21.jpg";
import mn22 from "../assets/mn22.jpg";

const realizations = [
  { id: "mn1", src: mn1, alt: "Pásové rypadlo přepravované na podvalu" },
  { id: "mn2", src: mn2, alt: "Manipulační technika na odtahovém voze" },
  { id: "mn3", src: mn3, alt: "Přeprava bagru na nákladním odtahovém voze" },
  { id: "mn4", src: mn4, alt: "Nákladní převoz vysokozdvižné plošiny" },
  { id: "mn5", src: mn5, alt: "Převoz pásového bagru po průmyslové zóně" },
  { id: "mn6", src: mn6, alt: "Přeprava automobilu na odtahové plošině" },
  { id: "mn7", src: mn7, alt: "Nákladní převoz vibračního válce" },
  { id: "mn8", src: mn8, alt: "Přeprava pracovní plošiny na nákladním voze" },
  { id: "mn9", src: mn9, alt: "Nakladač přepravovaný na odtahovém speciálu" },
  { id: "mn10", src: mn10, alt: "Nákladní převoz mobilních zařízení" },
  { id: "mn11", src: mn11, alt: "Převoz plošiny pro stavební práce" },
  { id: "mn12", src: mn12, alt: "Přeprava chemických toalet na přívěsu" },
  { id: "mn13", src: mn13, alt: "Převoz dodávky Mercedes s přívěsem" },
  { id: "mn14", src: mn14, alt: "Nákladní přeprava zdvihací techniky" },
  { id: "mn15", src: mn15, alt: "Přeprava stavební techniky na nákladním voze" },
  { id: "mn16", src: mn16, alt: "Odtah manipulační techniky na podvalu" },
  { id: "mn17", src: mn17, alt: "Převoz nákladní automobilové techniky" },
  { id: "mn18", src: mn18, alt: "Nákladní přeprava průmyslového zařízení" },
  { id: "mn19", src: mn19, alt: "Přeprava bagru na odtahové plošině" },
  { id: "mn20", src: mn20, alt: "Převoz vozidla na specializovaném odtahu" },
  { id: "mn21", src: mn21, alt: "Nákladní transport stavebního stroje" },
  { id: "mn22", src: mn22, alt: "Realizace převozu těžké techniky" },
] as const;

const INITIAL_COUNT = 12;

function RealizationsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const items = isExpanded ? realizations : realizations.slice(0, INITIAL_COUNT);

  return (
    <Section id="realizace">
      <Header>
        <Eyebrow>Realizace</Eyebrow>
        <h2>Ukázky našich převozů v terénu</h2>
        <p>
          Reálné zakázky z přepravy manipulační techniky, vozidel a nákladu.
          Každý převoz řešíme bezpečně, rychle a s důrazem na přesnou logistiku.
        </p>
      </Header>

      <PhotoGrid role="list">
        {items.map((item, index) => (
          <Card key={item.id} role="listitem">
            <img
              src={item.src}
              alt={item.alt}
              loading={index < 6 ? "eager" : "lazy"}
              decoding="async"
              width={800}
              height={600}
              sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </Card>
        ))}
      </PhotoGrid>

      <MoreButton type="button" onClick={() => setIsExpanded((v) => !v)}>
        {isExpanded ? "Méně" : "Více"}
      </MoreButton>
    </Section>
  );
}

export default RealizationsSection;

const Section = styled.section`
  padding: 0 5vw 3.5rem;
`;

const Header = styled.header`
  margin-bottom: 1.25rem;
  max-width: 720px;

  h2 {
    margin: 0.55rem 0 0.75rem;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.12;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #c8c8d0;
    line-height: 1.62;
    max-width: 62ch;
  }
`;

const Eyebrow = styled.span`
  color: #ff8d3a;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.77rem;
  font-weight: 800;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Card = styled.article`
  border-radius: 0.9rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: #111216;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
`;

const MoreButton = styled.button`
  margin: 1rem auto 0;
  display: flex;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  padding: 0.75rem 1.15rem;
  background: rgba(255, 255, 255, 0.05);
  color: #f5f5f8;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: rgba(255, 143, 66, 0.55);
    color: #ff9f57;
  }
`;
