import { styled } from '../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  marginTop: '7.5rem',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '$orange500',
  borderRadius: '8px',
  backgroundImage: 'url("/assets/home/desktop/pattern-circles.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '168%',
  backgroundPositionY: '-7rem',
  padding: '0 1rem 3.43rem',
  width: '100%',

  '@media (min-width: 768px)': {
    backgroundSize: '136%',
    backgroundPositionY: '-19rem',
  },

  '@media (min-width: 1024px)': {
    backgroundSize: '94%',
    backgroundPositionY: '-1rem',
    backgroundPositionX: '-12rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 0,
    overflow: 'hidden',
  },
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("/assets/home/mobile/image-speaker-zx9.png")',
  minWidth: '10.76rem',
  height: '12.9375rem',
  marginTop: '4rem',
  marginBottom: '3.125rem',
  backgroundSize: '100%',

  '@media (min-width: 768px)': {
    backgroundImage: 'url("/assets/home/tablet/image-speaker-zx9.png")',
  },

  '@media (min-width: 1024px)': {
    backgroundImage: 'url("/assets/home/desktop/image-speaker-zx9.png")',
    minWidth: '25.64rem',
    minHeight: '30.9375rem',
    margin: '5.5rem 0 0 0',
    marginBottom: '-1rem',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (min-width: 1024px)': {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
})

export const Heading = styled('h2', {
  color: '$white',
  fontSize: '2.25rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: '2.8rem',
  marginBottom: '1.5rem',
  maxWidth: 328,

  '@media (min-width: 768px)': {
    fontSize: '$ft_h1',
    lineHeight: '3.8rem',
  },
})

export const Paragraph = styled('p', {
  opacity: 0.8,
  color: '$gray100',
  fontSize: '$ft_body',
  lineHeight: '1.6rem',
  marginBottom: '1.75rem',
  maxWidth: 280,

  '@media (min-width: 640px)': {
    marginBottom: '2.5rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: 350,
  },
})
