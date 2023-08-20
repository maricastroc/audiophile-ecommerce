import Image from 'next/image'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { Container, LinksContainer, PageButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  return (
    <Container>
      <FontAwesomeIcon icon={faBars} className="icon_menu" />
      <Image src={LogoSvg} alt="" width={143} />
      <LinksContainer>
        <PageButton active={router.pathname === '/'}>Home</PageButton>
        <PageButton>Headphones</PageButton>
        <PageButton>Speakers</PageButton>
        <PageButton>Earphones</PageButton>
      </LinksContainer>
      <ShoppingCart className="icon_shop" />
    </Container>
  )
}
