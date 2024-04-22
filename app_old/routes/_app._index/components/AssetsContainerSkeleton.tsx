import { Box, Paper, Title } from '@mantine/core'
import styles from '../_index.module.css'

const AssetsContainerSkeleton = () => {
  return (
    <Paper className={styles.assetsContainer}>
      <Title size={'h2'}>Asset Distribution</Title>
      <Box className={styles.chartContainer}></Box>
    </Paper>
  )
}

export default AssetsContainerSkeleton
