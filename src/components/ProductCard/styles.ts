import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto',

  img: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    marginBottom: '2rem',
    maxWidth: 327,
  },

  '@media (min-width: 768px)': {
    img: {
      maxWidth: 689,
      marginBottom: '3.25rem',
    },
  },

  '@media (min-width: 1024px)': {
    alignItems: 'space-between',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: '4rem',

    '&.left': {
      flexDirection: 'row',
    },

    '&.right': {
      flexDirection: 'row-reverse',
    },

    img: {
      width: 'clamp(300px, 50%, 540px)',
      marginBottom: 0,
    },
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  width: '100%',

  '@media (min-width: 1024px)': {
    textAlign: 'left',
    alignItems: 'flex-start',
    width: 'clamp(300px, 50%, 400px)',
  },
})

export const Label = styled('p', {
  color: '$orange500',
  fontSize: '$ft_overline',
  letterSpacing: 10,
  fontWeight: 400,
  textTransform: 'uppercase',
})

export const Heading = styled('h2', {
  color: '$black',
  fontSize: '2.25rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '2.8rem',
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
    width: 'clamp(340px, 28vw, 430px)',
    marginBottom: '2.5rem',
  },
})
