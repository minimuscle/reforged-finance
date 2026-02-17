import { CrownSimpleIcon } from '@phosphor-icons/react'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'
import { Heading } from 'components/Text/Heading'
import styles from './premiumBanner.module.css'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const PremiumBanner = () => {
  /***** RENDER *****/
  return (
    <Flex align="center" justify="between" fullWidth className={styles.container}>
      <Flex direction="column">
        <Flex gap={10}>
          <Heading color="white" bold size={20}>
            Do more with Premium
          </Heading>
          <CrownSimpleIcon size={24} weight="fill" color="var(--amber-400)" />
        </Flex>
        <Text color="white" size="sm">
          Unlock all features, advanced insights, and powerful tools to manage your finances with confidence
        </Text>
      </Flex>
      <Button.Link to="/premium" color="white">
        <Text bold>Go Premium</Text>
      </Button.Link>
    </Flex>
  )
}
