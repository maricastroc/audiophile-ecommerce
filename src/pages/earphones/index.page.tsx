import { FooterContainer } from '../home/styles'

import { Header } from '@/components/Header'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { shopCards } from '@/utils/shoppingCards'

import {
  Container,
  ProductsContainer,
  ShopContainer,
} from '../headphones/styles'

export default function Earphones() {
  const { isNavbarOpen, screenType, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <Container>
      <Header />
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <>
          <ProductsHeader title="Earphones" />
          <ProductsContainer>
            <ProductCard
              title="YX1 wireless earphones"
              description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
              newProductLabel={true}
              imageUrl={`/assets/product-yx1-earphones/${screenType}/image-category-page-preview.jpg`}
            />
            <ShopContainer>
              {shopCards.map((card, index) => (
                <ShopCard
                  key={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                />
              ))}
            </ShopContainer>
          </ProductsContainer>
          <FooterContainer>
            <FooterCard />
          </FooterContainer>
          <Footer />
        </>
      )}
    </Container>
  )
}
