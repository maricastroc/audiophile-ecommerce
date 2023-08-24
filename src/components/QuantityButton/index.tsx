import { Minus, Plus } from 'phosphor-react'
import { Container, PricingBtn } from './styles'
import { useState } from 'react'

interface QuantityButtonProps {
  onChange: (type: string) => void
}

export function QuantityButton({ onChange }: QuantityButtonProps) {
  const [productQuantity, setProductQuantity] = useState(1)

  function handleAddProduct() {
    setProductQuantity((prev) => prev + 1)
    onChange('add')
  }

  function handleRemoveProduct() {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1)
      onChange('remove')
    }
  }

  return (
    <Container>
      <PricingBtn>
        <Plus onClick={handleAddProduct} />
      </PricingBtn>
      {productQuantity}
      <PricingBtn>
        <Minus onClick={handleRemoveProduct} />
      </PricingBtn>
    </Container>
  )
}
