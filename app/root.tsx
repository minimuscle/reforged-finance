import { cssBundleHref } from "@remix-run/css-bundle"
import { type ActionFunctionArgs, type LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "@mantine/core/styles.css"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import "@mantine/charts/styles.css"
import { collapsedCookie } from "./utils/cookies.server"

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
        },
      ]
    : []),
]

export const action = async ({ request }: ActionFunctionArgs) => {
  //if update cookie is set, update the cookie
  const formData = await request.formData()
  const intent = formData.get("intent")
  switch (intent) {
    case "updateCollapsed":
      //Create remix cookie and set it to the value of the form data
      // eslint-disable-next-line no-case-declarations

      return new Response("Cookie updated", {
        headers: {
          "Set-Cookie": await collapsedCookie.serialize(
            formData.get("collapsed") as string
          ),
        },
      })
  }
  return null
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  )
}
