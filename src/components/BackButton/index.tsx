import { CaretLeft } from 'phosphor-react'
import { Container } from './styles'
import { useRouter } from 'next/router'

export function BackButton() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Container onClick={handleGoBack}>
      <CaretLeft />
      Go Back
    </Container>
  )
}
