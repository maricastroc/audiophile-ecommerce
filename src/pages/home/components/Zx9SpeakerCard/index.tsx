import { Button } from '@/components/Button'
import {
  Container,
  Heading,
  ImageContainer,
  Paragraph,
  TextContainer,
} from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Zx9SpeakerCard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function redirectToPath() {
    setIsLoading(true)

    const basePath = router.basePath
    const path = `${basePath}/products/speakers/zx9-speaker`
    await router.push(path)

    setIsLoading(false)
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
        <Button
          type="secondary"
          title={isLoading ? 'Loading...' : 'See Product'}
          onClick={redirectToPath}
        />
      </TextContainer>
    </Container>
  )
}
