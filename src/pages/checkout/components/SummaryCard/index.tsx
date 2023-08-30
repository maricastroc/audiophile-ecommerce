import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import Image from 'next/image'
import { formattedPrice } from '@/utils/formatPrice'

import {
  Container,
  Heading,
  NameAndPrice,
  PriceContainer,
  PriceItem,
  ProductContainer,
  ProductInfo,
  ProductsWrapper,
  Quantity,
  TotalItem,
} from './styles'
import { calculateFinalPrice } from '@/utils/calculateFinalPrice'

export function SummaryCard() {
  const { shopList, calculateTotalPrice } = useContext(ProductsContext)

  const totalPrice = calculateTotalPrice()

  const vat = (totalPrice * 20) / 100

  const total = calculateFinalPrice(totalPrice)

  const emptyList = shopList.length === 0

  return (
    <Container>
      <Heading>Summary</Heading>
      <ProductsWrapper>
        {shopList.length > 0 &&
          shopList.map((item, index) => {
            return (
              <ProductContainer key={index}>
                <Image
                  alt=""
                  width={64}
                  height={64}
                  src={`${item.imageUrl}mobile/image-product.jpg`}
                />
                <ProductInfo>
                  <NameAndPrice>
                    <p>{item.abbreviation}</p>
                    <span>{formattedPrice(item.price)}</span>
                  </NameAndPrice>
                  <Quantity>x{item.quantity}</Quantity>
                </ProductInfo>
              </ProductContainer>
            )
          })}
        {!emptyList && (
          <PriceContainer>
            <PriceItem>
              <span>Total</span>
              <p>{formattedPrice(totalPrice)}</p>
            </PriceItem>
            <PriceItem>
              <span>Shipping</span>
              <p>{formattedPrice(50)}</p>
            </PriceItem>
            <PriceItem>
              <span>Vat (included)</span>
              <p>{formattedPrice(vat)}</p>
            </PriceItem>
            <TotalItem>
              <span>Grand total</span>
              <p>{formattedPrice(total)}</p>
            </TotalItem>
          </PriceContainer>
        )}
      </ProductsWrapper>
    </Container>
  )
}
