import { Flex } from 'components/Flex'
import { GlobalHeaderLogo } from 'routes/_app/-components/header/logo'
import { GlobalHeaderNavBar } from 'routes/_app/-components/header/navbar'
import { GlobalHeaderProfile } from 'routes/_app/-components/header/profile'
import styles from './header.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const GlobalHeader = () => {
  /***** RENDER *****/
  return (
    <Flex fullWidth justify="between" className={styles.container}>
      <GlobalHeaderLogo />
      <GlobalHeaderNavBar />
      <GlobalHeaderProfile />
    </Flex>
  )
}
