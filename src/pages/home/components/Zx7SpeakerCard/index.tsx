import { Button } from '@/components/Button'
import { Container, TextContainer } from './styles'
import { useRouter } from 'next/router'

export function Zx7SpeakerCard() {
  const router = useRouter()

  async function redirectToPath() {
    const basePath = router.basePath
    const path = `${basePath}/products/speakers/zx7-speaker`
    await router.push(path)
  }

  return (
    <Container>
      <TextContainer>
        <h3>ZX7 SPEAKER</h3>
        <Button title="See Product" type="tertiary" onClick={redirectToPath} />
      </TextContainer>
    </Container>
  )
}
