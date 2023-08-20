import { Container } from './styles'

interface ButtonProps {
  type: string
  title: string
}

export function Button({ type = 'primary', title }: ButtonProps) {
  return (
    <Container className={type}>
      <p>{title}</p>
    </Container>
  )
}
