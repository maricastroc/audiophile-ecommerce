import { Header } from '@/components/Header'
import {
  Container,
  FooterContainer,
  HeadphoneContainer,
  ProductsContainer,
  ShopContainer,
} from './styles'
import { ShopCard } from '@/components/ShopCard'
import ProductCard from './components/ProductCard'
import { Zx9Speaker } from './components/Zx9Speaker'
import { Zx7Speaker } from './components/Zx7Speaker'
import { Earphones } from './components/Earphones'
import { FooterCard } from '@/components/FooterCard'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <Container>
      <Header />
      <HeadphoneContainer>
        <ProductCard
          title="XX99 Mark II Headphones"
          description="Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast."
          buttonType="primary"
        />
      </HeadphoneContainer>
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
        <Zx9Speaker />
        <Zx7Speaker />
        <Earphones />
      </ProductsContainer>
      <FooterContainer>
        <FooterCard />
      </FooterContainer>
      <Footer />
    </Container>
  )
}
