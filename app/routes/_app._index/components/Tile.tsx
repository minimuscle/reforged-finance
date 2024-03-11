import { Flex, Paper, Text, Title } from '@mantine/core'
import classes from '../_index.module.css'

const Tile = ({
  children,
  title,
  rightComponent,
  footer,
}: {
  children: React.ReactNode
  title: string
  rightComponent?: React.ReactNode
  footer?: React.ReactNode
}) => {
  return (
    <Paper className={classes.tile}>
      <Flex justify='space-between' align='center'>
        <Text>
          <span>{title}</span>
        </Text>
        {rightComponent}
      </Flex>
      <Title>{children}</Title>
      {footer}
    </Paper>
  )
}

export default Tile
