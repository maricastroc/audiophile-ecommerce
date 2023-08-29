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
  cursor: 'pointer',

  svg: {
    color: '$black',
    fontSize: '1rem',
    marginTop: '0.1rem',
  },

  '&:focus': {
    boxShadow: 'none',
  },

  '&:hover': {
    color: '$orange500',
    opacity: 1,
    transition: 'all 200ms',

    svg: {
      color: '$orange500',
    },
  },

  '@media (min-width: 768px)': {
    margin: '2.06rem 0 1.5rem',
  },

  '@media (min-width: 1024px)': {
    margin: '2.5rem 0',
  },
})
