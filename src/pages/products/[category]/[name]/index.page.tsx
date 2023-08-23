import { useContext, useEffect } from 'react'
import { NextPageContext } from 'next'
import Image from 'next/image'
import { ProductInfo } from '@/types/productTypes'
import { productsData } from '@/data/productsData'
import { NavbarContext } from '@/contexts/NavbarContext'

import { Navbar } from '@/components/Navbar'
import Layout from '@/components/Layout'
import ShopProductCard from '@/components/ShopProductCard'
import {
  Container,
  Content,
  FeaturesContainer,
  ImagesContainer,
  ImagesWrapper,
  InTheBoxContainer,
  InTheBoxItems,
  InfoWrapper,
  Item,
  RecommendContainer,
  RecommendContent,
  RecommendItem,
} from './styles'
import { BackButton } from '@/components/BackButton'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import { ShopCard } from '@/components/ShopCard'
import { shopCards } from '@/data/shoppingCards'
import { ShopContainer } from '../styles'

interface ProductDetailsProps {
  product: ProductInfo
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { isNavbarOpen, handleResize, screenType } = useContext(NavbarContext)

  const firstTwoImages = product.images?.slice(0, 2)
  const thirdImage = product.images?.slice(2)

  const router = useRouter()

  function handleGoToProductPage(path: string, category: string) {
    const basePath = router.basePath
    router.push(`${basePath}/products/${category}/${path}`)
  }

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <Layout>
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <Container>
          <BackButton />
          <Content>
            <ShopProductCard {...product} />
            <InfoWrapper>
              <FeaturesContainer>
                <h2>Features</h2>
                {product?.features &&
                  product?.features
                    .split('\n')
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </FeaturesContainer>
              <InTheBoxContainer>
                <h2>In the Box</h2>
                <InTheBoxItems>
                  {product.inTheBox?.map((item, index) => (
                    <Item key={index}>
                      <span>{item.quantity}x</span>
                      <p>{item.product}</p>
                    </Item>
                  ))}
                </InTheBoxItems>
              </InTheBoxContainer>
            </InfoWrapper>
            <ImagesContainer>
              <ImagesWrapper>
                {firstTwoImages?.map((item, index) => (
                  <Image
                    key={item}
                    alt=""
                    width={327}
                    height={174}
                    src={`/assets/${item}/${screenType}/image-gallery-${
                      index + 1
                    }.jpg`}
                  />
                ))}
              </ImagesWrapper>
              {thirdImage?.map((item) => (
                <Image
                  key={item}
                  alt=""
                  width={327}
                  height={174}
                  src={`/assets/${item}/${screenType}/image-gallery-3.jpg`}
                />
              ))}
            </ImagesContainer>
            <RecommendContainer>
              <h2>You may also like</h2>
              <RecommendContent>
                {product.mayAlsoLike?.map((item, index) => {
                  return (
                    <RecommendItem key={index}>
                      <Image
                        src={`/assets/shared/${screenType}/${item.link}`}
                        alt=""
                        width={327}
                        height={120}
                      />
                      <h3>{item.name}</h3>
                      <Button
                        title="See Product"
                        type="primary"
                        onClick={() =>
                          handleGoToProductPage(item.path, item.category)
                        }
                      />
                    </RecommendItem>
                  )
                })}
              </RecommendContent>
            </RecommendContainer>
            <ShopContainer>
              {shopCards.map((card, index) => (
                <ShopCard
                  key={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                />
              ))}
            </ShopContainer>
          </Content>
        </Container>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { name } = context.query
  const product = productsData.find((item) => item.name === name) || null

  return {
    props: {
      product,
    },
  }
}
