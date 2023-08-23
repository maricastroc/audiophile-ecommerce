import { Container } from './styles'

interface ButtonProps {
  type: string
  title: string
  onClick: () => void
}

export function Button({ type = 'primary', title, ...rest }: ButtonProps) {
  return (
    <Container className={type} {...rest}>
      <p>{title}</p>
    </Container>
  )
}
