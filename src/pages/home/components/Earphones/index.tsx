import { Button } from '@/components/Button'
import { CardContainer, Container, ImageContainer } from './styles'
import { useRouter } from 'next/router'

export function Earphones() {
  const router = useRouter()

  async function redirectToPath() {
    const basePath = router.basePath
    const path = `${basePath}/products/earphones/yx1-wireless-earphones`
    await router.push(path)
  }

  return (
    <Container>
      <ImageContainer />
      <CardContainer>
        <h3>YX1 EARPHONES</h3>
        <Button title="See Product" type="tertiary" onClick={redirectToPath} />
      </CardContainer>
    </Container>
  )
}
