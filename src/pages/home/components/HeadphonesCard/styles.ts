import { styled } from '../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url("./assets/home/mobile/image-header.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  marginTop: '-6rem',
  marginBottom: '6.75rem',
  height: '37.5rem',

  '@media (min-width: 450px)': {
    backgroundImage: 'url("./assets/home/tablet/image-header.jpg")',
    backgroundPosition: 'center top',
    marginTop: '-4rem',
    marginBottom: '9.25rem',
  },

  '@media (min-width: 768px)': {
    height: '45.56rem',
  },

  '@media (min-width: 1024px)': {
    backgroundImage: 'url("./assets/home/desktop/image-hero.jpg")',
    marginTop: '-5rem',
    marginBottom: '12.5rem',
    backgroundSize: '100% 100%',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 10rem',
  },
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

  '@media (min-width: 640px)': {
    fontSize: '$ft_h1',
    maxWidth: 450,
    lineHeight: '3.8rem',
  },
})

export const Paragraph = styled('p', {
  opacity: 0.8,
  color: '$gray100',
  fontSize: '$ft_body',
  lineHeight: '1.6rem',
  marginBottom: '1.75rem',
  maxWidth: 350,

  '@media (min-width: 640px)': {
    marginBottom: '2.5rem',
  },
})
