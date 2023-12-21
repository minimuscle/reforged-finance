import { Button, Group, Image, Title } from "@mantine/core"
import { Link } from "@remix-run/react"
import Logo from "~/images/Logo.jpg"
import "./LogoButton.css"

function LogoButton() {
  return (
    <Link to="/">
      <Button h="100%" variant="transparent">
        <Group>
          <Image w="40px" src={Logo} />
          <Title size="h2" className="logoTitle">
            WealthFire (Alpha)
          </Title>
        </Group>
      </Button>
    </Link>
  )
}

export default LogoButton
