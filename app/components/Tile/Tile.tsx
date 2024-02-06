import styles from "./Tile.module.css"
import { ReactNode } from "react"
import { Box, Paper } from "@mantine/core"

type TileProps = {
  minRows?: number
  maxRows?: number
  minCols?: number
  maxCols?: number
  rows?: number
  cols?: number
  children?: ReactNode
}

const Tile = ({ children, rows = 1, cols = 2 }: TileProps) => {
  const rowClassName = styles[`row${rows}`]
  const colClassName = styles[`col${cols}`]

  return (
    <Box className={`${rowClassName} ${colClassName}`}>
      <Paper withBorder shadow="sm" p={"sm"} className={styles.card}>
        {children}
      </Paper>
    </Box>
  )
}

export default Tile
