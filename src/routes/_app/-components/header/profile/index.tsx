import { BellIcon } from '@phosphor-icons/react'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import styles from './profile.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const GlobalHeaderProfile = () => {
  /***** RENDER *****/
  return (
    <Flex align="center" justify="center" className={styles.container}>
      <Text color="grey">Welcome, Josh</Text>
      <button>
        <Flex align="center" justify="center" className={styles.notification}>
          <BellIcon size={28} />
        </Flex>
      </button>
      <button>
        <Flex align="center" justify="center" className={styles.user}>
          <Text color="white" bold>
            JT
          </Text>
        </Flex>
      </button>
    </Flex>
  )
}
