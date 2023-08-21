import { Container } from './styles'

interface ProductsHeaderProps {
  title: string
}

export function ProductsHeader({ title }: ProductsHeaderProps) {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  )
}
