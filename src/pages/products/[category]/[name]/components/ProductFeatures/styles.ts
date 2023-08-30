import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  textAlign: 'left',
  marginTop: '5.5rem',

  h2: {
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  p: {
    opacity: 0.5,
    color: '$black',
    fontSize: '$ft_body',
    lineHeight: '1.6rem',
    marginBottom: '0.7rem',
    maxWidth: '100%',
  },

  '@media (min-width: 768px)': {
    h2: {
      fontSize: '$ft_h3',
    },
  },

  '@media (min-width: 1024px)': {
    width: '100%',
  },
})
