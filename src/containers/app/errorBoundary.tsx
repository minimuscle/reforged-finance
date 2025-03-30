import { IconMoodConfuzedFilled } from "@tabler/icons-react"
import { useNavigate } from "@tanstack/react-router"
import styles from "./_app.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function ErrorBoundary() {
  const navigate = useNavigate()
  /*********  RENDER  *********/
  return (
    <div className={styles.errorBoundary}>
      <IconMoodConfuzedFilled size={150} />
      <h1>Oops!</h1>
      <h2>Something went wrong!</h2>
      <p>Contact Support if this continues to happen.</p>
      <button onClick={() => navigate({ to: ".", reloadDocument: true })}>Reload</button>
    </div>
  )
}
