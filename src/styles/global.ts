import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    ':focus': {
      outline: 'transparent',
      boxShadow: '0 0 0 2px rgba(216, 125, 74, 1)',
    },
  },

  body: {
    backgroundColor: '$white',
    color: '$black',
    minHeight: '100vh',
  },

  'body, input, textarea, button': {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
  },
})
