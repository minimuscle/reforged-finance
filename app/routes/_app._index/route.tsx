import { Heading, Text } from "@radix-ui/themes"
import type { MetaFunction } from "@remix-run/node"
import Tile from "~/components/Tile"

export const meta: MetaFunction = () => {
  return [
    { title: "Wealthfire" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <>
      <Tile>
        <Heading>Heading</Heading>
        <Text>Subheading</Text>
        <Text>Scrollable Options:</Text>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
    </>
  )
}
