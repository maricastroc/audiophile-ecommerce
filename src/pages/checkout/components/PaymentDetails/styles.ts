import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
})

export const PaymentsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const PaymentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',

  '@media (min-width: 768px)': {
    width: '50%',
  },
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
  cursor: 'pointer',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '1.125rem 1rem',
  backgroundColor: 'transparent',
  border: '1px solid $gray200',
  borderRadius: 8,
  width: '100%',

  '&:hover': {
    border: '1px solid $orange500',
    transition: '200ms all',
  },

  '&.checked': {
    border: '2px solid $orange500',
  },

  '> label': {
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '$ft_overline',
  },

  '> input': {
    cursor: 'pointer',
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

export const AddsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  width: '100%',
  marginTop: '2rem',

  '@media (min-width: 768px)': {
    marginTop: '0.2rem',
  },
})

export const EMoneyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',
  width: '100%',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    gap: '1rem',
  },
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

export const CashContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2rem',
  gap: '2rem',

  p: {
    fontSize: 'ft_body',
    opacity: 0.5,
    lineHeight: '1.5625rem',
  },

  img: {
    width: '3rem',
    height: 'auto',
  },
})
