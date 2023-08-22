import { styled } from '@/styles'

export const Container = styled('footer', {
  backgroundColor: '$gray900',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem 2.35rem',

  '@media (min-width: 768px)': {
    alignItems: 'flex-start',
    padding: '0 3rem 2.35rem',
  },

  '@media (min-width: 1024px)': {
    padding: '0 10rem 2.35rem',
  },
})

export const Tag = styled('span', {
  marginBottom: '3.5rem',
  backgroundColor: '$orange500',
  height: 4,
  width: 101,
})

export const LinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  '@media (min-width: 768px)': {
    alignItems: 'flex-start',
  },

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
})

export const LinksContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
})

export const PageButton = styled('button', {
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '$ft_subtitle',
  textDecoration: 'none',
  letterSpacing: 2,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '$white',

  '&:hover': {
    transition: 'all 200ms',
    color: '$orange500',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3rem',

  p: {
    color: '$gray500',
    fontSize: '$ft_body',
    lineHeight: '1.7rem',
    textAlign: 'center',
    opacity: 0.8,
  },

  '@media (min-width: 768px)': {
    alignItems: 'flex-start',

    p: {
      textAlign: 'left',
    },
  },

  '@media (min-width: 1024px)': {
    width: 430,
  },
})

export const MediaWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    marginTop: '3rem',
    color: '$gray500',
    fontSize: '$ft_body',
    lineHeight: '1.7rem',
    fontWeight: 700,
    opacity: 0.8,
  },

  '@media (min-width: 768px)': {
    marginTop: '5rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    p: {
      marginTop: 0,
    },
  },

  '@media (min-width: 1024px)': {
    marginTop: '2.5rem',
  },
})

export const MediaContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  svg: {
    cursor: 'pointer',
    color: '$white',
    fontSize: '1.7rem',

    '&:hover': {
      transition: 'all 200ms',
      color: '$orange500',
    },
  },

  '@media (min-width: 768px)': {
    marginTop: 0,
  },

  '@media (min-width: 1024px)': {
    marginTop: '-12rem',
  },
})
