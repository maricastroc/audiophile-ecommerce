import { Container, Heading, Label, Paragraph } from './styles'
import { Button } from '@/components/Button'

interface NewProductProps {
  newProductLabel?: boolean
  title: string
  description: string
  buttonType: string
}

export default function ProductCard({
  title,
  description,
  buttonType,
  newProductLabel = true,
}: NewProductProps) {
  return (
    <Container>
      {newProductLabel && <Label>New Product</Label>}
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button type={buttonType} title="See Product" />
    </Container>
  )
}
