import * as Tooltip from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const Content = styled(Tooltip.Content, {
  padding: '$3 $4',

  borderRadius: 5,
  backgroundColor: '$gray900',
  boxShadow: 'box-shadow: 4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  color: '$gray100',
})
