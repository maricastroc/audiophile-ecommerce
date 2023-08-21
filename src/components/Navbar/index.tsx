import { ShopCard } from '../ShopCard'
import { Container } from './styles'

export function Navbar() {
  return (
    <Container>
      <ShopCard
        title="Headphones"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <ShopCard
        title="Speakers"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <ShopCard
        title="Earphones"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </Container>
  )
}
