import React, { ReactNode } from 'react'
import { Header } from '../Header'
import { FooterCard } from '../FooterCard'
import { Footer } from '../Footer'
import { Container, FooterContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
      <FooterContainer>
        <FooterCard />
      </FooterContainer>
      <Footer />
    </Container>
  )
}

export default Layout
