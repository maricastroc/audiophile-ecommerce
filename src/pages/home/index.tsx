import { useContext, useEffect } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { shopCards } from '@/utils/shoppingCards'

import { Header } from '@/components/Header'
import { ShopCard } from '@/components/ShopCard'
import { Zx9SpeakerCard } from './components/Zx9SpeakerCard'
import { Zx7SpeakerCard } from './components/Zx7SpeakerCard'
import { Earphones } from './components/Earphones'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import HeadphonesCard from './components/HeadphonesCard'
import { Navbar } from '@/components/Navbar'

import {
  Container,
  FooterContainer,
  ProductsContainer,
  ShopContainer,
} from './styles'

export default function Home() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

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
          <HeadphonesCard />
          <ProductsContainer>
            <ShopContainer>
              {shopCards.map((card, index) => (
                <ShopCard
                  key={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                />
              ))}
            </ShopContainer>
            <Zx9SpeakerCard />
            <Zx7SpeakerCard />
            <Earphones />
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
