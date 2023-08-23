import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { shopCards } from '@/data/shoppingCards'

import { ProductsContainer, ShopContainer } from '../headphones/styles'
import { earphonesData } from '@/data/earphonesData'
import Layout from '@/components/Layout'

export default function Earphones() {
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
          <ProductsHeader title="Earphones" />
          <ProductsContainer>
            {earphonesData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
            <ShopContainer>{renderShopCards()}</ShopContainer>
          </ProductsContainer>
        </>
      )}
    </Layout>
  )
}
