import { IconMoodConfuzedFilled } from "@tabler/icons-react"
import { useNavigate } from "@tanstack/react-router"
import styles from "./_errorBoundary.module.css"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
/**
 * Note that this error boundary only uses 1 component for the icon, the rest is kept plain html
 * This is to ensure if any component breaks this error can still be loaded.
 *
 * If this error can't load the issue is probably with either Tabler Icons or Tanstack Router
 *
 */
export function ErrorBoundary() {
  /*****  HOOKS  *****/
  const navigate = useNavigate()

  /*****  RENDER  *****/
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
