import { useContext, useEffect } from 'react'

import { NavbarContext } from '@/contexts/NavbarContext'
import { Navbar } from '@/components/Navbar'
import Layout from '@/components/Layout'

export default function Product() {
  const { isNavbarOpen, handleResize } = useContext(NavbarContext)

  useEffect(() => {
    handleResize()
  }, [handleResize])

  return <Layout>{isNavbarOpen ? <Navbar /> : <></>}</Layout>
}
