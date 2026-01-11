import { Link } from '@tanstack/react-router'
import logo from 'assets/images/logo.svg'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import styles from './logo.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const GlobalHeaderLogo = () => {
  /***** RENDER *****/
  return (
    <Link to="/" className={styles.link}>
      <Flex align="center" justify="center" className={styles.container}>
        <img src={logo} alt="logo" width={80} height={40} />
        <Flex direction="column">
          <Text size="lg" bold>
            Reforged Finance
          </Text>
          <Text size="xs" color="grey">
            Personal Wealth Tracker
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}
