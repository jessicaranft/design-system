import type { StoryObj, Meta } from '@storybook/react'

import { TooltipMessage, TooltipMessageProps } from '@jessr-ignite-ui/react'

export default {
  title: 'Calendar/Tooltip Message',
  component: TooltipMessage,
  args: {
    content: '26 October - Available',
  },
} as Meta<TooltipMessageProps>

export const Primary: StoryObj<TooltipMessageProps> = {}
