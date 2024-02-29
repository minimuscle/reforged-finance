import { Paper } from '@mantine/core'
import classes from '../_index.module.css'

const Tile = ({ children }: { children: React.ReactNode }) => {
  return <Paper className={classes.tile}>{children}</Paper>
}

export default Tile
