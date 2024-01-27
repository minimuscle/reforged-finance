import { Box, Paper, Title } from "@mantine/core"
import styles from "../_index.module.css"
import AssetDistribution from "~/components/widgets/charts/AssetDistribution"

const AssetsContainer = () => {
  return (
    <Paper className={styles.assetsContainer}>
      <Title size={"h2"}>Asset Distribution</Title>
      <Box className={styles.chartContainer}>
        <AssetDistribution />
      </Box>
    </Paper>
  )
}

export default AssetsContainer
