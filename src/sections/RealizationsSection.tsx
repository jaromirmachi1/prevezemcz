import { useState } from "react";
import styled from "styled-components";
import m9 from "../assets/,m9.jpeg";
import mn from "../assets/mn.jpeg";
import mn2 from "../assets/mn2.jpeg";
import mn3 from "../assets/mn3.jpeg";
import mn4 from "../assets/mn4.jpeg";
import mn5 from "../assets/mn5.jpeg";
import mn6 from "../assets/mn6.jpeg";
import mn7 from "../assets/mn7.jpeg";
import mn8 from "../assets/mn8.jpeg";
import mn10 from "../assets/mn10.jpeg";
import mn11 from "../assets/mn11.jpeg";
import mn12 from "../assets/mn12.jpeg";
import mn13 from "../assets/mn13.jpeg";
import mn14 from "../assets/mn14.jpeg";

const realizations = [
  { src: m9, alt: "Nakladač přepravovaný na odtahovém speciálu" },
  { src: mn, alt: "Pásové rypadlo přepravované na podvalu" },
  { src: mn2, alt: "Manipulační technika na odtahovém voze" },
  { src: mn3, alt: "Přeprava bagru na nákladním odtahovém voze" },
  { src: mn4, alt: "Nákladní převoz vysokozdvižné plošiny" },
  { src: mn5, alt: "Převoz pásového bagru po průmyslové zóně" },
  { src: mn6, alt: "Přeprava automobilu na odtahové plošině" },
  { src: mn7, alt: "Nákladní převoz vibračního válce" },
  { src: mn8, alt: "Přeprava pracovní plošiny na nákladním voze" },
  { src: mn10, alt: "Nákladní převoz mobilních zařízení" },
  { src: mn11, alt: "Převoz plošiny pro stavební práce" },
  { src: mn12, alt: "Přeprava chemických toalet na přívěsu" },
  { src: mn13, alt: "Převoz dodávky Mercedes s přívěsem" },
  { src: mn14, alt: "Nákladní přeprava zdvihací techniky" },
];

function RealizationsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? realizations : realizations.slice(0, 12);

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

      <GalleryWrap>
        <MasonryGrid>
          {visibleItems.map((item, index) => (
            <Card key={`${item.src}-${index}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </Card>
          ))}
        </MasonryGrid>
        {!isExpanded && <FadeOverlay aria-hidden="true" />}
      </GalleryWrap>

      <MoreButton type="button" onClick={() => setIsExpanded((prev) => !prev)}>
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
    line-height: 1.04;
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

const GalleryWrap = styled.div`
  position: relative;
`;

const MasonryGrid = styled.div`
  column-count: 4;
  column-gap: 0.9rem;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 860px) {
    column-count: 2;
  }

  @media (max-width: 560px) {
    column-count: 1;
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 180px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(12, 12, 13, 0) 0%,
    rgba(12, 12, 13, 0.9) 62%,
    rgba(12, 12, 13, 1) 100%
  );
`;

const Card = styled.article`
  position: relative;
  break-inside: avoid;
  margin-bottom: 0.9rem;
  border-radius: 0.9rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: #111216;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  img {
    width: 100%;
    display: block;
    height: auto;
    object-fit: cover;
    filter: saturate(0.94) contrast(1.06) brightness(0.88);
    transition: transform 0.35s ease, filter 0.35s ease;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(
        circle at 12% 10%,
        rgba(255, 122, 26, 0.28),
        transparent 44%
      ),
      linear-gradient(
        165deg,
        rgba(255, 122, 26, 0.14),
        rgba(255, 122, 26, 0.02) 36%,
        rgba(8, 8, 10, 0.18) 100%
      );
    mix-blend-mode: screen;
    opacity: 0.95;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 143, 66, 0.45);
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.3);

    img {
      transform: scale(1.02);
      filter: saturate(1) contrast(1.08) brightness(0.95);
    }
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
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 143, 66, 0.55);
    color: #ff9f57;
  }
`;
