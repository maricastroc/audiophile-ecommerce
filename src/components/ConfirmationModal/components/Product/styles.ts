import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '$gray200',
  gap: '1rem',

  '& + &': {
    marginTop: '1rem',
  },

  img: {
    width: 50,
    height: 50,
  },
})

export const ProductData = styled('p', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',

  p: {
    fontSize: '$ft_body',
    fontWeight: 700,
    lineHeight: '1.5625rem',
  },

  span: {
    fontSize: '$ft_overline',
    opacity: 0.5,
    fontWeight: 700,
    lineHeight: '1.5625rem',
  },
})

export const ProductQuantity = styled('p', {
  fontSize: '$ft_overline',
  opacity: 0.5,
  fontWeight: 700,
  lineHeight: '1.5625rem',
})
