import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      orange500: '#D87D4A',
      orange300: '#fbaf85',

      red500: '#cd2c2c',

      gray100: '#FAFAFA',
      gray200: '#F1F1F1',
      gray300: '#CFCFCF',
      gray500: '#979797',
      gray700: '#4c4c4c',
      gray900: '#101010',
    },
    fontSizes: {
      ft_h1: '3.5rem',
      ft_h2: '2.5rem',
      ft_h3: '2rem',
      ft_h4: '1.75rem',
      ft_h5: '1.5rem',
      ft_h6: '1.125rem',
      ft_body: '0.93rem',
      ft_overline: '0.875rem',
      ft_subtitle: '0.8125rem',
    },
  },
})
