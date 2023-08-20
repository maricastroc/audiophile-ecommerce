import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const HeadphoneContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("./assets/home/mobile/image-header.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  marginTop: '-6rem',
  marginBottom: '6.75rem',
  height: '37.5rem',

  '@media (min-width: 450px)': {
    backgroundImage: 'url("./assets/home/tablet/image-header.jpg")',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    marginTop: '-4rem',
    marginBottom: '9.25rem',
  },
})

export const ShopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5.3rem',
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1.5rem',
})

export const FooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1.5rem',
})
