import { styled } from '../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '1.5rem',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    marginTop: '2rem',
  },

  '@media (min-width: 1024px)': {
    marginTop: '2.5rem',
  },
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("assets/home/mobile/image-earphones-yx1.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '12.5rem',
  borderRadius: 8,

  '@media (min-width: 768px)': {
    height: 320,
    backgroundImage: 'url("assets/home/tablet/image-earphones-yx1.jpg")',
  },

  '@media (min-width: 1024px)': {
    backgroundImage: 'url("assets/home/desktop/image-earphones-yx1.jpg")',
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2rem',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 1.5rem',
  width: '100%',
  height: '12.5rem',
  borderRadius: 8,
  backgroundColor: '$gray200',

  h3: {
    fontSize: '$ft_h4',
    fontWeight: 700,
    color: '$black',
  },

  '@media (min-width: 768px)': {
    height: 320,
    paddingLeft: '3rem',
  },
})
