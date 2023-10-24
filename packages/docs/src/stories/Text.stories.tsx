import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla qui quas sit. Numquam repudiandae at quas, voluptatum delectus eaque dicta culpa itaque natus eius vel, enim recusandae dolores esse ipsa.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
