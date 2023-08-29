import { styled } from '@/styles'

export const Container = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0 1.5rem',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    maxWidth: '69.375rem',
    padding: '0 2.5rem',
  },

  '@media (min-width: 1024px)': {
    maxWidth: '78rem',
    padding: '0 6rem',
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
})

export const FormTitle = styled('h3', {
  color: '$orange500',
  fontSize: '$ft_subtitle',
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: '2.8rem 0 1.5rem',
})

export const FormItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '0.6rem',
  width: '100%',

  '& + &': {
    marginTop: '1.5rem',
  },
})

export const FormInput = styled('input', {
  padding: '1.125rem 1.5rem',
  backgroundColor: 'transparent',
  border: '1px solid $gray300',
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

export const PaymentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
})

export const PaymentTitle = styled('p', {
  fontSize: '0.75rem',
  fontWeight: 700,
  marginBottom: '1rem',

  '&.error': {
    color: '$red500',
  },
})

export const PaymentItem = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '1.125rem 1rem',
  backgroundColor: 'transparent',
  border: '1px solid $gray300',
  borderRadius: 8,
  width: '100%',

  '&.checked': {
    border: '2px solid $orange500',
  },

  '> label': {
    fontWeight: 700,
    fontSize: '$ft_overline',
  },

  '> input': {
    position: 'relative',
    appearance: 'none',
    width: '1rem',
    height: '1rem',
    color: 'transparent',
    backgroundColor: 'transparent',
    border: '1px solid $gray300',
    borderRadius: '50%',

    '&:focus': {
      boxShadow: 'none',
    },

    '&.checked': {
      border: '1px solid $orange500',

      '&:before': {
        position: 'absolute',
        content: '',
        display: 'block',
        width: 8,
        height: 8,
        backgroundColor: '$orange500',
        borderRadius: '50%',
        top: 3,
        left: 3,
      },
    },
  },
})

export const EMoneyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: '2rem',
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
  margin: '0 auto 6.06rem',
  backgroundColor: '$white',
})
