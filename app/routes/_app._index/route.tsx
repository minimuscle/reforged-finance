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
      <Tile rows={1} cols={3}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
        </ul>
      </Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
    </>
  )
}
