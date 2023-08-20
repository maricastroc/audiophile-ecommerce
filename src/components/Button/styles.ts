import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 160,
  padding: '0.93rem',

  '&.primary': {
    backgroundColor: '$orange500',
    color: '$white',
    border: 'none',
  },

  '&.secondary': {
    backgroundColor: '$black',
    color: '$white',
    border: 'none',
  },

  '&.tertiary': {
    backgroundColor: 'transparent',
    border: 'solid 1px $black',
    color: '$black',
  },

  p: {
    fontSize: '$ft_subtitle',
    textTransform: 'uppercase',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 2,
  },
})
