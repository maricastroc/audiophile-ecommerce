import { Minus, Plus } from 'phosphor-react'
import { Container, PricingBtn } from './styles'
import { useContext, useState } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { ShopProductInfo } from '@/types/shopType'

interface ModalQuantityButtonProps {
  product: ShopProductInfo
}

export function ModalQuantityButton({ product }: ModalQuantityButtonProps) {
  const [productQuantity, setProductQuantity] = useState(1)
  const { handleAddProduct, handleRemoveProduct } = useContext(ProductsContext)

  function handleAdd() {
    setProductQuantity((prev) => prev + 1)
    handleAddProduct(product, productQuantity)
  }

  function handleRemove() {
    setProductQuantity((prev) => prev - 1)
    handleRemoveProduct(product, productQuantity)
  }

  return (
    <Container>
      <PricingBtn>
        <Plus onClick={handleAdd} />
      </PricingBtn>
      {product.quantity}
      <PricingBtn>
        <Minus onClick={handleRemove} />
      </PricingBtn>
    </Container>
  )
}
