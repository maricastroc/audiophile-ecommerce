import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
})

export const Label = styled('p', {
  marginTop: '4rem',
  opacity: 0.5,
  color: '$gray100',
  fontSize: '$ft_overline',
  letterSpacing: 10,
  fontWeight: 400,
  textTransform: 'uppercase',
  marginBottom: '1rem',
})

export const Heading = styled('h2', {
  color: '$white',
  fontSize: '2.25rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '2.8rem',
  marginBottom: '1.5rem',
  maxWidth: 328,
})

export const Paragraph = styled('p', {
  opacity: 0.8,
  color: '$gray100',
  fontSize: '$ft_body',
  lineHeight: '1.6rem',
  marginBottom: '1.75rem',
  maxWidth: 328,
})
