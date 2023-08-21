import { Header } from '@/components/Header'
import {
  Container,
  FooterContainer,
  ProductsContainer,
  ShopContainer,
} from './styles'
import { ShopCard } from '@/components/ShopCard'
import { Zx9SpeakerCard } from './components/Zx9SpeakerCard'
import { Zx7SpeakerCard } from './components/Zx7SpeakerCard'
import { Earphones } from './components/Earphones'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import HeadphonesCard from './components/HeadphonesCard'
import { useContext } from 'react'
import { Navbar } from '@/components/Navbar'
import { NavbarContext } from '@/contexts/NavbarContext'

export default function Home() {
  const { isNavbarOpen } = useContext(NavbarContext)

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
              <ShopCard
                title="Headphones"
                imageUrl="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              />
              <ShopCard
                title="Speakers"
                imageUrl="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              />
              <ShopCard
                title="Earphones"
                imageUrl="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              />
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
