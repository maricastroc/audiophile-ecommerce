import Image from 'next/image'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { buttonData } from '@/data/buttonData'

import {
  Container,
  LinksContainer,
  LinksContent,
  MediaContainer,
  MediaWrapper,
  PageButton,
  Tag,
  TextContainer,
} from './styles'

export function Footer() {
  const router = useRouter()

  function redirectToPath(path: string) {
    const basePath = router.basePath
    router.push(`${basePath}${path}`)
  }

  return (
    <Container>
      <Tag />
      <LinksContainer>
        <Image src={LogoSvg} alt="" width={143} />
        <LinksContent>
          {buttonData.map(({ label, path }) => (
            <PageButton key={path} onClick={() => redirectToPath(path)}>
              {label}
            </PageButton>
          ))}
        </LinksContent>
      </LinksContainer>
      <TextContainer>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
      </TextContainer>
      <MediaWrapper>
        <p>Copyright 2021. All Rights Reserved</p>
        <MediaContainer>
          <FontAwesomeIcon icon={faSquareFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </MediaContainer>
      </MediaWrapper>
    </Container>
  )
}
