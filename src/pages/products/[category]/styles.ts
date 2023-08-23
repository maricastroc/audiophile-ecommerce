import { styled } from '@/styles'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 1.5rem 8rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',
  gap: '7.5rem',

  '@media (min-width: 768px)': {
    maxWidth: '69.375rem',
    padding: '7.5rem 2.5rem 0',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '78rem',
    padding: '10rem 4.5rem 0',
    gap: '10rem',
  },
})

export const ShopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '7rem',
  width: '100%',
  marginTop: '8rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    margin: '6rem auto 0',
  },
})
