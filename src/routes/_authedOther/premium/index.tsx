import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../../components/Button'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/_authedOther/premium/')({
  component: RouteComponent,
})

/******************************************************
 *   ROUTE COMPONENT START
 ******************************************************/
function RouteComponent() {
  /***** RENDER *****/
  return (
    <div>
      <Button.Link to="/">Close</Button.Link>
      Hello "/_app/premium/"!
    </div>
  )
}
