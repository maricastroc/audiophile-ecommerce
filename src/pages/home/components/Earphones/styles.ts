import { styled } from '../../../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '1.5rem',
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("assets/home/mobile/image-earphones-yx1.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '12.5rem',
  borderRadius: 8,
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
})
