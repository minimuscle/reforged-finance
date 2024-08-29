import { Box, ColorSwatch, Group, Text, Title } from '@mantine/core'
import classes from './ChartTooltip.module.css'
import { ChartTooltipProps } from '@mantine/charts'
import { formatter } from '~/utils/utils'

interface Tooltip extends ChartTooltipProps {
  name: string
}

export default function ChartTooltip({ payload, label, name }: Tooltip) {
  if (!payload) return null
  if (!label) return null

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(label.toString()))

  return (
    <Box className={classes.toolTip}>
      <Title size='h4'>{formattedDate}</Title>
      <Group>
        <ColorSwatch className={classes.swatch} color={payload[0]?.color} />
        <Text>
          {name}: {formatter('AUD', payload[0]?.value)}
        </Text>
      </Group>
    </Box>
  )
}
