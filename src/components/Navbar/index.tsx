import { shopCards } from '@/data/shoppingCards'
import { ShopCard } from '../ShopCard'
import { Container } from './styles'

export function Navbar() {
  return (
    <Container>
      {shopCards.map((card, index) => (
        <ShopCard key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </Container>
  )
}
