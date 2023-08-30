import Image from 'next/image'
import { NavbarContext } from '@/contexts/NavbarContext'
import { ProductInfo } from '@/types/productTypes'
import { Container, Wrapper } from './styles'
import { useContext } from 'react'

interface ProductImagesProps {
  product: ProductInfo
}

export function ProductImages({ product }: ProductImagesProps) {
  const { screenType } = useContext(NavbarContext)

  return (
    <Container>
      <Wrapper>
        <Image
          alt=""
          width={327}
          height={174}
          src={`/assets/${product?.demoImageUrl}/${screenType}/image-gallery-1.jpg`}
        />
        <Image
          alt=""
          width={327}
          height={174}
          src={`/assets/${product?.demoImageUrl}/${screenType}/image-gallery-2.jpg`}
        />
      </Wrapper>
      <Image
        alt=""
        width={327}
        height={174}
        src={`/assets/${product?.demoImageUrl}/${screenType}/image-gallery-3.jpg`}
      />
    </Container>
  )
}
