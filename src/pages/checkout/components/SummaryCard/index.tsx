import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
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

  const [totalPrice, setTotalPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);
  
  useEffect(() => {
    const price = calculateTotalPrice();
    const calculatedVat = (price * 20) / 100;
    const finalTotal = calculateFinalPrice(price);
  
    setTotalPrice(price);
    setVat(calculatedVat);
    setTotal(finalTotal);
    setIsListEmpty(shopList.length === 0)
  }, [shopList]);

  return (
    <Container>
      <Heading>Summary</Heading>
      <ProductsWrapper>
        {shopList.length > 0 && isClient &&
          shopList.map((item, index) => {
            return (
              <ProductContainer key={index}>
                <img
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
        {!isListEmpty && (
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
