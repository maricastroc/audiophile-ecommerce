import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '1.5rem',
})

export const FeaturesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  textAlign: 'left',
  marginTop: '5.5rem',

  h3: {
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  p: {
    opacity: 0.5,
    color: '$black',
    fontSize: '$ft_body',
    lineHeight: '1.6rem',
    marginBottom: '0.7rem',
    maxWidth: 400,
  },
})

export const InTheBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  textAlign: 'left',
  marginTop: '5.5rem',

  h3: {
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },
})

export const InTheBoxItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
})

export const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  p: {
    opacity: 0.5,
    color: '$black',
    fontSize: '$ft_body',
    lineHeight: '1.6rem',
    maxWidth: 400,
  },

  span: {
    color: '$orange500',
    fontWeight: 700,
  },
})

export const ImagesContainer = styled('div', {
  marginTop: '5.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  width: '100%',

  img: {
    borderRadius: 8,
    width: '100%',
    height: 'auto',
  },
})

export const ImagesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const RecommendContainer = styled('div', {
  marginTop: '7.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const RecommendItem = styled('div', {
  marginTop: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  img: {
    borderRadius: 8,
    width: '100%',
    height: 'auto',
  },

  h3: {
    margin: '2rem 0',
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },
})
