import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.3rem',
  backgroundColor: '$gray200',
  minWidth: '5rem',

  p: {
    fontSize: '$ft_subtitle',
    fontWeight: 700,
    textAlign: 'center',
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
    fontSize: '0.5rem',
    color: '$black',
    opacity: 0.7,
  },
})
