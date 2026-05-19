import styled from "styled-components";
import { FACEBOOK_URL, FacebookIcon } from "./facebook";

function FacebookPeek() {
  return (
    <PeekLink
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Převezem.cz na Facebooku (otevře se v novém okně)"
    >
      <IconWrap>
        <FacebookIcon />
      </IconWrap>
      <Label>Facebook</Label>
    </PeekLink>
  );
}

export default FacebookPeek;

const PeekLink = styled.a`
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 25;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1.05rem 0.9rem 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 0;
  border-radius: 0.85rem 0 0 0.85rem;
  background: rgba(14, 15, 22, 0.52);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: -8px 0 28px rgba(0, 0, 0, 0.22);
  color: rgba(246, 246, 247, 0.68);
  text-decoration: none;
  transform: translateY(-50%) translateX(calc(100% - 2.85rem));
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover,
  &:focus-visible {
    transform: translateY(-50%) translateX(0);
    color: #ff9f57;
    background: rgba(255, 122, 26, 0.1);
    border-color: rgba(255, 122, 26, 0.28);
    box-shadow:
      -10px 0 32px rgba(0, 0, 0, 0.28),
      0 0 0 1px rgba(255, 122, 26, 0.08) inset;
    outline: none;
  }

  @media (max-width: 820px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition:
      color 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease;

    &:hover,
    &:focus-visible {
      transform: translateY(-50%) translateX(0);
    }
  }
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
  transition: background 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  ${PeekLink}:hover &,
  ${PeekLink}:focus-visible & {
    background: rgba(255, 122, 26, 0.16);
  }
`;

const Label = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
  padding-right: 0.15rem;
`;
