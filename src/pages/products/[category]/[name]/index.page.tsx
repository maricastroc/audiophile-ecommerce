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
  FeaturesContainer,
  ImagesContainer,
  ImagesWrapper,
  InTheBoxContainer,
  InTheBoxItems,
  Item,
  RecommendContainer,
  RecommendItem,
} from './styles'
import { BackButton } from '@/components/BackButton'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'

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
          <ShopProductCard {...product} />
          <FeaturesContainer>
            <h3>Features</h3>
            {product?.features &&
              product?.features
                .split('\n')
                .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </FeaturesContainer>
          <InTheBoxContainer>
            <h3>In the Box</h3>
            <InTheBoxItems>
              {product.inTheBox?.map((item, index) => (
                <Item key={index}>
                  <span>{item.quantity}x</span>
                  <p>{item.product}</p>
                </Item>
              ))}
            </InTheBoxItems>
          </InTheBoxContainer>
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
          </RecommendContainer>
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
