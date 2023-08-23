import { Minus, Plus } from 'phosphor-react'
import { Container, PricingBtn } from './styles'

export function PriceButton() {
  return (
    <Container>
      <PricingBtn>
        <Plus />
      </PricingBtn>
      1
      <PricingBtn>
        <Minus />
      </PricingBtn>
    </Container>
  )
}
