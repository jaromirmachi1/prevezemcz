import { useEffect } from "react";
import styled from "styled-components";
import tireImage from "../assets/tire.png";

const phoneNumber = "+420 737 248 076";
const phoneHref = "tel:+420737248076";
const serviceAddress = "Frýdecká 339/395, 719 00 Ostrava, Vodárenská věž";
const serviceAddressFull = "Ostrava, Frýdecká 339/395, 719 00 – Vodárenská Věž";

const servicePoints = [
  "Naše pneuservisní služby jsou určeny pro osobní i nákladní automobily.",
  "Nabízíme širokou škálu pneumatik všech značek a velikostí.",
  "Zajišťujeme rovněž montáž, demontáž a vyvážení pneumatik.",
];

function PneuServicePage() {
  useEffect(() => {
    document.title = "Pneuservis Frýdek-Místek | Převezem.cz";

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
      "Pneuservis pro osobní i nákladní automobily. Výměna pneumatik na zimní a letní sezónu, montáž, demontáž a vyvážení pneumatik.",
    );
  }, []);

  return (
    <main>
      <Hero aria-labelledby="pneuservis-title">
        <HeroCopy>
          <Eyebrow>prevezem.cz</Eyebrow>
          <h1 id="pneuservis-title">Pneuservis</h1>
          <Lead>Pro osobní i nákladní automobily</Lead>

          <ServiceList>
            {servicePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ServiceList>

          <SeasonBlock>
            <h2>Výměna pneumatik na zimní a letní sezónu</h2>
            <p>
              Nabízíme profesionální výměnu pneumatik na zimní a letní sezónu.
              Při výměně s vámi prokonzultujeme vhodný typ pneumatik pro vaše
              vozidlo s přihlédnutím na podmínky, ve kterých budete jezdit.
            </p>
          </SeasonBlock>

          <Booking>
            <h2>Objednávky</h2>
            <p>
              Objednávky, a to včetně přezutí pneu, proveďte telefonicky předem
              na čísle:
            </p>
            <BookingActions>
              <PhoneButton href={phoneHref}>{phoneNumber}</PhoneButton>
            </BookingActions>
          </Booking>
        </HeroCopy>

        <VisualCard>
          <img
            src={tireImage}
            alt="Pneuservisní technik drží pneumatiku připravenou k výměně"
            loading="eager"
          />
        </VisualCard>
      </Hero>

      <MapSection aria-labelledby="map-title">
        <MapCopy>
          <Eyebrow>Kde nás najdete</Eyebrow>
          <h2 id="map-title">Mapa pneuservisu</h2>
          <p>Pro navigaci použijte přesnou adresu pneuservisu:</p>
          <address>{serviceAddressFull}</address>
        </MapCopy>
        <MapFrame>
          <iframe
            title="Mapa pneuservisu Převezem.cz v Ostravě"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              serviceAddress,
            )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapFrame>
      </MapSection>
    </main>
  );
}

export default PneuServicePage;

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(300px, 0.98fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  min-height: 100svh;
  padding: clamp(8rem, 14vw, 10rem) 5vw clamp(3rem, 6vw, 5rem);
  background:
    radial-gradient(
      circle at 74% 20%,
      rgba(255, 122, 26, 0.16),
      transparent 32%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 40%);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

const HeroCopy = styled.div`
  max-width: 720px;

  h1 {
    margin: 0.85rem 0 0;
    font-size: clamp(3rem, 8.2vw, 7rem);
    line-height: 1.12;
    letter-spacing: -0.05em;
    text-transform: uppercase;
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

const Lead = styled.p`
  margin: 1.1rem 0 0;
  color: #f2f2f6;
  font-size: clamp(1.25rem, 2.2vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
`;

const ServiceList = styled.ul`
  margin: 1.1rem 0 0;
  padding-left: 1.15rem;
  color: #d6d6dd;
  line-height: 1.65;

  strong {
    color: #fff;
  }
`;

const SeasonBlock = styled.section`
  margin-top: clamp(2rem, 4vw, 3rem);

  h2 {
    margin: 0 0 0.55rem;
    font-size: clamp(1.35rem, 2.4vw, 2rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    max-width: 66ch;
    color: #d0d0d7;
    line-height: 1.68;
  }
`;

const Booking = styled.section`
  margin-top: clamp(2rem, 4vw, 3rem);

  h2 {
    margin: 0 0 0.45rem;
    font-size: clamp(1.8rem, 3.8vw, 3.2rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    margin: 0 0 1.25rem;
    color: #d0d0d7;
    line-height: 1.6;
  }
`;

const PhoneButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 999px;
  padding: 0.95rem 1.35rem;
  background: linear-gradient(130deg, #ff9038, #ff5f00 56%, #e14800);
  color: #fff;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 14px 34px rgba(255, 95, 0, 0.24);
    outline: none;
  }
`;

const BookingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const VisualCard = styled.figure`
  position: relative;
  margin: 0;
  min-height: clamp(320px, 44vw, 560px);

  &::before {
    content: "";
    position: absolute;
    inset: 1rem -1rem -1rem 1rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(255, 122, 26, 0.28);
    background: radial-gradient(
      circle at top left,
      rgba(255, 122, 26, 0.18),
      transparent 48%
    );
  }

  img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    min-height: clamp(320px, 44vw, 560px);
    object-fit: cover;
    border-radius: 1.25rem;
    filter: saturate(0.9) contrast(1.06) brightness(0.9);
  }
`;

const MapSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(320px, 1.28fr);
  gap: clamp(1.4rem, 4vw, 3rem);
  align-items: stretch;
  padding: 0 5vw clamp(3.5rem, 7vw, 5.5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MapCopy = styled.div`
  padding: clamp(1.1rem, 3vw, 1.6rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(255, 255, 255, 0.035);

  h2 {
    margin: 0.7rem 0 0.8rem;
    font-size: clamp(2rem, 4vw, 3.6rem);
    line-height: 0.96;
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #d0d0d7;
    line-height: 1.65;
  }

  address {
    display: block;
    margin-top: 0.9rem;
    color: #fff;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }
`;

const MapFrame = styled.div`
  min-height: clamp(320px, 42vw, 480px);
  overflow: hidden;
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #111116;

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    min-height: inherit;
    border: 0;
    filter: grayscale(1) invert(0.92) contrast(0.9);
  }
`;
