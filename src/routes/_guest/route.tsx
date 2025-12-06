import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Reforged Finance</h1>
      <h3>Personal Wealth Tracker</h3>
    </div>
  )
}
