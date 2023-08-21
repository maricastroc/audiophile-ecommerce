import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
  width: '100%',
  backgroundColor: '$white',
  padding: '8rem 2rem 3rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    margin: '0 auto',
  },
})
