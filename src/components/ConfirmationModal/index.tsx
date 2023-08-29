import {
  Overlay,
  Description,
  Title,
  Content,
  CloseButton,
  TitleContainer,
  Container,
  SummaryContainer,
  SummaryProducts,
  SummaryTotal,
  Subtitle,
  ProductWrapper,
  Separator,
  SeeMore,
} from './styles'

import ConfirmIcon from '../../../public/assets/checkout/icon-order-confirmation.svg'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { formattedPrice } from '@/utils/formatPrice'
import { calculateFinalPrice } from '@/utils/calculateFinalPrice'
import { Product } from './components/Product'
import { useRouter } from 'next/router'

export function ConfirmationModal() {
  const { shopList, calculateTotalPrice, handleClearShopList } =
    useContext(ProductsContext)
  const [showOtherProducts, setShowOtherProducts] = useState(false)
  const router = useRouter()

  const firstProduct = shopList[0]
  const total = calculateFinalPrice(calculateTotalPrice())

  const otherProducts = shopList.length - 1

  async function redirectToHome() {
    const basePath = router.basePath
    await router.push(`${basePath}/`)
    handleClearShopList()
  }

  return (
    <Container>
      <Overlay />
      <Content>
        <TitleContainer>
          <Image src={ConfirmIcon} alt="" width={64} height={64} />
          <Title>Thank you for your order</Title>
          <Subtitle>You will receive an email confirmation shortly.</Subtitle>
        </TitleContainer>
        <Description>
          <SummaryContainer>
            <SummaryProducts>
              <ProductWrapper>
                {showOtherProducts ? (
                  shopList.map((data, index) => {
                    return <Product key={index} data={data} />
                  })
                ) : (
                  <Product data={firstProduct} />
                )}
                {shopList.length > 1 && (
                  <>
                    <Separator />
                    <SeeMore
                      onClick={() => setShowOtherProducts(!showOtherProducts)}
                    >
                      {showOtherProducts
                        ? 'view less'
                        : `and ${otherProducts} other item(s)`}
                    </SeeMore>
                  </>
                )}
              </ProductWrapper>
            </SummaryProducts>
            <SummaryTotal>
              <p>Grand Total</p>
              <h3>{formattedPrice(total)}</h3>
            </SummaryTotal>
          </SummaryContainer>
        </Description>
        <CloseButton onClick={redirectToHome}>Back to home</CloseButton>
      </Content>
    </Container>
  )
}
