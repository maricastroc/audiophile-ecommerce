import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  alignItems: 'flex-start',
  width: '100%',
  margin: '1.5rem auto 0',

  img: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    maxWidth: 327,
  },

  '@media (min-width: 768px)': {
    img: {
      maxWidth: 689,
    },
  },

  '@media (min-width: 1024px)': {
    alignItems: 'space-between',
    justifyContent: 'space-between',
    flexDirection: 'row',

    img: {
      width: 'clamp(300px, 50%, 540px)',
    },
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  alignItems: 'flex-start',
  width: '100%',

  '@media (min-width: 1024px)': {
    textAlign: 'left',
    alignItems: 'flex-start',
    width: 'clamp(300px, 50%, 400px)',
  },
})

export const Label = styled('p', {
  marginTop: '1rem',
  color: '$orange500',
  fontSize: '$ft_overline',
  letterSpacing: 10,
  fontWeight: 400,
  textTransform: 'uppercase',

  '@media (min-width: 768px)': {
    marginTop: '3.25rem',
  },
})

export const Heading = styled('h2', {
  color: '$black',
  fontSize: 'ft_h4',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '1.9rem',
  margin: '1.5rem 0',
  maxWidth: 328,

  '@media (min-width: 768px)': {
    fontSize: '$ft_h2',
    margin: '1rem 0 2.5rem',
  },
})

export const Paragraph = styled('p', {
  opacity: 0.5,
  color: '$black',
  fontSize: '$ft_body',
  lineHeight: '1.6rem',
  marginBottom: '1.5rem',
  maxWidth: 400,

  '@media (min-width: 768px)': {
    maxWidth: 570,
  },

  '@media (min-width: 1024px)': {
    width: 'clamp(350px, 50%, 570px)',
    marginBottom: '2.5rem',
  },
})

export const Price = styled('p', {
  color: '$black',
  fontSize: '$ft_h6',
  fontWeight: 700,
  letterSpacing: 1.5,
  marginBottom: '2.3rem',
})

export const AddButton = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.93rem',
  backgroundColor: '$orange500',
  color: '$white',
  border: 'none',

  '&:hover': {
    transition: 'all 200ms',
    backgroundColor: '$orange300',
  },

  p: {
    fontSize: '$ft_subtitle',
    textTransform: 'uppercase',
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: 1,
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '1rem',
})
