import { CaretDownIcon, CoinsIcon } from '@phosphor-icons/react'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Menu, MenuTrigger } from 'react-aria-components'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const NavMoneyDropdown = () => {
  /***** RENDER HELPERS *****/
  // const Caret

  /***** RENDER *****/
  return (
    <MenuTrigger>
      <button>
        <Flex gap={10} align="center">
          <CoinsIcon size={24} color={'var(--slate-500)'} />
          <Text>Money</Text>
          <CaretDownIcon size={24} color={'var(--slate-500)'} />
        </Flex>
      </button>
      <Menu>
        <Text>Open</Text>
      </Menu>
    </MenuTrigger>
    // <Link to={to}>
    //   {({ isActive }) => (
    //     <Flex gap={10} align="center">
    //       <Icon weight={isActive ? 'fill' : 'regular'} size={24} color={isActive ? 'var(--cyan-600)' : 'var(--slate-500)'} />
    //       <Text bold={isActive} color={isActive ? 'info' : 'default'}>
    //         {children}
    //       </Text>
    //     </Flex>
    //   )}
    // </Link>
  )
}
