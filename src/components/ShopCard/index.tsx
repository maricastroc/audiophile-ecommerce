import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ShopButton, Title } from './styles'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface ShopCardProps {
  title: string
  imageUrl: string
}

export function ShopCard({ title, imageUrl }: ShopCardProps) {
  return (
    <Container>
      <Image src={imageUrl} alt="" width={180} height={180} />
      <Title>{title}</Title>
      <ShopButton>
        <p>Shop</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </ShopButton>
    </Container>
  )
}
