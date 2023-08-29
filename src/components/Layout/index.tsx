import React, { ReactNode } from 'react'
import { Header } from '../Header'
import { FooterCard } from '../FooterCard'
import { Footer } from '../Footer'
import { Container, FooterContainer } from './styles'

interface LayoutProps {
  children: ReactNode
  showFooterCard?: boolean
}

function Layout({ children, showFooterCard = true }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
      {showFooterCard && (
        <FooterContainer>
          <FooterCard />
        </FooterContainer>
      )}
      <Footer />
    </Container>
  )
}

export default Layout
