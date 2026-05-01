import styled from "styled-components";
import vanImage from "../assets/vanprevezem.webp";

function VanRentalSection() {
  return (
    <Section id="pujcovna">
      <Intro>
        <IntroHeading>
          <Eyebrow>Půjčovna dodávek</Eyebrow>
          <h2>Přeprava nákladu bez starostí</h2>
        </IntroHeading>
        <IntroText>
          <p>
            Potřebujete přepravit nábytek, stavební materiál nebo jiné břemeno?
            Půjčovna dodávek je ideálním řešením pro všechny, kteří potřebují
            přepravit náklad, ale nemají vlastní auto nebo nákladní vůz.
          </p>
        </IntroText>
      </Intro>

      <Layout>
        <VisualFrame>
          <Visual
            src={vanImage}
            alt="Dodávka připravená k pronájmu"
            loading="lazy"
          />
          <PriceBadge>
            <span>od</span>
            <strong>1 500 Kč</strong>
            <small>/ den</small>
          </PriceBadge>
        </VisualFrame>
        <Details>
          <InfoBlocks>
            <InfoBlock>
              <Step>01</Step>
              <h3>Jak si objednat dodávku?</h3>
              <p>
                Objednávku lze provést online nebo telefonicky. Při objednávce
                nám sdělte datum a čas převzetí i vrácení dodávky, požadovanou
                velikost a nosnost dodávky a případné další požadavky.
              </p>
            </InfoBlock>
            <InfoBlock>
              <Step>02</Step>
              <h3>Kolik půjčení dodávky stojí?</h3>
              <p>
                Cena půjčení dodávky je <Price>1 500 Kč / den</Price> + vratná
                kauce 10 000 Kč.
              </p>
            </InfoBlock>
          </InfoBlocks>
          <Actions>
            <a href="tel:+420732750428">Rezervovat dodávku</a>
            <a href="mailto:info@prevezem.cz">Napsat e-mail</a>
          </Actions>
        </Details>
      </Layout>
    </Section>
  );
}

export default VanRentalSection;

const Section = styled.section`
  margin: 0;
  padding: clamp(2.5rem, 5vw, 4.5rem) 5vw clamp(3.5rem, 6vw, 5.2rem);
  overflow: hidden;
`;

const Intro = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(260px, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(1rem, 3.5vw, 3rem);
  align-items: end;
  margin-bottom: clamp(1.4rem, 3.2vw, 2.4rem);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const IntroHeading = styled.div`
  h2 {
    margin: 0.85rem 0 0;
    font-size: clamp(2.15rem, 5.6vw, 5.6rem);
    line-height: 0.96;
    letter-spacing: -0.02em;
    max-width: 11.5ch;
    text-transform: uppercase;
  }
`;

const IntroText = styled.div`
  justify-self: end;
  width: min(100%, 62ch);

  p {
    margin: 0 0 0.9rem;
    color: #c7c7cf;
    line-height: 1.68;
    max-width: 62ch;
    font-size: clamp(0.98rem, 1.2vw, 1.08rem);
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 920px) {
    justify-self: start;
    width: 100%;
  }
`;

const Layout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(300px, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(1rem, 3vw, 2.4rem);
  align-items: stretch;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
`;

const Price = styled.strong`
  color: #ff9f57;
`;

const Eyebrow = styled.span`
  color: #ff8d3a;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.77rem;
  font-weight: 800;
`;

const InfoBlocks = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const InfoBlock = styled.div`
  position: relative;
  padding: clamp(1rem, 2.2vw, 1.45rem);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    #101116;

  h3 {
    margin: 0 0 0.55rem;
    padding-right: 3rem;
    font-size: clamp(1.18rem, 1.8vw, 1.45rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
  }

  p {
    margin: 0;
    color: #d1d1d8;
    max-width: 58ch;
    line-height: 1.58;
  }
`;

const Step = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: rgba(255, 159, 87, 0.7);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  a {
    text-decoration: none;
    border-radius: 999px;
    padding: 0.78rem 1rem;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  a:first-child {
    background: linear-gradient(130deg, #ff9038, #ff5f00 56%, #e14800);
    color: #fff;
  }

  a:last-child {
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #f0f0f4;
    background: rgba(255, 255, 255, 0.03);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

const Visual = styled.img`
  width: 100%;
  height: 100%;
  min-height: clamp(260px, 30vw, 420px);
  object-fit: cover;
  border-radius: 1.2rem;
  filter: saturate(0.92) contrast(1.06);
`;

const VisualFrame = styled.div`
  position: relative;
  min-height: clamp(260px, 30vw, 420px);

  &::before {
    content: "";
    position: absolute;
    inset: 1rem -1rem -1rem 1rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(255, 122, 26, 0.28);
    background: radial-gradient(
      circle at top left,
      rgba(255, 122, 26, 0.18),
      transparent 48%
    );
  }

  ${Visual} {
    position: relative;
    z-index: 1;
  }
`;

const PriceBadge = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
  min-width: 160px;
  padding: 0.9rem 1rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(7, 8, 14, 0.72);
  backdrop-filter: blur(12px);

  span,
  small {
    color: #ff9f57;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    margin: 0.15rem 0;
    color: #fff;
    font-size: 1.45rem;
    line-height: 1;
    letter-spacing: -0.04em;
  }
`;
