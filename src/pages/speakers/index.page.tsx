import { FooterContainer } from '../home/styles'

import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { shopCards } from '@/utils/shoppingCards'

import {
  Container,
  ProductsContainer,
  ShopContainer,
} from '../headphones/styles'

export default function Speakers() {
  const { isNavbarOpen, handleResize, screenType } = useContext(NavbarContext)

  const renderProductCards = () => {
    const productCardData = [
      {
        title: 'ZX9 speaker',
        description:
          'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        newProductLabel: true,
        imageUrl: `/assets/product-zx9-speaker/${screenType}/image-category-page-preview.jpg`,
      },
      {
        title: 'ZX7 speaker',
        description:
          'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        newProductLabel: false,
        orientation: 'right',
        imageUrl: `/assets/product-zx7-speaker/${screenType}/image-category-page-preview.jpg`,
      },
    ]

    return productCardData.map((data, index) => (
      <ProductCard key={index} {...data} />
    ))
  }

  const renderShopCards = () => {
    return shopCards.map((card, index) => (
      <ShopCard key={index} title={card.title} imageUrl={card.imageUrl} />
    ))
  }

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
          <ProductsHeader title="Speakers" />
          <ProductsContainer>
            {renderProductCards()}
            <ShopContainer>{renderShopCards()}</ShopContainer>
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
