import { Button } from '@/components/Button'
import { Container, TextContainer } from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Zx7SpeakerCard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function redirectToPath() {
    setIsLoading(true)

    const basePath = router.basePath
    const path = `${basePath}/products/speakers/zx7-speaker`
    await router.push(path)

    setIsLoading(false)
  }

  return (
    <Container>
      <TextContainer>
        <h3>ZX7 SPEAKER</h3>
        <Button
          title={isLoading ? 'Loading...' : 'See Product'}
          type="tertiary"
          onClick={redirectToPath}
        />
      </TextContainer>
    </Container>
  )
}
