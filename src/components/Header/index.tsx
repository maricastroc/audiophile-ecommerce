import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { buttonData } from '@/utils/buttonData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'

import { Container, Content, LinksContainer, PageButton } from './styles'

export function Header() {
  const router = useRouter()
  const { handleSetIsNavbarOpen } = useContext(NavbarContext)

  function redirectToPath(path: string) {
    const basePath = router.basePath
    router.push(`${basePath}${path}`)
  }

  function redirectToHome() {
    const basePath = router.basePath
    router.push(`${basePath}/`)
  }

  return (
    <Container>
      <Content>
        <FontAwesomeIcon
          icon={faBars}
          className="icon_menu"
          onClick={handleSetIsNavbarOpen}
        />
        <Image src={LogoSvg} alt="" width={143} onClick={redirectToHome} />
        <LinksContainer>
          {buttonData.map(({ label, path }) => (
            <PageButton
              key={path}
              onClick={() => redirectToPath(path)}
              active={router.pathname === path}
            >
              {label}
            </PageButton>
          ))}
        </LinksContainer>
        <ShoppingCart className="icon_shop" />
      </Content>
    </Container>
  )
}
