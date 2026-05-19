import { Link } from "react-router-dom";
import styled from "styled-components";
import logoPrevezem from "../assets/logo-prevezem-white.svg";
import uitherapyLogo from "../assets/uitherapylogo.png";
import { FACEBOOK_URL, FacebookIcon } from "./facebook";

const footerLinks = [
  { label: "Úvod", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "Vozový park", href: "/vozovy-park" },
  { label: "Pneuservis", href: "/pneuservis" },
  { label: "Kariéra", href: "/kariera" },
  { label: "Kontakt", href: "/kontakt" },
];

const services = [
  "Převoz manipulační techniky",
  "Přeprava aut a užitkových vozů",
  "Nákladní převoz do 10 tun",
];

function SiteFooter() {
  return (
    <Footer>
      <Top>
        <Brand>
          <Logo to="/" aria-label="Převezem.cz">
            <img
              src={logoPrevezem}
              alt="Převezem.cz"
              loading="lazy"
            />
          </Logo>
          <p>
            Převoz manipulační techniky, aut a zboží po ČR i Evropě. Rychle,
            bezpečně a s profesionálním přístupem.
          </p>
        </Brand>

        <FooterNav aria-label="Navigace v patičce">
          <FooterColumn>
            <h2>Menu</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h2>Služby</h2>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </FooterNav>

        <Contact>
          <h2>Kontakt</h2>
          <a href="tel:+420732750428">+420 732 750 428</a>
          <a href="mailto:info@prevezem.cz">info@prevezem.cz</a>
          <span>Ostrava - ČR - Evropa</span>
          <FacebookFooterLink
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Převezem.cz na Facebooku (otevře se v novém okně)"
          >
            <FacebookIcon size={16} />
            Facebook
          </FacebookFooterLink>
        </Contact>
      </Top>

      <Bottom>
        <span>© {new Date().getFullYear()} Převezem.cz</span>
        <Credit>
          <span>Designed & built by</span>
          <img src={uitherapyLogo} alt="uitherapy" loading="lazy" />
        </Credit>
      </Bottom>
    </Footer>
  );
}

export default SiteFooter;

const Footer = styled.footer`
  position: relative;
  overflow: hidden;
  padding: clamp(2.5rem, 5vw, 4.5rem) 5vw 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(255, 122, 26, 0.18),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.01)
    );
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 1.1fr) minmax(320px, 1fr) minmax(
      230px,
      0.7fr
    );
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: grid;
  gap: 1.2rem;

  p {
    margin: 0;
    color: #d0d0d7;
    max-width: 42ch;
    line-height: 1.65;
  }
`;

const Logo = styled(Link)`
  width: fit-content;

  img {
    display: block;
    height: clamp(1.25rem, 2vw, 1.55rem);
    width: auto;
  }
`;

const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h2 {
    margin: 0 0 0.9rem;
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  ul {
    display: grid;
    gap: 0.55rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a,
  span {
    color: #ededf2;
    text-decoration: none;
    line-height: 1.45;
  }

  a {
    transition:
      color 0.25s ease,
      padding-left 0.25s ease;
  }

  a:hover,
  a:focus-visible {
    color: #ff9f57;
    padding-left: 0.25rem;
    outline: none;
  }
`;

const Contact = styled.address`
  display: grid;
  gap: 0.55rem;
  font-style: normal;

  h2 {
    margin: 0 0 0.9rem;
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  a {
    color: #fff;
    width: fit-content;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: -0.02em;
    transition: color 0.25s ease;
  }

  a:hover,
  a:focus-visible {
    color: #ff9f57;
    outline: none;
  }

  span {
    color: #bcbcc5;
    margin-top: 0.35rem;
  }
`;

const FacebookFooterLink = styled.a`
  display: none;
  align-items: center;
  gap: 0.55rem;
  width: fit-content;
  margin-top: 0.65rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(246, 246, 247, 0.78);
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  &:hover,
  &:focus-visible {
    color: #ff9f57;
    background: rgba(255, 122, 26, 0.1);
    border-color: rgba(255, 122, 26, 0.28);
    outline: none;
  }

  @media (max-width: 820px) {
    display: inline-flex;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #9f9faa;
  font-size: 0.82rem;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

const Credit = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: #9f9faa;
  }

  img {
    display: block;
    width: auto;
    height: clamp(0.95rem, 1.5vw, 1.2rem);
    opacity: 0.95;
  }
`;
