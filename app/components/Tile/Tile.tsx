import { Card, Col } from "@tremor/react"
import styles from "./Tile.module.css"
import { ReactNode } from "react"
import { Box } from "@radix-ui/themes"

type TileProps = {
  children?: ReactNode
}

const Tile = ({ children }: TileProps) => {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>{children}</Card>
    </Box>
  )
}

export default Tile
