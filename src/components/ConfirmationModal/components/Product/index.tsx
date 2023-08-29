import Image from 'next/image'
import { Container, ProductData, ProductInfo, ProductQuantity } from './styles'
import { formattedPrice } from '@/utils/formatPrice'
import { ShopProductInfo } from '@/types/shopType'

interface ProductProps {
  data: ShopProductInfo
}

export function Product({ data }: ProductProps) {
  return (
    <Container>
      <Image
        alt=""
        width={64}
        height={64}
        src={`${data?.imageUrl}mobile/image-product.jpg`}
      />
      <ProductData>
        <ProductInfo>
          <p>{data?.abbreviation}</p>
          <span>{formattedPrice(data?.price)}</span>
        </ProductInfo>
        <ProductQuantity>x{data?.quantity}</ProductQuantity>
      </ProductData>
    </Container>
  )
}
