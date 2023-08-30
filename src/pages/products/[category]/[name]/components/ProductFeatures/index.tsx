import { ProductInfo } from '@/types/productTypes'
import { Container } from './styles'

interface ProductFeaturesProps {
  product: ProductInfo
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  return (
    <Container>
      <h2>Features</h2>
      {product?.features &&
        product?.features
          .split('\n')
          .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </Container>
  )
}
