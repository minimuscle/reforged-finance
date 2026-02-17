import { InternalButton } from './button'
import { InternalLinkButton } from './link'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Button = Object.assign(InternalButton, {
  Link: InternalLinkButton,
})
