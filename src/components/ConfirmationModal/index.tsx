import {
  Overlay,
  Description,
  Title,
  Content,
  CloseButton,
  TitleContainer,
  Container,
} from './styles'

import ConfirmIcon from '../../../public/assets/checkout/icon-order-confirmation.svg'
import Image from 'next/image'

export function ConfirmationModal() {
  return (
    <Container>
      <Overlay />
      <Content>
        <TitleContainer>
          <Image src={ConfirmIcon} alt="" width={64} height={64} />
          <Title>Thank you for your order</Title>
        </TitleContainer>
        <Description>
          <p>You will receive an email confirmation shortly.</p>
        </Description>
        <CloseButton>Checkout</CloseButton>
        <Description>
          <p>You will receive an email confirmation shortly.</p>
        </Description>
        <CloseButton>Checkout</CloseButton>
        <Description>
          <p>You will receive an email confirmation shortly.</p>
        </Description>
        <CloseButton>Checkout</CloseButton>
        <Description>
          <p>You will receive an email confirmation shortly.</p>
        </Description>
        <CloseButton>Checkout</CloseButton>
      </Content>
    </Container>
  )
}
