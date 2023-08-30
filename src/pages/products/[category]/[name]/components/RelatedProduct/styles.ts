import { styled } from '@/styles'

export const Container = styled('div', {
  margin: '7.5rem auto 5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',

  h2: {
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '2.5rem',
  },

  '@media (min-width: 768px)': {
    margin: '7.5rem auto 7.5rem',

    h2: {
      fontSize: '$ft_h3',
    },
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    gap: '0.75rem',
  },

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    gap: '1.875rem',
  },
})

export const Product = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  img: {
    borderRadius: 8,
    width: '100%',
    height: 'auto',
    maxWidth: 327,
  },

  h3: {
    margin: '2rem 0',
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  '& + &': {
    marginTop: '3.5rem',
  },

  '@media (min-width: 768px)': {
    '& + &': {
      marginTop: 0,
    },

    img: {
      maxWidth: '100%',
    },
  },
})
