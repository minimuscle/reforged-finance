import type { MetaFunction } from "@remix-run/node"
import AssetDistribution from "~/components/widgets/charts/AssetDistribution"
import Tile from "~/components/Tile"

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Wealthfire" }]
}

export default function Index() {
  return (
    <>
      <Tile rows={2} cols={2}>
        <AssetDistribution />
      </Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
    </>
  )
}
