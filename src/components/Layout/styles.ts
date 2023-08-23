import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const FooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
  padding: '0 1.5rem',

  '@media (min-width: 768px)': {
    maxWidth: '69.375rem',
    padding: '0 2.5rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '78rem',
    padding: '0 4.5rem',
  },
})
