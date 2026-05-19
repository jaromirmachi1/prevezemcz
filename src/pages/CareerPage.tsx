import styled from "styled-components";

const phone = "732 750 428";
const phoneHref = "tel:+420732750428";

function CareerPage() {
  return (
    <main>
      <Section aria-labelledby="career-title">
        <Header>
          <Eyebrow>Kariéra</Eyebrow>
          <h1 id="career-title">Přidejte se k týmu Převezem.cz</h1>
          <p>
            Aktuálně obsazujeme řidičskou pozici. Pokud máte potřebné
            oprávnění a chuť pracovat, ozvěte se nám.
          </p>
        </Header>

        <JobsGrid>
          <JobCard>
            <h2>
              Hledáme řidiče na vnitrostátní nákladní dopravu, odtahové vozidlo,
              vozidlo s HR
            </h2>
            <h3>Požadavky</h3>
            <ul>
              <li>řidičský průkaz skupiny &quot;C&quot;</li>
              <li>profesní průkaz</li>
            </ul>
            <JobContact>
              Více info na tel.:{" "}
              <a href={phoneHref} aria-label="Zavolat na 732 750 428">
                {phone}
              </a>
            </JobContact>
          </JobCard>
        </JobsGrid>
      </Section>
    </main>
  );
}

export default CareerPage;

const Section = styled.section`
  padding: clamp(8rem, 14vw, 10rem) 5vw clamp(3rem, 7vw, 5.5rem);
`;

const Header = styled.header`
  max-width: 900px;
  margin-bottom: clamp(1.4rem, 3vw, 2rem);

  h1 {
    margin: 0.8rem 0 1rem;
    font-size: clamp(2.8rem, 7.2vw, 6.8rem);
    line-height: 1.12;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    max-width: 12ch;
  }

  p {
    margin: 0;
    color: #d0d0d7;
    line-height: 1.65;
    max-width: 58ch;
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

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 1.5rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled.article`
  display: grid;
  align-content: start;
  gap: 0.8rem;
  padding: clamp(1.1rem, 2.6vw, 1.7rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    rgba(12, 12, 16, 0.84);

  h2 {
    margin: 0;
    font-size: clamp(1.4rem, 2.8vw, 2.3rem);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  h3 {
    margin: 0.15rem 0 0;
    color: #ff9f57;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
    color: #d0d0d7;
    line-height: 1.58;
  }
`;

const JobContact = styled.p`
  margin: 0.4rem 0 0;
  color: #fff;
  font-weight: 700;

  a {
    color: #ff9f57;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  a:hover,
  a:focus-visible {
    opacity: 0.85;
    outline: none;
  }
`;
