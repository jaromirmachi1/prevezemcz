import styled from 'styled-components'
import TiltedCard from '../components/TiltedCard'
import mn1 from '../assets/mn1.jpg'
import mn5 from '../assets/mn5.jpg'
import mn9 from '../assets/mn9.jpg'
import mn14 from '../assets/mn14.jpg'
import mn20 from '../assets/mn20.jpg'

const cards = [
  {
    metric: '10+',
    title: 'Let zkušeností',
    description: 'Stabilní procesy a ověřené know-how pro firemní i individuální převoz.',
    imageUrl: mn1,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d="M12 3l2.55 5.17L20 9l-4 3.9.95 5.52L12 15.7l-4.95 2.72L8 12.9 4 9l5.45-.83L12 3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    metric: '24/7',
    title: 'Rychlá dostupnost',
    description: 'Výjezdy řešíme operativně tak, aby vaše logistika nestála.',
    imageUrl: mn5,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.2l3.5 2.1-.8 1.3L11.5 13V7H13z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    metric: 'ČR + EU',
    title: 'Mezinárodní pokrytí',
    description: 'Přeprava po Česku i Evropě s důrazem na bezpečnost a termíny.',
    imageUrl: mn9,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    metric: '1.5T',
    title: 'Možnost objednání dodávky',
    description: 'Citroen Jumper a Ford Transit pro bezpečný převoz lehčího nákladu.',
    imageUrl: mn14,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d="M2 15h1.5V8h10v7h2.2l1.5-3.3V9.5h2.8v5.5H22v2h-1.3a2.2 2.2 0 01-4.3 0H9.3a2.2 2.2 0 01-4.3 0H2v-2zm4.2 2a.8.8 0 100-1.6.8.8 0 000 1.6zm11.4 0a.8.8 0 100-1.6.8.8 0 000 1.6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    metric: 'EXPRES',
    title: 'Rychle a bezpečně',
    description: 'Operativní dispatch a profesionální posádka od naložení po doručení.',
    imageUrl: mn20,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 3v5.1l3.3 2-.7 1.2L11.5 13V7H13zM3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M18.4 5.6L17 7m-10 10L5.6 18.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function ReferencesSection() {
  return (
    <Section id="reference">
      <SectionTitle>Proč si firmy vybírají nás</SectionTitle>
      <Stats>
        {cards.map((card) => (
          <TiltedCard
            key={card.title}
            title={card.title}
            description={card.description}
            metric={card.metric}
            imageUrl={card.imageUrl}
            icon={card.icon}
          />
        ))}
      </Stats>
    </Section>
  )
}

export default ReferencesSection

const Section = styled.section`
  min-height: 100svh;
  display: grid;
  align-content: center;
  padding: clamp(6.2rem, 9vw, 7.2rem) 5vw clamp(2rem, 4vw, 3rem);
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4.5vw, 4.2rem);
  margin-bottom: clamp(1.1rem, 2.8vw, 2rem);
  letter-spacing: -0.04em;
  line-height: 1.12;
  text-transform: uppercase;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(0.9rem, 2vw, 1.4rem);
  grid-auto-rows: minmax(270px, 1fr);

  & > article {
    grid-column: span 2;
    min-height: clamp(270px, 30vh, 360px);
  }

  & > article:nth-child(4) {
    grid-column: 2 / span 2;
  }

  & > article:nth-child(5) {
    grid-column: 4 / span 2;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: minmax(250px, 1fr);

    & > article,
    & > article:nth-child(4),
    & > article:nth-child(5) {
      grid-column: auto;
    }
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`
