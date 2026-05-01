import { useEffect } from "react";
import styled from "styled-components";

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
                <a href="mailto:info@prevezm.cz">info@prevezm.cz</a>
              </li>
              <li>
                <strong>Web:</strong>
                <a href="https://www.prevezm.cz" target="_blank" rel="noreferrer">
                  www.prevezm.cz
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
                <strong>TISKNE MTO s.r.o.</strong>
                <AddressText>Teslova 1128/za, 702 00 Ostrava</AddressText>
              </li>
              <li>
                <strong>IČ:</strong>
                <span>05284996</span>
              </li>
              <li>
                <strong>DIČ:</strong>
                <span>CZ05284996</span>
              </li>
              <li>
                <strong>Bankovní spojení:</strong>
                <span>ČS</span>
              </li>
              <li>
                <strong>Č.Ú.:</strong>
                <span>5525654309/0800</span>
              </li>
            </InfoList>
          </InfoBlock>
        </InfoGrid>

        <FormWrap>
          <h2>Napište nám</h2>
          <Form aria-label="Kontaktní formulář">
            <Field>
              <label htmlFor="name">Jméno</label>
              <input id="name" name="name" type="text" autoComplete="name" />
            </Field>
            <Field>
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" autoComplete="email" />
            </Field>
            <Field>
              <label htmlFor="service">Typ služby</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Vyberte službu
                </option>
                <option>Převoz techniky</option>
                <option>Přeprava auta</option>
                <option>Převoz zboží</option>
                <option>Půjčení dodávky</option>
              </select>
            </Field>
            <FieldFull>
              <label htmlFor="message">Co potřebujete?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Napište odkud, kam, kdy a co povezeme."
              />
            </FieldFull>
            <SubmitButton type="submit">Odeslat poptávku</SubmitButton>
          </Form>
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
    line-height: 0.9;
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

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  padding: clamp(1rem, 2.5vw, 1.6rem);
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.015)
    ),
    rgba(12, 12, 16, 0.84);
  backdrop-filter: blur(12px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: grid;
  gap: 0.45rem;

  label {
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.045);
    color: #fff;
    font: inherit;
    padding: 0.9rem 0.95rem;
    outline: none;
    transition:
      border-color 0.2s ease,
      background 0.2s ease;
  }

  textarea {
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: rgba(255, 122, 26, 0.65);
    background: rgba(255, 255, 255, 0.07);
  }
`;

const FieldFull = styled(Field)`
  grid-column: 1 / -1;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.35rem;
  background: linear-gradient(130deg, #ff9038, #ff5f00 56%, #e14800);
  color: #fff;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 34px rgba(255, 95, 0, 0.24);
  }
`;
