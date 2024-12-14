import { useNavigate } from "@tanstack/react-router"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function ErrorBoundary() {
  const navigate = useNavigate()
  /*********  RENDER  *********/
  return (
    <div className="ErrorBoundary">
      <h1>Oops!</h1>
      <h2>Something went wrong!</h2>
      <p>Contact Support if this continues to happen.</p>
      <button onClick={() => navigate({ to: ".", reloadDocument: true })}>Reload</button>
    </div>
  )
}
