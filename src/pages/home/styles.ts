import { styled } from '@/styles'

export const ShopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '7rem',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    margin: '0 auto',
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0 1.5rem',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    maxWidth: '69.375rem',
    padding: '0 2.5rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '78rem',
    padding: '0 4.5rem',
  },
})
