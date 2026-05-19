import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoPrevezem from "../assets/logo-prevezem-white.svg";

const menuLinks = [
  {
    href: "/vozovy-park",
    label: "Vozový park",
    kicker: "Odtahové speciály a dodávky",
  },
  {
    href: "/pneuservis",
    label: "Pneuservis",
    kicker: "Výměna pneumatik na zimní a letní sezónu",
  },
  {
    href: "/kariera",
    label: "Kariéra",
    kicker: "Přijímáme nové kolegy",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    kicker: "Formulář a kontaktní údaje",
  },
];

function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const pageContent = document.querySelectorAll<HTMLElement>("main, footer");
    const previousAriaHidden = Array.from(pageContent, (element) =>
      element.getAttribute("aria-hidden"),
    );

    document.body.style.overflow = "hidden";
    pageContent.forEach((element) => {
      element.setAttribute("aria-hidden", "true");
      element.setAttribute("inert", "");
    });

    const focusTimer = window.setTimeout(() => {
      firstMenuLinkRef.current?.focus();
    }, 80);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      pageContent.forEach((element, index) => {
        const ariaHidden = previousAriaHidden[index];

        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }

        element.removeAttribute("inert");
      });
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  return (
    <>
      <NavRoot aria-label="Hlavní navigace">
        <Logo to="/" aria-label="Převezem.cz" onClick={closeMenu}>
          <LogoImage
            src={logoPrevezem}
            alt="Převoz manipulační techniky, aut a zboží."
            loading="eager"
          />
        </Logo>
        <MenuButton
          type="button"
          aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          $isOpen={isMenuOpen}
          onClick={toggleMenu}
        >
          <MenuLabel>{isMenuOpen ? "Zavřít" : "Menu"}</MenuLabel>
          <MenuLines aria-hidden="true" data-lines>
            <span />
            <span />
            <span />
          </MenuLines>
        </MenuButton>
        <HeaderAction to="/kontakt" onClick={closeMenu}>
          Kontakt
          <HeaderActionDot aria-hidden="true" />
        </HeaderAction>
      </NavRoot>

      <MenuOverlay
        id="site-menu"
        aria-hidden={!isMenuOpen}
        $isOpen={isMenuOpen}
      >
        <MenuBackdrop aria-hidden="true" onClick={closeMenu} />
        <MenuPanel>
          <MenuContent>
            <MenuNav aria-label="Sekce webu">
              {menuLinks.map((item, index) => (
                <MenuLink
                  key={item.href}
                  to={item.href}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  $index={index}
                  onClick={closeMenu}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.label}</strong>
                  <small>{item.kicker}</small>
                </MenuLink>
              ))}
            </MenuNav>
          </MenuContent>
        </MenuPanel>
      </MenuOverlay>
    </>
  );
}

export default FloatingNav;

const NavRoot = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: minmax(230px, 25vw) 1fr minmax(190px, 22vw);
  align-items: center;
  width: 100%;
  min-height: 6.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(7, 8, 15, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.24);

  @media (max-width: 820px) {
    grid-template-columns: 1fr 6.2rem;
    min-height: 5.2rem;
  }
`;

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 5vw 0 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.16);

  @media (max-width: 820px) {
    padding: 0 1.25rem;
  }
`;

const LogoImage = styled.img`
  height: 1.35rem;
  width: auto;
  display: block;

  @media (max-width: 820px) {
    height: 1.05rem;
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  border: 0;
  border-radius: 0;
  background: ${({ $isOpen }) =>
    $isOpen ? "rgba(255, 122, 26, 0.12)" : "transparent"};
  color: #fff;
  font-size: 0.76rem;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  transform: translateZ(0);
  transition:
    color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover,
  &:focus-visible {
    color: #ff9f57;
    background: rgba(255, 122, 26, 0.08);
    outline: none;
    transform: translateY(-1px);
  }

  &:hover [data-lines] span:first-child {
    transform: scaleX(0.86);
  }

  &:hover [data-lines] span:last-child {
    transform: scaleX(1.28);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      [data-lines] span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      [data-lines] span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      [data-lines] span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  &:active {
    transform: translateY(0) scale(0.985);
  }

  @media (max-width: 820px) {
    border-left: 1px solid rgba(255, 255, 255, 0.16);
  }
`;

