import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container, Heading, Label, Paragraph, TextContainer } from './styles'
import { useContext, useState } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { useRouter } from 'next/router'
import { ProductInfo } from '@/types/productTypes'

export default function ProductCard({
  title,
  description,
  isNewProduct,
  imageUrl,
  name,
  category,
  imageOrientation = 'left',
}: ProductInfo) {
  const { screenType } = useContext(NavbarContext)
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  function redirectToPage() {
    setIsLoading(true)

    const basePath = router.basePath
    router.push(`${basePath}/products/${category}/${name}`)

    setIsLoading(false)
  }

  return (
    <Container className={imageOrientation}>
      <Image
        src={`${imageUrl}${screenType}/image-category-page-preview.jpg`}
        alt=""
        width={300}
        height={340}
      />
      <TextContainer>
        {isNewProduct && <Label>New Product</Label>}
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
        <Button
          type="primary"
          title={isLoading ? 'Loading...' : 'See Product'}
          onClick={redirectToPage}
        />
      </TextContainer>
    </Container>
  )
}
