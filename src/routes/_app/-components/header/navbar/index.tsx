import { ClockCounterClockwiseIcon, HouseIcon, NotepadIcon } from '@phosphor-icons/react'
import { Flex } from 'components/Flex'
import { NavMoneyDropdown } from 'routes/_app/-components/header/navbar/navDropdown'
import { NavOption } from 'routes/_app/-components/header/navbar/navOptions'
import styles from './navbar.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const GlobalHeaderNavBar = () => {
  /***** RENDER *****/
  return (
    <Flex align="center" className={styles.container}>
      <NavOption to="/" icon={HouseIcon}>
        Dashboard
      </NavOption>
      <NavMoneyDropdown />
      <NavOption to="/budget" icon={NotepadIcon}>
        Budget
      </NavOption>
      <NavOption to="/history" icon={ClockCounterClockwiseIcon}>
        History
      </NavOption>
    </Flex>
  )
}
