import { styled } from '@/styles'

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
