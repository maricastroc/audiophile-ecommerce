import { styled } from '@/styles'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  margin: '1.5rem 0',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '$ft_body',
  opacity: 0.5,
  color: '$black',

  svg: {
    color: '$black',
    fontSize: '1rem',
    marginTop: '0.1rem',
  },

  '@media (min-width: 768px)': {
    margin: '2.06rem 0 1.5rem',
  },

  '@media (min-width: 1024px)': {
    margin: '2.5rem 0',
  },
})
