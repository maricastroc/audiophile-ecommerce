import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { NavbarContextProvider } from '@/contexts/NavbarContext'
import { ProductsContextProvider } from '@/contexts/ProductsContext'
import { DefaultSeo } from 'next-seo'

globalStyles()
library.add(fas)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavbarContextProvider>
      <ProductsContextProvider>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://www.ignite-call.rocketseat.com.br',
            siteName: 'Audiophile E-Commerce',
          }}
        />
        <Component {...pageProps} />
      </ProductsContextProvider>
    </NavbarContextProvider>
  )
}
