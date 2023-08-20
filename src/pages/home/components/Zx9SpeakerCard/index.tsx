import { Button } from '@/components/Button'
import {
  Container,
  Heading,
  ImageContainer,
  Paragraph,
  TextContainer,
} from './styles'

export function Zx9SpeakerCard() {
  return (
    <Container>
      <ImageContainer />
      <TextContainer>
        <Heading>ZX9 SPEAKER</Heading>
        <Paragraph>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Paragraph>
        <Button type="secondary" title="See Product" />
      </TextContainer>
    </Container>
  )
}
