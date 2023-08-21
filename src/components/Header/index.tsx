import Image from 'next/image'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { Container, Content, LinksContainer, PageButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'

const buttonData = [
  { label: 'Home', path: '/' },
  { label: 'Headphones', path: '/headphones' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Earphones', path: '/earphones' },
]

export function Header() {
  const router = useRouter()
  const { handleSetIsNavbarOpen } = useContext(NavbarContext)

  function redirectToPath(path: string) {
    const basePath = router.basePath
    router.push(`${basePath}${path}`)
  }

  return (
    <Container>
      <Content>
        <FontAwesomeIcon
          icon={faBars}
          className="icon_menu"
          onClick={handleSetIsNavbarOpen}
        />
        <Image src={LogoSvg} alt="" width={143} />
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
