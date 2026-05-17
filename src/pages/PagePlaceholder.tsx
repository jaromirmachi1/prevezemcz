import { useEffect } from "react";
import styled from "styled-components";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  useEffect(() => {
    document.title = `${title} | Převezem.cz`;
  }, [title]);

  return (
    <main>
      <Wrap>
        <p>Nová stránka</p>
        <h1>{title}</h1>
        <span>{description}</span>
      </Wrap>
    </main>
  );
}

export default PagePlaceholder;

const Wrap = styled.section`
  min-height: 100vh;
  padding: clamp(8rem, 14vw, 10rem) 5vw 4rem;
  display: grid;
  align-content: start;
  gap: 1rem;

  p {
    margin: 0;
    color: #ff9f57;
    font-size: 0.74rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 800;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 6vw, 5rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    max-width: 12ch;
  }

  span {
    color: #d0d0d7;
    line-height: 1.65;
    max-width: 54ch;
  }
`;
