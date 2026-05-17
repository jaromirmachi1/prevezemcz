import styled from "styled-components";
import ContactForm from "../components/ContactForm";

function ContactSection() {
  return (
    <Footer id="kontakt">
      <Content>
        <Intro>
          <Eyebrow>Kontakt</Eyebrow>
          <h2>Máte co převézt?</h2>
          <p>
            Napište nám pár detailů a připravíme rychlé řešení pro převoz
            techniky, aut nebo nákladu.
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

        <ContactForm source="homepage" idPrefix="home-contact" />
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
