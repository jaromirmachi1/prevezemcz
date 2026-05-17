import { useEffect } from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  useEffect(() => {
    document.title = "Kontakt | Převezem.cz";

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
      "Kontaktní informace Převezem.cz a fakturační údaje. Napište nám přes formulář a připravíme rychlé řešení přepravy i pronájmu.",
    );
  }, []);

  return (
    <main>
      <Section aria-labelledby="contact-title">
        <HeadingWrap>
          <Eyebrow>Kontakt</Eyebrow>
          <h1 id="contact-title">Kontaktní informace</h1>
        </HeadingWrap>

        <InfoGrid>
          <InfoBlock>
            <h2>Kontaktní informace</h2>
            <InfoList>
              <li>
                <strong>Telefon:</strong>
                <a href="tel:+420732750428">+420 732 750 428</a>
              </li>
              <li>
                <strong>E-mail:</strong>
                <a href="mailto:info@prevezem.cz">info@prevezem.cz</a>
              </li>
              <li>
                <strong>Web:</strong>
                <a
                  href="https://www.prevezem.cz"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.prevezem.cz
                </a>
              </li>
              <li>
                <strong>Adresa:</strong>
                <AddressText>Teslova 1128/2a</AddressText>
                <AddressText>702 00 Ostrava</AddressText>
              </li>
            </InfoList>
          </InfoBlock>

          <InfoBlock>
            <h2>Doručovací a fakturační údaje</h2>
            <InfoList>
              <li>
                <strong>CAR TRANS LKW s.r.o.</strong>
                <AddressText>Teslova 1128/2a, 702 00 Ostrava</AddressText>
              </li>
              <li>
                <strong>IČ:</strong>
                <span>05401933</span>
              </li>
              <li>
                <strong>DIČ:</strong>
                <span>CZ05401933</span>
              </li>
              <li>
                <strong>Bankovní spojení:</strong>
                <span>ČS</span>
              </li>
              <li>
                <strong>Č.Ú.:</strong>
                <span>2201073467/2010</span>
              </li>
            </InfoList>
          </InfoBlock>
        </InfoGrid>

        <FormWrap>
          <h2>Napište nám</h2>
          <ContactForm source="kontakt" idPrefix="page-contact" />
        </FormWrap>
      </Section>
    </main>
  );
}

export default ContactPage;

const Section = styled.section`
  padding: clamp(8rem, 14vw, 10rem) 5vw clamp(3rem, 8vw, 5.5rem);
`;

const HeadingWrap = styled.header`
  margin-bottom: clamp(1.2rem, 3vw, 2rem);

  h1 {
    margin: 0.75rem 0 0;
    font-size: clamp(2.6rem, 7vw, 6rem);
    line-height: 1.12;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }
`;

const Eyebrow = styled.span`
  color: #ff8d3a;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.77rem;
  font-weight: 800;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.2rem, 4vw, 3.2rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBlock = styled.article`
  padding: clamp(1rem, 2.2vw, 1.4rem);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);

  h2 {
    margin: 0 0 0.9rem;
    font-size: clamp(1.3rem, 2.4vw, 2rem);
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
`;

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;

  li {
    color: #d0d0d7;
    line-height: 1.55;
  }

  strong {
    color: #fff;
    margin-right: 0.35rem;
  }

  a {
    color: #ff9f57;
    text-decoration: none;
  }
`;

const AddressText = styled.span`
  display: block;
`;

const FormWrap = styled.div`
  h2 {
    margin: 0 0 1rem;
    font-size: clamp(1.5rem, 2.8vw, 2.3rem);
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }
`;
