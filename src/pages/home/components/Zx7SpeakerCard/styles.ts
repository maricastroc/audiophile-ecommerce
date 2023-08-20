import { styled } from '../../../../styles'

export const Container = styled('div', {
  backgroundImage: 'url("./assets/home/mobile/image-speaker-zx7.jpg")',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundSize: 'cover',
  height: '20rem',
  padding: '1.5rem',
  marginTop: '1.5rem',
  width: '100%',

  '@media (min-width: 768px)': {
    backgroundImage: 'url("./assets/home/tablet/image-speaker-zx7.jpg")',
    padding: '5.9375rem',
    marginTop: '2rem',
  },

  '@media (min-width: 1024px)': {
    backgroundImage: 'url("./assets/home/desktop/image-speaker-zx7.jpg")',
    marginTop: '2.5rem',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '2rem',

  h3: {
    fontSize: '$ft_h4',
    fontWeight: 700,
    color: '$black',
  },
})
