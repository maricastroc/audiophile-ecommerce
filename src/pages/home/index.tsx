import { useContext, useEffect } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { shopCards } from '@/data/shoppingCards'

import { ShopCard } from '@/components/ShopCard'
import { Zx9SpeakerCard } from './components/Zx9SpeakerCard'
import { Zx7SpeakerCard } from './components/Zx7SpeakerCard'
import { Earphones } from './components/Earphones'
import HeadphonesCard from './components/HeadphonesCard'
import { Navbar } from '@/components/Navbar'

import { ProductsContainer, ShopContainer } from './styles'
import Layout from '@/components/Layout'

export default function Home() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <Layout>
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
        </>
      )}
    </Layout>
  )
}
