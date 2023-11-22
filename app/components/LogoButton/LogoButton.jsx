import { Button, Group, Image, Text, Title } from "@mantine/core"
import { useLocation, useNavigate } from "@remix-run/react"
import Logo from "~/images/Logo.jpg"
import "./LogoButton.css"

function LogoButton() {
  const navigate = useNavigate()
  const path = useLocation()
  return (
    <>
      <Button
        variant='transparent'
        // Check if the user is already on the dashboard as to not screw up the history
        onClick={() =>
          path.pathname.toLowerCase() !== "/" ? navigate("/") : ""
        }
      >
        <Group>
          <Image
            w='40px'
            src={Logo}
          />
          <Title
            size='h2'
            className='logoTitle'
          >
            Wealth Forge
          </Title>
        </Group>
      </Button>
    </>
  )
}

export default LogoButton
