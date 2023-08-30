import { ProductInfo } from '@/types/productTypes'
import { Container, Wrapper, Product } from './styles'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useContext, useState } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { useRouter } from 'next/router'

interface RelatedProductProps {
  product: ProductInfo
}

export function RelatedProduct({ product }: RelatedProductProps) {
  const { screenType } = useContext(NavbarContext)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function handleGoToProductPage(path: string, category: string) {
    setIsLoading(true)

    const basePath = router.basePath
    await router.push(`${basePath}/products/${category}/${path}`)

    setIsLoading(false)
  }

  return (
    <Container>
      <Wrapper>
        {product?.relatedProducts?.map((item, index) => {
          return (
            <Product key={index}>
              <Image
                src={`/assets/shared/${screenType}/${item.link}`}
                alt=""
                width={327}
                height={120}
              />
              <h3>{item.name}</h3>
              <Button
                title={isLoading ? 'Loading...' : 'See Product'}
                type="primary"
                onClick={() => handleGoToProductPage(item.path, item.category)}
              />
            </Product>
          )
        })}
      </Wrapper>
    </Container>
  )
}
