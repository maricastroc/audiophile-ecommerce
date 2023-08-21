import Image from 'next/image'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { Container, Content, LinksContainer, PageButton } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  async function goToHomePage() {
    const basePath = router.basePath
    const homePath = `${basePath}/`
    router.push(homePath)
  }

  async function goToHeadphonesPage() {
    const basePath = router.basePath
    const headphonesPath = `${basePath}/headphones`
    router.push(headphonesPath)
  }

  async function goToSpeakersPage() {
    const basePath = router.basePath
    const headphonesPath = `${basePath}/speakers`
    router.push(headphonesPath)
  }

  async function goToEarphonesPage() {
    const basePath = router.basePath
    const headphonesPath = `${basePath}/earphones`
    router.push(headphonesPath)
  }

  return (
    <Container>
      <Content>
        <FontAwesomeIcon icon={faBars} className="icon_menu" />
        <Image src={LogoSvg} alt="" width={143} />
        <LinksContainer>
          <PageButton onClick={goToHomePage} active={router.pathname === '/'}>
            Home
          </PageButton>
          <PageButton
            onClick={goToHeadphonesPage}
            active={router.pathname === '/headphones'}
          >
            Headphones
          </PageButton>
          <PageButton
            onClick={goToSpeakersPage}
            active={router.pathname === '/speakers'}
          >
            Speakers
          </PageButton>
          <PageButton
            onClick={goToEarphonesPage}
            active={router.pathname === '/earphones'}
          >
            Earphones
          </PageButton>
        </LinksContainer>
        <ShoppingCart className="icon_shop" />
      </Content>
    </Container>
  )
}
