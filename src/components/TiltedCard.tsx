import { type MouseEvent, type ReactNode, useMemo, useState } from 'react'
import styled from 'styled-components'

type TiltedCardProps = {
  title: string
  description: string
  metric: string
  imageUrl: string
  icon: ReactNode
}

function TiltedCard({ title, description, metric, imageUrl, icon }: TiltedCardProps) {
  const [transform, setTransform] = useState(
    'perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)',
  )

  const cardStyle = useMemo(() => ({ transform }), [transform])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) * 2 - 1) * 8
    const rotateX = ((y / rect.height) * 2 - 1) * -8
    setTransform(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`,
    )
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <Card
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      $imageUrl={imageUrl}
    >
      <Overlay />
      <IconWrap>{icon}</IconWrap>
      <Metric>{metric}</Metric>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default TiltedCard

const Card = styled.article<{ $imageUrl: string }>`
  position: relative;
  min-height: 260px;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1.25rem;
  background:
    linear-gradient(180deg, rgba(7, 8, 14, 0.3), rgba(7, 8, 14, 0.9)),
    url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: rgba(255, 122, 26, 0.4);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.42);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 12% 12%, rgba(255, 122, 26, 0.18), transparent 35%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 45%);
`

const IconWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 2.3rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #ff9f57;
  border: 1px solid rgba(255, 159, 87, 0.38);
  background: rgba(9, 10, 18, 0.6);
`

const Metric = styled.p`
  position: relative;
  z-index: 1;
  margin: 1rem 0 0.35rem;
  font-size: 1.75rem;
  line-height: 1;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #fff;
`

const Title = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 0 0.45rem;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffd5b4;
`

const Description = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: #ececf1;
  line-height: 1.5;
  max-width: 32ch;
`
