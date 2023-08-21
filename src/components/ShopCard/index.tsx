import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ShopButton, Title } from './styles'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ShopCardProps {
  title: string
  imageUrl: string
}

export function ShopCard({ title, imageUrl }: ShopCardProps) {
  const router = useRouter()

  function redirectToPath() {
    const basePath = router.basePath
    router.push(`${basePath}${title.toLowerCase()}`)
  }

  return (
    <Container>
      <Image src={imageUrl} alt="" width={180} height={180} />
      <Title>{title}</Title>
      <ShopButton onClick={redirectToPath}>
        <p>Shop</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </ShopButton>
    </Container>
  )
}
