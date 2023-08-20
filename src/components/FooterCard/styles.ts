import { styled } from '../../styles'

export const Container = styled('div', {
  margin: '7.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export const ImageContainer = styled('div', {
  backgroundImage: 'url("./assets/shared/mobile/image-best-gear.jpg")',
  minHeight: '18rem',
  backgroundSize: 'cover',
  width: '100%',
  borderRadius: 8,
})

export const TextContainer = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  textAlign: 'center',

  h3: {
    fontSize: '$ft_h4',
    fontWeight: 700,
    color: '$black',
    textTransform: 'uppercase',
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
  },
})
