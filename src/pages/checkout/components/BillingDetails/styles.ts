import { styled } from '@/styles'

export const FormWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    div: {
      marginTop: 0,
    },
  },
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  gap: '1.5rem',
})

export const Title = styled('h3', {
  color: '$orange500',
  fontSize: '$ft_subtitle',
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '2.8rem 0 0',
})

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.6rem',
  width: '100%',

  '@media (min-width: 768px)': {
    '&.phone': {
      width: '50%',
    },
  },
})

export const Input = styled('input', {
  padding: '1.125rem 1.5rem',
  backgroundColor: 'transparent',
  border: '1px solid $gray200',
  borderRadius: 8,
  fontSize: '$ft_overline',
  width: '100%',

  '&::placeholder': {
    opacity: 0.8,
  },

  '&.error': {
    border: '1px solid $red500',
  },
})

export const Label = styled('label', {
  fontSize: '0.75rem',
  fontWeight: 700,

  '&.error': {
    color: '$red500',
  },
})
