import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_guest/signup"!</div>
}
