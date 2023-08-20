import { styled } from '../../styles'

export const Container = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 160,
  padding: '0.93rem',

  '&.primary': {
    backgroundColor: '$orange500',
    color: '$white',
    border: 'none',

    '&:hover': {
      transition: 'all 200ms',
      backgroundColor: '$orange300',
    },
  },

  '&.secondary': {
    backgroundColor: '$black',
    color: '$white',
    border: 'none',

    '&:hover': {
      transition: 'all 200ms',
      backgroundColor: '$gray700',
    },
  },

  '&.tertiary': {
    backgroundColor: 'transparent',
    border: 'solid 1px $black',
    color: '$black',

    '&:hover': {
      backgroundColor: '$black',
      transition: 'all 200ms',
      color: '$white',
    },
  },

  p: {
    fontSize: '$ft_subtitle',
    textTransform: 'uppercase',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 2,
  },
})
