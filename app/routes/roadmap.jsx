import {
  Accordion,
  Badge,
  Flex,
  Group,
  List,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core"
import "../styles/styles.css"

export const meta = () => {
  return [{ title: "Roadmap | WealthForge" }]
}

export default function Roadmap() {
  return (
    <>
      <Stack align="center" mb="50px">
        <Title>Roadmap</Title>
        <Text>
          Track Progress of this application by following the major version
          changes
        </Text>
      </Stack>
      <Flex justify="center" gap="xl" wrap="wrap">
        <Accordion miw="500px" variant="separated" defaultValue="001">
          <Accordion.Item key={0} value={"001"}>
            <Accordion.Control>
              <Group>
                <Text>Version 0.1.0</Text>
                <Badge size="sm" color="blue">
                  In-Development
                </Badge>
              </Group>
              <Text size="sm" c="dimmed" fw={400}>
                The first minor release, not available to the public
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Timeline active={2} bulletSize={30} mt="25px">
                <Timeline.Item title="Version 0.0.1">
                  <Text c="dimmed" size="sm">
                    Basic Functionality of the application
                  </Text>
                  <Badge color="green" size="xs" mt={4}>
                    Stable
                  </Badge>
                </Timeline.Item>

                <Timeline.Item title="Version 0.0.2">
                  <Text c="dimmed" size="sm">
                    Continual development of the application
                  </Text>
                  <List c="dimmed" size="sm" mt={-25}>
                    <List.Item>Managed Sidebar with enabled actions</List.Item>
                    <List.Item>Created Logo</List.Item>
                    <List.Item>Linked Sidebar items and Premium</List.Item>
                    <List.Item>Developed Premium page with pricing</List.Item>
                  </List>
                  <Badge color="green" size="xs" mt={4}>
                    Stable
                  </Badge>
                </Timeline.Item>
                <Timeline.Item title="Version 0.0.3">
                  <Text c="dimmed" size="sm">
                    Setup page for those who are new to the application. <br />
                    Included profile page creation of the database
                  </Text>
                  <Badge color="green" size="xs" mt={4}>
                    Stable
                  </Badge>
                </Timeline.Item>
                <Timeline.Item lineVariant="dashed" title="Version 0.0.4">
                  <Text c="dimmed" size="sm">
                    Cash page and ability to add cash / bank accounts that save
                    <br />
                    to the history and apply to the dashboard
                  </Text>
                  <Badge color="blue" size="xs" mt={4}>
                    In-Development
                  </Badge>
                </Timeline.Item>
                <Timeline.Item title="Version 0.1.0">
                  <Text c="dimmed" size="sm">
                    <List c="dimmed" size="sm" mt={-25}>
                      <List.Item>
                        Completed History, Cash, Dashboard and User accounts
                      </List.Item>
                      <List.Item>
                        User Sign Up / Login and Logout functionality fully
                        supported
                      </List.Item>
                      <List.Item>And More</List.Item>
                    </List>
                  </Text>
                  <Badge color="yellow" size="xs" mt={4}>
                    Upcoming
                  </Badge>
                </Timeline.Item>
              </Timeline>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={1} value={"010"}>
            <Accordion.Control>
              <Group>
                <Text>Version 0.2.0</Text>
                <Badge size="sm" color="yellow">
                  Upcoming
                </Badge>
              </Group>
              <Text size="sm" c="dimmed" fw={400}>
                The second minor release, not available to the public
              </Text>
            </Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item key={2} value={"100"}>
            <Accordion.Control>
              <Group>
                <Text>Version 1.0.0</Text>
                <Badge size="sm" color="yellow">
                  Upcoming
                </Badge>
              </Group>
              <Text size="sm" c="dimmed" fw={400}>
                First Major release of the application, available to the public
              </Text>
            </Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </>
  )
}
