import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { NavbarContext } from '@/contexts/NavbarContext'
import { buttonData } from '@/data/buttonData'
import * as Dialog from '@radix-ui/react-dialog'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from 'phosphor-react'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'

import { Container, Content, LinksContainer, PageButton } from './styles'
import { CheckoutModal } from '../CheckoutModal'

export function Header() {
  const router = useRouter()
  const { handleSetIsNavbarOpen } = useContext(NavbarContext)

  async function redirectToPath(path: string) {
    const basePath = router.basePath
    path === '/'
      ? await router.push(`${basePath}/`)
      : await router.push(`${basePath}/products/${path}`)
  }

  async function redirectToHome() {
    const basePath = router.basePath
    await router.push(`${basePath}/`)
  }

  return (
    <Container>
      <Content>
        <FontAwesomeIcon
          icon={faBars}
          className="icon_menu"
          onClick={() => handleSetIsNavbarOpen()}
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ShoppingCart className="icon_shop" />
          </Dialog.Trigger>
          <CheckoutModal />
        </Dialog.Root>
      </Content>
    </Container>
  )
}
