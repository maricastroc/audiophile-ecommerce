import { Container, ProductsContainer, ShopContainer } from './styles'
import { FooterContainer } from '../home/styles'

import { Header } from '@/components/Header'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useEffect, useState } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'

export default function Earphones() {
  const [screenType, setScreenType] = useState('mobile')

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
      <ProductsHeader title="Earphones" />
      <ProductsContainer>
        <ProductCard
          title="YX1 wireless earphones"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          newProductLabel={true}
          imageUrl={`/assets/product-yx1-earphones/${screenType}/image-category-page-preview.jpg`}
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
    </Container>
  )
}
