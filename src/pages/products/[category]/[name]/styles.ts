import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2.05rem auto 0',
  width: '100%',
  padding: '1.5rem',

  '@media(min-width: 420px)': {
    padding: '2.5rem',
  },

  '@media (min-width: 768px)': {
    padding: '0 2.5rem',
  },

  '@media (min-width: 1024px)': {
    padding: '0 4.5rem',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',

  '@media (min-width: 768px)': {
    maxWidth: '52rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '60rem',
  },

  '@media (min-width: 1400px)': {
    maxWidth: '68rem',
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

export const FeaturesContainer = styled('div', {
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

  p: {
    opacity: 0.5,
    color: '$black',
    fontSize: '$ft_body',
    lineHeight: '1.6rem',
    marginBottom: '0.7rem',
    maxWidth: '100%',
  },

  '@media (min-width: 768px)': {
    h2: {
      fontSize: '$ft_h3',
    },
  },

  '@media (min-width: 1024px)': {
    width: '100%',
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

export const ImagesContainer = styled('div', {
  marginTop: '5.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  width: '100%',

  img: {
    borderRadius: 8,
    width: '100%',
    height: 'auto',
    maxWidth: 327,
  },

  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: '1.4fr 2fr',

    img: {
      maxWidth: '100%',
    },
  },
})

export const ImagesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const RecommendContainer = styled('div', {
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

export const RecommendContent = styled('div', {
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

export const RecommendItem = styled('div', {
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
