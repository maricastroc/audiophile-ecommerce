import Image from 'next/image'
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
import LogoSvg from '../../../public/assets/shared/desktop/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <Container>
      <Tag />
      <LinksContainer>
        <Image src={LogoSvg} alt="" width={143} />
        <LinksContent>
          <PageButton>Home</PageButton>
          <PageButton>Headphones</PageButton>
          <PageButton>Speakers</PageButton>
          <PageButton>Earphones</PageButton>
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