const MenuLabel = styled.span`
  @media (max-width: 820px) {
    display: none;
  }
`;

const MenuLines = styled.span`
  display: grid;
  gap: 0.45rem;
  width: 2.6rem;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 999px;
    transform-origin: center;
    transition:
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.25s ease;
  }
`;

const HeaderActionDot = styled.span`
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.78;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;
`;

const HeaderAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  height: 100%;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.76rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-left: 1px solid rgba(255, 255, 255, 0.16);
  transition:
    color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    color: #ff9f57;
    background: rgba(255, 122, 26, 0.08);
    transform: translateY(-1px);
  }

  &:hover ${HeaderActionDot} {
    opacity: 1;
    transform: scale(1.08);
    box-shadow: 0 0 0 4px rgba(255, 122, 26, 0.2);
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 20;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: visibility 0.5s cubic-bezier(0.22, 1, 0.36, 1);
`;

const MenuBackdrop = styled.button`
  position: absolute;
  inset: 0;
  border: 0;
  padding: 0;
  background:
    radial-gradient(
      circle at 78% 18%,
      rgba(255, 122, 26, 0.26),
      transparent 32%
    ),
    rgba(3, 4, 8, 0.78);
  backdrop-filter: blur(18px);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${MenuOverlay}[aria-hidden='false'] & {
    opacity: 1;
  }
`;

const MenuPanel = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: clamp(6.2rem, 9vw, 7rem) 5vw clamp(1.2rem, 2.4vw, 1.8rem);
  background:
    linear-gradient(
      120deg,
      rgba(7, 8, 15, 0.95) 0%,
      rgba(7, 8, 15, 0.72) 54%,
      rgba(7, 8, 15, 0.92) 100%
    ),
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size:
    auto,
    4rem 4rem,
    4rem 4rem;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.78s cubic-bezier(0.22, 1, 0.36, 1);

  ${MenuOverlay}[aria-hidden='false'] & {
    clip-path: inset(0);
  }
`;

const MenuContent = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: stretch;
`;

const MenuNav = styled.nav`
  flex: 1;
  min-height: 0;
  display: grid;
  align-content: space-evenly;
  gap: clamp(0.3rem, 0.9vh, 0.65rem);
`;

const MenuLink = styled(Link)<{ $index: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  gap: clamp(0.85rem, 2vw, 1.5rem);
  align-items: baseline;
  padding: clamp(0.9rem, 2.1vw, 1.35rem) 0;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  opacity: 0;
  transform: translateY(2.2rem);
  transition:
    opacity 0.52s cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $index }) => 0.28 + $index * 0.08}s,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $index }) => 0.28 + $index * 0.08}s,
    color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, #ff9f57, transparent);
    transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }

  span {
    color: #ff9f57;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.18em;
  }

  strong {
    font-size: clamp(2.2rem, 7.2vw, 6.2rem);
    line-height: 0.82;
    letter-spacing: -0.07em;
    text-transform: uppercase;
  }

  small {
    display: block;
    grid-column: 2;
    margin-top: 0.55rem;
    color: #cfcfd7;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  &:hover,
  &:focus-visible {
    color: #ff9f57;
    padding-left: 1vw;
    outline: none;
  }

  &:active {
    transform: translateY(0) scale(0.992);
  }

  &:hover::after,
  &:focus-visible::after {
    width: 100%;
  }

  ${MenuOverlay}[aria-hidden='false'] & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    grid-template-columns: 2.4rem minmax(0, 1fr);

    strong {
      font-size: clamp(2rem, 12vw, 4rem);
    }
  }
`;
