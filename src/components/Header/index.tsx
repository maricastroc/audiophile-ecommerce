import Image from 'next/image'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <FontAwesomeIcon icon={faBars} />
      <Image src={LogoSvg} alt="" width={143} />
      <ShoppingCart className="icon_shop" />
    </Container>
  )
}
