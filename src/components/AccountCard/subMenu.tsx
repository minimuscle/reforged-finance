import { Menu } from "@mantine/core"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface SubMenu {
  isMenuOpen: boolean
  menuHandler: {
    readonly open: () => void
    readonly close: () => void
    readonly toggle: () => void
  }
  target: React.ReactElement<typeof Menu.Item>
  children: React.ReactNode
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function SubMenu({ isMenuOpen, menuHandler, target, children }: SubMenu) {
  /*********  RENDER  *********/
  return (
    <Menu opened={isMenuOpen} onChange={menuHandler.toggle} position="right" closeOnEscape>
      <Menu.Target>{target}</Menu.Target>
      <Menu.Dropdown>{children}</Menu.Dropdown>
    </Menu>
  )
}
