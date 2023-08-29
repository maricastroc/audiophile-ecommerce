import { navigationCards } from '@/data/navigationCards'
import { NavigationCard } from '../NavigationCard'
import { Container } from './styles'

export function Navbar() {
  return (
    <Container>
      {navigationCards.map((card, index) => (
        <NavigationCard
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
        />
      ))}
    </Container>
  )
}
