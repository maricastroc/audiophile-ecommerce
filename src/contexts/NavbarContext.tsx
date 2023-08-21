import { createContext, ReactNode, useState } from 'react'

interface NavbarContextData {
  isNavbarOpen: boolean
  handleSetIsNavbarOpen: () => void
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

  function handleSetIsNavbarOpen() {
    setIsNavbarOpen(!isNavbarOpen)
  }

  const NavbarContextValue: NavbarContextData = {
    isNavbarOpen,
    handleSetIsNavbarOpen,
  }

  return (
    <NavbarContext.Provider value={NavbarContextValue}>
      {children}
    </NavbarContext.Provider>
  )
}
