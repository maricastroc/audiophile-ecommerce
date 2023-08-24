import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const ModalItemInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  img: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
})

export const ModalItemText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.3rem',

  p: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '$ft_overline',
  },

  span: {
    fontSize: '$ft_overline',
    opacity: 0.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  '@media (min-width: 420px)': {
    p: {
      fontSize: '$ft_body',
    },
  },
})
