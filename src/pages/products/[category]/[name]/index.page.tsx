import { useContext, useEffect } from 'react'
import { NextPageContext } from 'next'
import { ProductInfo } from '@/types/productTypes'
import { productsData } from '@/data/productsData'
import { NavbarContext } from '@/contexts/NavbarContext'

import { Navbar } from '@/components/Navbar'
import Layout from '@/components/Layout'
import ShopProductCard from '@/components/ShopProductCard'
import {
  Container,
  Content,
  InTheBoxContainer,
  InTheBoxItems,
  InfoWrapper,
  Item,
} from './styles'
import { BackButton } from '@/components/BackButton'
import { NavigationCard } from '@/components/NavigationCard'
import { navigationCards } from '@/data/navigationCards'
import { ShopContainer } from '../styles'
import { NextSeo } from 'next-seo'
import { ProductFeatures } from './components/ProductFeatures'
import { RelatedProduct } from './components/RelatedProduct'
import { ProductImages } from './components/ProductImages'

interface ProductDetailsProps {
  product: ProductInfo
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <>
      <NextSeo title="Product | Audiophile" />
      <Layout>
        {isNavbarOpen ? (
          <Navbar />
        ) : (
          <Container>
            <Content>
              <BackButton />
              <ShopProductCard {...product} />
              <InfoWrapper>
                <ProductFeatures product={product} />
                <InTheBoxContainer>
                  <h2>In the Box</h2>
                  <InTheBoxItems>
                    {product?.itemsInTheBox?.map((item, index) => (
                      <Item key={index}>
                        <span>{item.quantity}x</span>
                        <p>{item.product}</p>
                      </Item>
                    ))}
                  </InTheBoxItems>
                </InTheBoxContainer>
              </InfoWrapper>
              <ProductImages product={product} />
              <RelatedProduct product={product} />
              <ShopContainer>
                {navigationCards.map((card, index) => (
                  <NavigationCard
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
    </>
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
