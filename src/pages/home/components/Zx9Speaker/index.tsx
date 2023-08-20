import ProductCard from '../ProductCard'
import { Container, ImageContainer } from './styles'

export function Zx9Speaker() {
  return (
    <Container>
      <ImageContainer />
      <ProductCard
        title="ZX9 SPEAKER"
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        buttonType="secondary"
        newProductLabel={false}
      />
    </Container>
  )
}
