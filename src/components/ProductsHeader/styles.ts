import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  padding: '2rem 0',

  h2: {
    color: '$white',
    fontSize: '$ft_h4',
    letterSpacing: 2,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  '@media (min-width: 768px)': {
    padding: '6.06rem 0',

    h2: {
      fontSize: '$ft_h2',
    },
  },
})
