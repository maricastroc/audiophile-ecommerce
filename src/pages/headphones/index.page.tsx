import { Container, ProductsContainer, ShopContainer } from './styles'
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

export default function Headphones() {
  const { isNavbarOpen, handleResize, screenType } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  const renderProductCards = () => {
    const productCardData = [
      {
        title: 'XX99 Mark II Headphones',
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        newProductLabel: true,
        imageUrl: `/assets/product-xx99-mark-two-headphones/${screenType}/image-category-page-preview.jpg`,
      },
      {
        title: 'XX99 Mark I Headphones',
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        newProductLabel: false,
        orientation: 'right',
        imageUrl: `/assets/product-xx99-mark-one-headphones/${screenType}/image-category-page-preview.jpg`,
      },
      {
        title: 'XX59 Headphones',
        description:
          'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        newProductLabel: false,
        imageUrl: `/assets/product-xx59-headphones/${screenType}/image-category-page-preview.jpg`,
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

  return (
    <Container>
      <Header />
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <>
          <ProductsHeader title="Headphones" />
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
