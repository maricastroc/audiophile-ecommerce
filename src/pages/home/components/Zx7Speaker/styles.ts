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
