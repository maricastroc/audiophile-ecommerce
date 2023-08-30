import { ProductsContainer, ShopContainer } from './styles'

import ProductCard from '@/components/ProductCard'
import { useContext, useEffect } from 'react'
import { NavigationCard } from '@/components/NavigationCard'
import { ProductsHeader } from '@/components/ProductsHeader'
import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import { navigationCards } from '@/data/navigationCards'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { productsData } from '@/data/productsData'
import { NextSeo } from 'next-seo'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'

export default function Product() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  const router = useRouter()
  const { category } = router.query

  const productList = productsData.filter((item) => item.category === category)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  const renderNavigationCards = () => {
    return navigationCards.map((card, index) => (
      <NavigationCard key={index} title={card.title} imageUrl={card.imageUrl} />
    ))
  }

  return (
    <>
      <NextSeo
        title={`${capitalizeFirstLetter(category as string)} | Audiophile`}
      />
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
              <ShopContainer>{renderNavigationCards()}</ShopContainer>
            </ProductsContainer>
          </>
        )}
      </Layout>
    </>
  )
}
