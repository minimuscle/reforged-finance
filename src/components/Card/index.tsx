import type { ReactWithChildren } from 'utils/types/general'
import styles from './Card.module.css'
import { Flex } from 'components/Flex'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Card: ReactWithChildren = ({ children }) => {
  return (
    <Flex direction="column" className={styles.container}>
      {children}
    </Flex>
  )
}
