import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: 'auto',
  overflow: 'scroll',
  inset: 0,
  zIndex: 9998,
})

export const Overlay = styled('div', {
  position: 'fixed',
  width: '100vw',
  height: 'auto',
  inset: 0,
  zIndex: 9998,
  backgroundColor: 'rgba(10, 10, 10, 0.7)',
})

export const Content = styled('div', {
  position: 'fixed',
  top: '5rem',
  right: 0,
  left: 0,
  width: '20.4375rem',
  margin: '0 auto',
  backgroundColor: '$white',
  padding: '2.375rem 1.75rem 0 1.75rem',
  maxHeight: '100%',
  overflowY: 'auto',
  zIndex: 9999,
})

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '2.06rem',
})

export const Title = styled('h3', {
  fontSize: '$ft_h5',
  textTransform: 'uppercase',
  fontWeight: 700,
})

export const Description = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',

  p: {
    fontSize: '$ft_body',
    lineHeight: '1.5625rem',
    marginBottom: '1.9375rem',
    opacity: 0.5,
  },
})

export const CloseButton = styled('button', {
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.93rem',
  color: '$white',
  fontSize: '$ft_subtitle',
  fontWeight: 700,
  border: 'none',
  backgroundColor: '$orange500',
  cursor: 'pointer',
  width: '100%',
  textTransform: 'uppercase',
})
