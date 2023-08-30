import { useContext, useEffect } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { navigationCards } from '@/data/navigationCards'

import { NavigationCard } from '@/components/NavigationCard'
import { Zx9SpeakerCard } from './components/Zx9SpeakerCard'
import { Zx7SpeakerCard } from './components/Zx7SpeakerCard'
import { Earphones } from './components/Earphones'
import HeadphonesCard from './components/HeadphonesCard'
import { Navbar } from '@/components/Navbar'

import { ProductsContainer, ShopContainer } from './styles'
import Layout from '@/components/Layout'
import { NextSeo } from 'next-seo'

export default function Home() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <>
      <NextSeo title="Home | Audiophile" />
      <Layout>
        {isNavbarOpen ? (
          <Navbar />
        ) : (
          <>
            <HeadphonesCard />
            <ProductsContainer>
              <ShopContainer>
                {navigationCards.map((card, index) => (
                  <NavigationCard
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
    </>
  )
}
