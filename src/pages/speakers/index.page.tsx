import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { shopCards } from '@/data/shoppingCards'

import { ProductsContainer, ShopContainer } from '../headphones/styles'
import { speakersData } from '@/data/speakersData'
import Layout from '@/components/Layout'

export default function Speakers() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  const renderShopCards = () => {
    return shopCards.map((card, index) => (
      <ShopCard key={index} title={card.title} imageUrl={card.imageUrl} />
    ))
  }

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return (
    <Layout>
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <>
          <ProductsHeader title="Speakers" />
          <ProductsContainer>
            {speakersData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
            <ShopContainer>{renderShopCards()}</ShopContainer>
          </ProductsContainer>
        </>
      )}
    </Layout>
  )
}
