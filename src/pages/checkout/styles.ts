import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1.5rem',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    padding: '0 2.5rem',
    maxWidth: '69.375rem',
  },

  '@media (min-width: 1024px)': {
    padding: '0 6rem',
    maxWidth: '78rem',
  },
})

export const Container = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',

  '@media (min-width: 1200px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0 0 8.8125rem',
    gap: '1.875rem',
  },
})

export const CheckoutForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  padding: '1.5rem',
  borderRadius: 8,
  margin: '0 auto',
  backgroundColor: '$white',

  '@media (min-width: 1200px)': {
    width: '70%',
    flex: 1,
    padding: '3.5rem 3rem',
  },
})

export const Heading = styled('h2', {
  fontWeight: 700,
  fontSize: '$ft_h4',
  textTransform: 'uppercase',
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  gap: '1.5rem',
})

export const FormTitle = styled('h3', {
  color: '$orange500',
  fontSize: '$ft_subtitle',
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '2.8rem 0 0',
})

export const FormItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.6rem',
  width: '100%',
})

export const FormInput = styled('input', {
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

export const FormLabel = styled('label', {
  fontSize: '0.75rem',
  fontWeight: 700,

  '&.error': {
    color: '$red500',
  },
})

export const FormError = styled('p', {
  fontSize: '0.75rem',
  color: '$red500',
  marginTop: '-0.2rem',
})

export const CheckoutButton = styled('button', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0.93rem',
  backgroundColor: '$orange500',
  color: '$white',
  border: 'none',
  marginTop: '2.5rem',

  fontSize: '$ft_subtitle',
  textTransform: 'uppercase',
  fontWeight: 700,
  textAlign: 'center',
  letterSpacing: 2,

  '&:hover': {
    transition: 'all 200ms',
    backgroundColor: '$orange300',
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
})

export const SummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  padding: '1.5rem',
  borderRadius: 8,
  margin: '2rem auto 6.06rem',
  backgroundColor: '$white',

  '@media (min-width: 1200px)': {
    width: '30%',
    margin: '0 auto 6.06rem',
    padding: '2.06rem',
  },
})
