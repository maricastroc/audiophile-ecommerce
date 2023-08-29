import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  borderRadius: 8,
  margin: '0 auto',
})

export const Heading = styled('h2', {
  fontWeight: 700,
  fontSize: '$ft_h6',
  textTransform: 'uppercase',
})

export const ProductsWrapper = styled('div', {
  marginTop: '1.95rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

export const ProductContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1rem',

  img: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
})

export const ProductInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

export const NameAndPrice = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '0.2rem',
  width: '80%',

  p: {
    fontSize: '$ft_body',
    textTransform: 'uppercase',
    fontWeight: 700,
  },

  span: {
    fontSize: '$ft_overline',
    opacity: 0.5,
    fontWeight: 700,
  },
})

export const Quantity = styled('p', {
  fontSize: '$ft_body',
  opacity: 0.5,
  fontWeight: 700,
})

export const PriceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2.5rem',
})

export const PriceItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  span: {
    opacity: 0.5,
    fontSize: '$ft_body',
    textTransform: 'uppercase',
  },

  p: {
    fontSize: '$ft_h6',
    fontWeight: 700,
  },

  '& + &': {
    marginTop: '1rem',
  },
})

export const TotalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '2rem',

  span: {
    opacity: 0.5,
    fontSize: '$ft_body',
    textTransform: 'uppercase',
  },

  p: {
    fontSize: '$ft_h6',
    fontWeight: 700,
    color: '$orange500',
  },
})
