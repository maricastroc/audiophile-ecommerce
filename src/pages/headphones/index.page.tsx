import { Container, ProductsContainer, ShopContainer } from './styles'
import { FooterContainer } from '../home/styles'

import { Header } from '@/components/Header'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useEffect, useState } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'

export default function Headphones() {
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
      <ProductsHeader title="Headphones" />
      <ProductsContainer>
        <ProductCard
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          newProductLabel={true}
          imageUrl={`/assets/product-xx99-mark-two-headphones/${screenType}/image-category-page-preview.jpg`}
        />
        <ProductCard
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          newProductLabel={false}
          orientation="right"
          imageUrl={`/assets/product-xx99-mark-one-headphones/${screenType}/image-category-page-preview.jpg`}
        />
        <ProductCard
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          newProductLabel={false}
          imageUrl={`/assets/product-xx59-headphones/${screenType}/image-category-page-preview.jpg`}
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
