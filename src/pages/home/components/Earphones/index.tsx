import { Button } from '@/components/Button'
import { CardContainer, Container, ImageContainer } from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Earphones() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function redirectToPath() {
    setIsLoading(true)

    const basePath = router.basePath
    const path = `${basePath}/products/earphones/yx1-wireless-earphones`
    await router.push(path)

    setIsLoading(false)
  }

  return (
    <Container>
      <ImageContainer />
      <CardContainer>
        <h3>YX1 EARPHONES</h3>
        <Button
          title={isLoading ? 'Loading...' : 'See Product'}
          type="tertiary"
          onClick={redirectToPath}
        />
      </CardContainer>
    </Container>
  )
}
