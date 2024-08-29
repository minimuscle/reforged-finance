import { Flex, Title } from '@mantine/core'
import classes from './Heading.module.css'

export default function Heading({
  title,
  children
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <Flex className={classes.header}>
      <Title>{title}</Title>
      {children}
    </Flex>
  )
}
