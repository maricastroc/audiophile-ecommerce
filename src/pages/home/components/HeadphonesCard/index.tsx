import { Container, Heading, Label, Paragraph } from './styles'
import { Button } from '@/components/Button'

export default function HeadphonesCard() {
  return (
    <Container>
      <Label>New Product</Label>
      <Heading>XX99 Mark II Headphones</Heading>
      <Paragraph>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Paragraph>
      <Button type="primary" title="See Product" />
    </Container>
  )
}
