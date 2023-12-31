import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Container, ShopButton, Title } from './styles'

interface NavigationCardProps {
  title: string
  imageUrl: string
}

export function NavigationCard({ title, imageUrl }: NavigationCardProps) {
  const router = useRouter()
  const { handleSetIsNavbarOpen } = useContext(NavbarContext)

  async function redirectToPath() {
    handleSetIsNavbarOpen(false)
    const basePath = router.basePath
    const path = `${basePath}/products/${title.toLowerCase()}`
    await router.push(path)
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
