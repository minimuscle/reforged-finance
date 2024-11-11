import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is a paragraph</p>
      <p>This is in Inter</p>
      <p>1234567890</p>
      <p>Test & Test</p>
    </>
  )
}
