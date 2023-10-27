import * as Toast from '@radix-ui/react-toast'

import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: 360,
  padding: '$3 $5',

  borderRadius: 6,
  border: '1px solid $gray600',
  backgroundColor: '$gray800',

  position: 'relative',
  listStyle: 'none',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$white',
  marginBottom: '$3',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  width: 360,
  maxWidth: '100vw',
  zIndex: 2147483647,
})

export const Close = styled(Toast.Close, {
  border: 0,
  background: 'none',
  color: '$gray200',
  lineHeight: 0,

  position: 'absolute',
  top: '$3',
  right: '$3',

  cursor: 'pointer',
})
