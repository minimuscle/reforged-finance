import { Badge, Paper, Stack, Text, Title } from "@mantine/core"

const DebtsList = () => {
  return (
    <Paper shadow="xl" p="md" withBorder h="100%" miw="500px">
      <Stack align="center" gap="1">
        <Title>Liabilities</Title>
        <Text>Total Assets</Text>
        <Badge p={"20"} size="xl" radius="sm" variant="light">
          <Title order={2}></Title>
        </Badge>
      </Stack>
    </Paper>
  )
}

export default DebtsList
