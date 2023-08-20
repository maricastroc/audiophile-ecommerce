import { styled } from '../../styles'

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 1.5rem',
  height: '100%',
  backgroundColor: '$gray900',
  zIndex: 9999,

  svg: {
    color: '$white',
    fontSize: '1.2rem',

    '&.icon_shop': {
      fontSize: '1.5rem',
    },
  },

  '@media (min-width: 768px)': {
    img: {
      marginLeft: '-30rem',
    },
  },

  '@media (min-width: 1024px)': {
    padding: '2rem 10rem',

    img: {
      marginLeft: 0,
    },

    svg: {
      cursor: 'pointer',

      '&.icon_menu': {
        display: 'none',
      },

      '&:hover': {
        transition: 'all 200ms',
        color: '$orange500',
      },
    },
  },
})

export const LinksContainer = styled('div', {
  display: 'none',

  '@media (min-width: 1024px)': {
    display: 'flex',
    gap: '2.125rem',
    alignItems: 'center',
  },
})

export const PageButton = styled('button', {
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '$ft_subtitle',
  textDecoration: 'none',
  letterSpacing: 1,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '$white',

  variants: {
    active: {
      true: {
        color: '$orange500',
      },
    },
  },

  '&:hover': {
    transition: 'all 200ms',
    color: '$orange500',
  },
})
