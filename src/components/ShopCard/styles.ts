import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  padding: '1.375rem',
  backgroundColor: '$gray200',

  img: {
    marginTop: '-5rem',
    width: '11rem',
    height: 'auto',
  },
})

export const Title = styled('h3', {
  fontSize: '$ft_body',
  color: '$black',
  marginBottom: '1.0625rem',
  fontWeight: 700,
  letterSpacing: '0.067rem',
  textTransform: 'uppercase',
})

export const ShopButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  border: 'none',
  gap: '0.8rem',

  p: {
    fontSize: '$ft_subtitle',
    fontWeight: 700,
    letterSpacing: '0.0625rem',
    color: '$black',
    opacity: 0.5,
    textTransform: 'uppercase',
  },

  svg: {
    color: '$orange500',
    fontSize: '1rem',
  },
})
