import { styled } from '../../styles'

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 1.5rem',
  height: '100%',
  backgroundColor: '$gray900',
  zIndex: 9999,

  svg: {
    color: '$white',
    fontSize: '1.2rem',

    '&.icon_shop': {
      fontSize: '1.5rem',
    },
  },
})
