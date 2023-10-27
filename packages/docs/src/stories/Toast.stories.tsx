import type { StoryObj, Meta } from '@storybook/react'

import { ToastMessage, ToastMessageProps } from '@jessr-ignite-ui/react'

export default {
  title: 'Calendar/Toast Message',
  component: ToastMessage,
  args: {
    title: 'Event added to calendar',
    description: 'Wednesday, October 23 at 4PM.',
  },
} as Meta<ToastMessageProps>

export const Primary: StoryObj<ToastMessageProps> = {}
