import { Button } from '@/components/Button'
import { CardContainer, Container, ImageContainer } from './styles'

export function Earphones() {
  return (
    <Container>
      <ImageContainer />
      <CardContainer>
        <h3>YX1 EARPHONES</h3>
        <Button title="See Product" type="tertiary" />
      </CardContainer>
    </Container>
  )
}
