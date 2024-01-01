import type { MetaFunction } from "@remix-run/node"
import AssetDistribution from "~/components/widgets/charts/AssetDistribution"
import Tile from "~/components/Tile"
import { useRouteError } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Wealthfire" }]
}

export const ErrorBoundary = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{error.status}</p>
      <p>{error.message}</p>
    </div>
  )
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
