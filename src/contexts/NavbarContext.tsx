import { createContext, ReactNode, useState } from 'react'

interface NavbarContextData {
  isNavbarOpen: boolean
  handleSetIsNavbarOpen: () => void
  screenType: string
  handleResize: () => void
}

export const NavbarContext = createContext<NavbarContextData>(
  {} as NavbarContextData,
)

interface NavbarContextProviderProps {
  children: ReactNode
}

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [screenType, setScreenType] = useState('mobile')

  function handleSetIsNavbarOpen() {
    setIsNavbarOpen(!isNavbarOpen)
  }

  function handleResize() {
    if (window.innerWidth <= 768) {
      setScreenType('mobile')
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setScreenType('tablet')
    } else {
      setScreenType('desktop')
      if (isNavbarOpen) {
        handleSetIsNavbarOpen()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }

  const NavbarContextValue: NavbarContextData = {
    isNavbarOpen,
    handleSetIsNavbarOpen,
    screenType,
    handleResize,
  }

  return (
    <NavbarContext.Provider value={NavbarContextValue}>
      {children}
    </NavbarContext.Provider>
  )
}
