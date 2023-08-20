import { styled } from '../../styles'

export const Container = styled('footer', {
  backgroundColor: '$gray900',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem 2.35rem',
})

export const Tag = styled('span', {
  marginBottom: '3.5rem',
  backgroundColor: '$orange500',
  height: 4,
  width: 101,
})

export const LinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
})

export const LinksContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  a: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '$white',
    fontSize: '$ft_subtitle',
    textDecoration: 'none',
    letterSpacing: 2,
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3rem',

  p: {
    color: '$gray500',
    fontSize: '$ft_body',
    lineHeight: '1.7rem',
    textAlign: 'center',
    opacity: 0.8,
  },

  span: {
    marginTop: '3rem',
    color: '$gray500',
    fontSize: '$ft_body',
    lineHeight: '1.7rem',
    fontWeight: 700,
    opacity: 0.8,
  },
})

export const MediaContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  svg: {
    color: '$white',
    fontSize: '2rem',
  },
})
