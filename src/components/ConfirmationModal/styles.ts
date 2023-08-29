import { styled } from '@/styles'

export const Container = styled('div', {
  position: 'relative',
  width: '100vw',
  height: 'auto',
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
  top: '3rem',
  right: 0,
  left: 0,
  borderRadius: 8,
  width: 'clamp(20.4375rem, 50vw, 540px)',
  margin: '0 auto',
  backgroundColor: '$white',
  padding: '2.375rem 1.75rem 3rem 1.75rem',
  maxHeight: '100%',
  overflowY: 'auto',
  zIndex: 9999,

  '@media (min-width: 1024px)': {
    padding: '3rem',
  },
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

export const Subtitle = styled('p', {
  fontSize: '$ft_body',
  lineHeight: '1.5625rem',
  marginBottom: '1.9375rem',
  opacity: 0.5,
})

export const Description = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

export const SummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
})

export const SummaryProducts = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '$gray200',
  padding: '1.5rem',
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,

  '@media (min-width: 768px)': {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
  },
})

export const ProductWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export const Separator = styled('span', {
  width: '100%',
  height: 1,
  backgroundColor: '$gray300',
  margin: '0.75rem auto',
})

export const SeeMore = styled('button', {
  cursor: 'pointer',
  fontSize: '0.75rem',
  opacity: 0.5,
  lineHeight: '1.5625rem',
  fontWeight: 700,
  backgroundColor: 'transparent',
  border: 'none',
})

export const SummaryTotal = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '$black',
  padding: '1.5rem',
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,

  '@media (min-width: 768px)': {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
  },

  p: {
    color: '$gray500',
    fontSize: '$ft_body',
    fontWeight: 500,
    lineHeight: '1.5625rem',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },

  h3: {
    color: '$white',
    fontSize: '$ft_h6',
    fontWeight: 700,
  },
})

export const CloseButton = styled('button', {
  marginTop: '2.875rem',
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
