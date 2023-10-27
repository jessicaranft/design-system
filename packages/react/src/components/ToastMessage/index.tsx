import * as Toast from '@radix-ui/react-toast'

import { X } from 'phosphor-react'
import { Close, Description, Title, ToastContainer } from './styles'

export interface ToastMessageProps {
  title: string
  description: string
}

export function ToastMessage({ title, description }: ToastMessageProps) {
  return (
    <Toast.Provider duration={5000000000}>
      <ToastContainer>
        <Close>
          <X size={20} />
        </Close>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ToastContainer>

      <Toast.Viewport />
    </Toast.Provider>
  )
}

ToastMessage.displayName = 'Toast'
