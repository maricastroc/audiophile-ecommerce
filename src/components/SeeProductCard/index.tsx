import { Container, Heading, Label, Paragraph } from './styles'
import { Button } from '@/components/Button'

interface SeeProductCardProps {
  title: string
  description: string
  newProductLabel: boolean
}

export default function SeeProductCard() {
  return (
    <Container>
      <Label>New Product</Label>
      <Heading>XX99 Mark II HeadphoneS</Heading>
      <Paragraph>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Paragraph>
      <Button type="primary" title="See Product" />
    </Container>
  )
}
