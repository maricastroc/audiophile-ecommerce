import { ProductsContainer, ShopContainer } from './styles'

import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { shopCards } from '@/data/shoppingCards'
import { headphonesData } from '@/data/headphonesData'
import Layout from '@/components/Layout'

export default function Headphones() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  const renderShopCards = () => {
    return shopCards.map((card, index) => (
      <ShopCard key={index} title={card.title} imageUrl={card.imageUrl} />
    ))
  }

  return (
    <Layout>
      {isNavbarOpen ? (
        <Navbar />
      ) : (
        <>
          <ProductsHeader title="Headphones" />
          <ProductsContainer>
            {headphonesData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
            <ShopContainer>{renderShopCards()}</ShopContainer>
          </ProductsContainer>
        </>
      )}
    </Layout>
  )
}
