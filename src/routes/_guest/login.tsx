import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_guest/login"!
      <Link to="/">Click here</Link>
    </div>
  )
}
