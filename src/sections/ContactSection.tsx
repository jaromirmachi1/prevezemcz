import styled from "styled-components";

function ContactSection() {
  return (
    <Footer id="kontakt">
      <Content>
        <Intro>
          <Eyebrow>Kontakt</Eyebrow>
          <h2>Máte co převézt?</h2>
          <p>
            Napište nám pár detailů a připravíme rychlé řešení pro převoz
            techniky, aut, zboží nebo pronájem dodávky.
          </p>
          <ContactGrid>
            <ContactItem>
              <span>Telefon</span>
              <a href="tel:+420732750428">+420 732 750 428</a>
            </ContactItem>
            <ContactItem>
              <span>E-mail</span>
              <a href="mailto:info@prevezem.cz">info@prevezem.cz</a>
            </ContactItem>
          </ContactGrid>
        </Intro>

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
      </Content>
    </Footer>
  );
}

export default ContactSection;

const Footer = styled.footer`
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 0.5rem;
  padding: clamp(3rem, 6vw, 5.5rem) 5vw;
  background:
    radial-gradient(
      circle at 82% 18%,
      rgba(255, 122, 26, 0.18),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 40%);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = styled.div`
  max-width: 560px;

  h2 {
    margin: 0.65rem 0 1rem;
    font-size: clamp(2.6rem, 7vw, 6.8rem);
    line-height: 1.12;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  p {
    color: #d0d0d7;
    max-width: 44ch;
    margin: 0;
    line-height: 1.65;
  }
`;

const Eyebrow = styled.span`
  color: #ff8d3a;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.77rem;
  font-weight: 800;
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  display: grid;
  gap: 0.25rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  span {
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    font-weight: 800;
    letter-spacing: -0.02em;

    &:hover {
      color: #ff9f57;
    }
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

