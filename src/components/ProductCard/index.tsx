import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container, Heading, Label, Paragraph, TextContainer } from './styles'

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  newProductLabel: boolean
  orientation?: string
}

export default function ProductCard({
  title,
  description,
  newProductLabel,
  imageUrl,
  orientation = 'left',
}: ProductCardProps) {
  return (
    <Container className={orientation}>
      <Image src={imageUrl} alt="" width={300} height={340} />
      <TextContainer>
        {newProductLabel && <Label>New Product</Label>}
        <Heading>{title}</Heading>
        <Paragraph>{description}</Paragraph>
        <Button type="primary" title="See Product" />
      </TextContainer>
    </Container>
  )
}
