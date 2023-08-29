import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    div: {
      marginTop: 0,
    },
  },
})
