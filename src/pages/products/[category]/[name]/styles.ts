import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1.5rem',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',

  '@media(min-width: 420px)': {
    padding: '0 2.5rem',
  },

  '@media (min-width: 768px)': {
    maxWidth: '69.375rem',
    padding: '0 2.5rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '78rem',
    padding: '0 6rem',
  },
})

export const InfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    gap: '8.125rem',
  },
})

export const InTheBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  textAlign: 'left',
  marginTop: '5.5rem',

  h2: {
    fontSize: '$ft_h5',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 560,

    h2: {
      fontSize: '$ft_h3',
    },

    p: {
      maxWidth: '100%',
    },
  },

  '@media (min-width: 1024px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '50%',
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

export const ShopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '7rem',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    margin: '0 auto',
  },
})
