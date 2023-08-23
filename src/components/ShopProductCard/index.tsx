/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image'
import { Button } from '@/components/Button'
import {
  Container,
  Heading,
  Label,
  Paragraph,
  Price,
  TextContainer,
} from './styles'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { ProductInfo } from '@/types/productTypes'
import { formattedPrice } from '@/utils/formatPrice'

export default function ShopProductCard({
  title,
  description,
  newProduct,
  imageUrl,
  price,
}: ProductInfo) {
  const { screenType } = useContext(NavbarContext)
  function handleAddProduct() {
    console.log('test')
  }

  return (
    <Container>
      <Image
        src={`${imageUrl}${screenType}/image-category-page-preview.jpg`}
        alt=""
        width={300}
        height={340}
      />
      <TextContainer>
        {newProduct && <Label>New Product</Label>}
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
        {price && <Price>{formattedPrice(price)}</Price>}
        <Button type="primary" title="AddToCart" onClick={handleAddProduct} />
      </TextContainer>
    </Container>
  )
}
