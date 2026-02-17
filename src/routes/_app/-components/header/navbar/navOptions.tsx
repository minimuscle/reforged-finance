import { type Icon } from '@phosphor-icons/react'
import { Link, type LinkOptions } from '@tanstack/react-router'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import type { ReactWithChildren } from 'utils/types/general'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type NavOption = ReactWithChildren<{
  to: LinkOptions['to']
  icon: Icon
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const NavOption: NavOption = ({ to, icon: Icon, children }) => {
  /***** RENDER *****/
  return (
    <Link to={to}>
      {({ isActive }) => (
        <Flex gap={10} align="center">
          <Icon weight={isActive ? 'fill' : 'regular'} size={24} color={isActive ? 'var(--cyan-600)' : 'var(--slate-500)'} />
          <Text bold={isActive} color={isActive ? 'info' : 'default'}>
            {children}
          </Text>
        </Flex>
      )}
    </Link>
  )
}
