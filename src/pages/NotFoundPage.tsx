import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <main>
      <Section aria-labelledby="not-found-title">
        <Eyebrow>Chyba 404</Eyebrow>
        <Title id="not-found-title">Stránka nenalezena</Title>
        <SectionText>
          Tato adresa na webu neexistuje. Zkontrolujte prosím URL, nebo se
          vraťte na úvod a pokračujte odtud.
        </SectionText>
        <Actions>
          <PrimaryButton to="/">Zpět na úvod</PrimaryButton>
          <SecondaryButton to="/kontakt">Kontakt</SecondaryButton>
        </Actions>
      </Section>
    </main>
  );
}

export default NotFoundPage;

const Section = styled.section`
  min-height: 100svh;
  display: grid;
  align-content: center;
  padding: clamp(8rem, 14vw, 10rem) 5vw clamp(3rem, 7vw, 5rem);
  max-width: 720px;
`;

const Eyebrow = styled.span`
  color: #ff9f57;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.77rem;
  font-weight: 800;
`;

const Title = styled.h1`
  margin: 0.75rem 0 1rem;
  font-size: clamp(2.6rem, 7vw, 6rem);
  line-height: 1.12;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  max-width: 14ch;
`;

const SectionText = styled.p`
  margin: 0;
  color: #d0d0d7;
  line-height: 1.65;
  max-width: 48ch;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
`;

const PrimaryButton = styled(Link)`
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(255, 122, 26, 0.94);
  color: #fff;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    background: #ff7a1a;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f5f5f8;
  background: rgba(255, 255, 255, 0.04);
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
