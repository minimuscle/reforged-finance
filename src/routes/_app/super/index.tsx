import { createFileRoute } from '@tanstack/react-router'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_app/super/')({
  component: RouteComponent,
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return <div>Hello "/_app/super/"!</div>
}
