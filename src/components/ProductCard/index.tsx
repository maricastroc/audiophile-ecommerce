import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container, Heading, Label, Paragraph, TextContainer } from './styles'
import { useContext } from 'react'
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

  console.log(category)

  function redirectToPage() {
    const basePath = router.basePath
    router.push(`${basePath}/products/${category}/${name}`)
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
        <Button type="primary" title="See Product" onClick={redirectToPage} />
      </TextContainer>
    </Container>
  )
}
