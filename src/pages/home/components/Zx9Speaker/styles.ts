import { styled } from '../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  marginTop: '7.5rem',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '$orange500',
  borderRadius: '8px',
  backgroundImage: 'url("./assets/home/desktop/pattern-circles.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '168%',
  backgroundPositionY: '-7rem',
  padding: '0 1rem 3.43rem',
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("./assets/home/mobile/image-speaker-zx9.png")',
  minWidth: '10.76rem',
  height: '12.9375rem',
  marginTop: '4rem',
  marginBottom: '3.125rem',
  backgroundSize: '100%',
})
