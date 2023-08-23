import { ProductsContainer, ShopContainer } from './styles'

import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { ShopCard } from '@/components/ShopCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { shopCards } from '@/data/shoppingCards'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { productsData } from '@/data/productsData'

export default function Product() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  const router = useRouter()
  const { category } = router.query

  const productList = productsData.filter((item) => item.category === category)

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
          <ProductsHeader title={category as string} />
          <ProductsContainer>
            {productList.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
            <ShopContainer>{renderShopCards()}</ShopContainer>
          </ProductsContainer>
        </>
      )}
    </Layout>
  )
}
