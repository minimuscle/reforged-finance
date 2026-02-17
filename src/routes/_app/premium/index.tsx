import { createFileRoute } from '@tanstack/react-router'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_app/premium/')({
  component: RouteComponent,
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return <div>Hello "/_app/premium/"!</div>
}
