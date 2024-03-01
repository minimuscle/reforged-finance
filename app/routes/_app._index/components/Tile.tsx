import { Flex, Paper, Title } from '@mantine/core'
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
        <Title size='h3'>{title}</Title>
        {rightComponent}
      </Flex>
      <Title>{children}</Title>

      {footer}
    </Paper>
  )
}

export default Tile
