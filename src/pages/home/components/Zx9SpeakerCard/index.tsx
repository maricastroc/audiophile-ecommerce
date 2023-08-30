import { Button } from '@/components/Button'
import {
  Container,
  Heading,
  ImageContainer,
  Paragraph,
  TextContainer,
} from './styles'
import { useRouter } from 'next/router'

export function Zx9SpeakerCard() {
  const router = useRouter()

  async function redirectToPath() {
    const basePath = router.basePath
    const path = `${basePath}/products/speakers/zx9-speaker`
    await router.push(path)
  }

  return (
    <Container>
      <ImageContainer />
      <TextContainer>
        <Heading>ZX9 SPEAKER</Heading>
        <Paragraph>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Paragraph>
        <Button type="secondary" title="See Product" onClick={redirectToPath} />
      </TextContainer>
    </Container>
  )
}
