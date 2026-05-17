import { Link } from "react-router-dom";
import styled from "styled-components";

function HeroSection() {
  return (
    <Hero>
      <HeroVisual>
        <HeroImage
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
          alt="Nákladní vůz připravený k přepravě"
          loading="eager"
        />
      </HeroVisual>
      <HeroBackdrop aria-hidden="true" />
      <HeroContent>
        <HeroCopy>
          <Eyebrow>Ostrava - ČR - Evropa</Eyebrow>
          <h1>
            <HeroTitleLine>Síla pro</HeroTitleLine>
            <HeroTitleLine>váš náklad</HeroTitleLine>
          </h1>
          <p>Převoz manipulační techniky, aut a nákladního zboží</p>
          <HeroFooter>
            <Actions>
              <PrimaryButton to="/kontakt">Objednat převoz</PrimaryButton>
            </Actions>
            <FloatingCard>
              <strong>Do 10 tun</strong>
              <span>ČR + Evropa</span>
            </FloatingCard>
          </HeroFooter>
        </HeroCopy>
      </HeroContent>
    </Hero>
  );
}

export default HeroSection;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  align-items: flex-end;
  min-height: 100svh;
  padding: 8.5rem 5vw 4.6rem;
  background: #07080f;

  @media (max-width: 900px) {
    min-height: 100svh;
    padding: 7rem 5vw 2.5rem;
  }
`;

const HeroBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      90deg,
      rgba(7, 8, 15, 0.92) 0%,
      rgba(7, 8, 15, 0.64) 34%,
      rgba(7, 8, 15, 0.16) 100%
    ),
    linear-gradient(
      180deg,
      rgba(7, 8, 15, 0.36) 0%,
      rgba(7, 8, 15, 0.08) 46%,
      rgba(7, 8, 15, 0.78) 100%
    ),
    radial-gradient(
      circle at 18% 72%,
      rgba(255, 122, 26, 0.22),
      transparent 34%
    );
  pointer-events: none;
`;

const HeroVisual = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 4rem 4rem;
    mix-blend-mode: screen;
    opacity: 0.48;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 68% center;
  filter: saturate(0.88) contrast(1.08) brightness(0.72);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(1120px, 100%);
`;

const HeroCopy = styled.div`
  display: grid;
  justify-items: start;
  gap: 0.45rem;
  max-width: 700px;

  h1 {
    font-size: clamp(2.5rem, 6.5vw, 6.25rem);
    line-height: 1.12;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    margin: 0.65rem 0 0.8rem;
  }

  p {
    color: #efeff4;
    max-width: 44ch;
    font-size: clamp(0.98rem, 1.2vw, 1.14rem);
    line-height: 1.58;
    margin: 0;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: clamp(2.25rem, 11vw, 4.1rem);
    }
  }
`;

const HeroTitleLine = styled.span`
  display: block;
`;

const Eyebrow = styled.span`
  color: #ff7a1a;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const HeroFooter = styled.div`
  display: flex;
  align-items: end;
  gap: clamp(1rem, 3vw, 2.2rem);
  margin-top: clamp(1.35rem, 3.1vw, 2.4rem);

  @media (max-width: 560px) {
    align-items: start;
    flex-direction: column;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  background: rgba(255, 122, 26, 0.94);
  color: #fff;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    background: #ff7a1a;
  }
`;

const FloatingCard = styled.article`
  min-width: 168px;
  padding: 0 0 0 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  display: grid;
  gap: 0.35rem;

  strong {
    color: #fff;
    font-size: clamp(1.35rem, 2.4vw, 2.05rem);
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  span {
    color: #ff9f57;
    line-height: 1;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    width: fit-content;
    min-width: 0;
  }

  @media (max-width: 560px) {
    padding: 0.95rem 0 0;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
