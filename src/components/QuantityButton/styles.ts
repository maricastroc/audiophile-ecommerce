import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.8rem',
  gap: '1.3rem',
  backgroundColor: '$gray200',

  p: {
    fontSize: '$ft_subtitle',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 2,
  },

  '@media (min-width: 768px)': {
    padding: '0.93rem',
  },
})

export const PricingBtn = styled('button', {
  cursor: 'pointer',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  border: 'none',

  svg: {
    fontSize: '0.8rem',
    color: '$black',
    opacity: 0.7,
  },
})
