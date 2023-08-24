import { styled } from '@/styles'

import {
  Overlay as RadixOverlay,
  Content as RadixContent,
  Title as RadixTitle,
  Description as RadixDescription,
  Close as RadixClose,
} from '@radix-ui/react-dialog'

export const Overlay = styled(RadixOverlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  zIndex: 9998,
  backgroundColor: 'rgba(10, 10, 10, 0.7)',
})

export const Content = styled(RadixContent, {
  padding: '1.95rem 1.5rem',
  backgroundColor: '$white',
  border: 'none',
  position: 'fixed',
  top: '19rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'clamp(320px, 90vw, 24rem)',
  borderRadius: '4px',
  zIndex: 9999,

  '&:focus': {
    boxShadow: 'none',
  },

  '@media (min-width: 420px)': {
    padding: '1.95rem',
  },
})

export const Title = styled(RadixTitle, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h3: {
    fontSize: '1.125rem',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
})

export const RemoveButton = styled('button', {
  color: '$gray500',
  fontSize: '$ft_body',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  textDecoration: 'underline',
})

export const Description = styled(RadixDescription, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

export const ShopItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export const CloseButton = styled(RadixClose, {
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.93rem',
  color: '$white',
  fontSize: '$ft_subtitle',
  fontWeight: 700,
  border: 'none',
  backgroundColor: '$orange500',
  cursor: 'pointer',
  width: '100%',
  textTransform: 'uppercase',
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (min-width: 480px)': {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
