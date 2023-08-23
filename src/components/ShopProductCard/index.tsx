/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image'
import { Button } from '@/components/Button'
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
import { useContext, useEffect } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { ProductInfo } from '@/types/productTypes'
import { formattedPrice } from '@/utils/formatPrice'
import { PriceButton } from '../PriceButton'

export default function ShopProductCard({
  title,
  description,
  newProduct,
  imageUrl,
  price,
}: ProductInfo) {
  const { screenType, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  function handleAddProduct() {
    console.log('test')
  }

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
          <PriceButton />
          <AddButton>
            <p>Add to Cart</p>
          </AddButton>
        </ButtonsContainer>
      </TextContainer>
    </Container>
  )
}
