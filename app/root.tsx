import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react"
import { isSessionValid } from "./utils/session.server"
import { LoaderFunctionArgs } from "@remix-run/node"
import { db } from "./utils/db.server"
import { User } from "./utils/types"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { decodedClaims } = await isSessionValid(request)
  if (!decodedClaims) {
    return null
  }
  console.log(decodedClaims)
  const user = await db.collection("users").doc(decodedClaims.uid).get()
  const userData = user.data()
  if (!userData) {
    throw new Error("User not found")
  }
  return userData
}

//TODO: This needs to be a custom design for the error boundary
export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}

export default function App() {
  const user = useLoaderData() as User
  return <Outlet context={user} />
}
