import { Container, ProductsContainer, ShopContainer } from './styles'
import { FooterContainer } from '../home/styles'

import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useContext, useEffect, useState } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'

export default function Speakers() {
  const [screenType, setScreenType] = useState('mobile')
  const { isNavbarOpen } = useContext(NavbarContext)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setScreenType('mobile')
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setScreenType('tablet')
      } else {
        setScreenType('desktop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container>
      <Header />
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <>
          <ProductsHeader title="Speakers" />
          <ProductsContainer>
            <ProductCard
              title="ZX9 speaker"
              description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
              newProductLabel={true}
              imageUrl={`/assets/product-zx9-speaker/${screenType}/image-category-page-preview.jpg`}
            />
            <ProductCard
              title="ZX7 speaker"
              description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
              newProductLabel={false}
              orientation="right"
              imageUrl={`/assets/product-zx7-speaker/${screenType}/image-category-page-preview.jpg`}
            />
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
