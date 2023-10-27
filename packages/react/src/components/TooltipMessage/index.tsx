import * as Tooltip from '@radix-ui/react-tooltip'

import { Content } from './styles'
import { Button } from '../Button'

export interface TooltipMessageProps {
  content: string
}

export function TooltipMessage({ content }: TooltipMessageProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button>Mouseover to activate</Button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Content>
            <Tooltip.Arrow />
            {content}
          </Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipMessage.displayName = 'Tooltip'
