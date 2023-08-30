import { styled } from '@/styles'

export const Container = styled('div', {
  marginTop: '5.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  width: '100%',

  img: {
    borderRadius: 8,
    width: '100%',
    height: 'auto',
    maxWidth: 327,
  },

  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: '1.4fr 2fr',

    img: {
      maxWidth: '100%',
    },
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})
