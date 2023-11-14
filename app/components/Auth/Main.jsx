import { Button, Space, Stack, Text, Title } from "@mantine/core"

function Main() {
  return (
    <>
      <Title
        align='center'
        order={4}
      >
        Connect to Your Database
      </Title>
      <Text align='center'>
        Connect to your database below in order to use this program
      </Text>
      <Space h='xl' />
      <Stack>
        <Button
          fullWidth
          onClick={() => {
            //This is temp and should be removed
            login()
          }}
        >
          Login to Connect Database
        </Button>
        <Button
          color='yellow'
          fullWidth
        >
          No Database Yet? Create One
        </Button>
      </Stack>
    </>
  )
}

export default Main
