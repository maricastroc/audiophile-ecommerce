import { styled } from '@/styles'

export const Container = styled('div', {
  margin: '7.5rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '@media (min-width: 768px)': {
    margin: '10rem auto',
    padding: 0,
  },

  '@media (min-width: 1024px)': {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("./assets/shared/mobile/image-best-gear.jpg")',
  minHeight: '18rem',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  borderRadius: 8,

  '@media (min-width: 768px)': {
    backgroundImage: 'url("./assets/shared/tablet/image-best-gear.jpg")',
  },

  '@media (min-width: 1024px)': {
    backgroundImage: 'url("./assets/shared/desktop/image-best-gear.jpg")',
    width: 'clamp(25.75rem, 35vw, 540px)',
    minHeight: '28.75rem',
  },
})

export const TextContainer = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  textAlign: 'center',

  h3: {
    fontSize: '$ft_h4',
    fontWeight: 700,
    color: '$black',
    textTransform: 'uppercase',
    lineHeight: '2.8rem',
  },

  span: {
    fontSize: '$ft_h4',
    fontWeight: 700,
    color: '$orange500',
    textTransform: 'uppercase',
  },

  p: {
    opacity: 0.5,
    color: '$black',
    fontSize: '$ft_body',
    lineHeight: '1.6rem',
    marginBottom: '1.75rem',
    maxWidth: '40rem',
  },

  '@media (min-width: 768px)': {
    h3: {
      fontSize: '$ft_h2',
      maxWidth: '30rem',
    },

    span: {
      fontSize: '$ft_h2',
    },
  },

  '@media (min-width: 1024px)': {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    maxWidth: '28rem',
  },
})
