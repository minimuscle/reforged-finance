import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/cash')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /cash!'
}
