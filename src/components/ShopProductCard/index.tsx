/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image'
import {
  AddButton,
  ButtonsContainer,
  Container,
  Heading,
  Label,
  Paragraph,
  Price,
  TextContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { ProductInfo } from '@/types/productTypes'
import { formattedPrice } from '@/utils/formatPrice'
import { QuantityButton } from '../QuantityButton'
import { ProductsContext } from '@/contexts/ProductsContext'
import { CheckoutModal } from '../CheckoutModal'
import * as Dialog from '@radix-ui/react-dialog'

export default function ShopProductCard({
  title,
  description,
  newProduct,
  imageUrl,
  price,
}: ProductInfo) {
  const { screenType, handleResize } = useContext(NavbarContext)
  const [quantity, setQuantity] = useState(1)
  const { handleAddProduct, shopList } = useContext(ProductsContext)

  function handleSetQuantity(type: string) {
    type === 'add'
      ? setQuantity((prev) => prev + 1)
      : setQuantity((prev) => prev - 1)
  }

  function addProduct() {
    const productToAdd = {
      title,
      imageUrl,
      price: price!,
      quantity,
    }

    handleAddProduct(productToAdd, quantity)
  }

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <Container>
      {imageUrl && (
        <Image
          src={`${imageUrl}${screenType}/image-product.jpg`}
          alt=""
          width={300}
          height={340}
        />
      )}
      <TextContainer>
        {newProduct && <Label>New Product</Label>}
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
        {price && <Price>{formattedPrice(price)}</Price>}
        <ButtonsContainer>
          <QuantityButton onChange={(type) => handleSetQuantity(type)} />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <AddButton onClick={addProduct}>
                <p>Add to Cart</p>
              </AddButton>
            </Dialog.Trigger>
            <CheckoutModal />
          </Dialog.Root>
        </ButtonsContainer>
      </TextContainer>
    </Container>
  )
}
