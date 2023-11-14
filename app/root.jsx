import { cssBundleHref } from "@remix-run/css-bundle"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react"
import { redirect } from "@remix-run/node"
import "@mantine/core/styles.css"
import { ColorSchemeScript } from "@mantine/core"
import "./global.css"
import { SupabaseContext } from "./contexts/SupabaseContext"
import {
  createBrowserClient,
  createServerClient,
  parse,
  serialize,
} from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import { useEffect } from "react"

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const loader = async ({ request }) => {
  const cookies = parse(request.headers.get("Cookie") ?? "")
  const headers = new Headers()

  const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    DB_KEY: process.env.DB_KEY,
  }

  return { env }
}

export default function App() {
  const { env } = useLoaderData()
  const [supabase] = useState(() =>
    createBrowserClient(env.DATABASE_URL, env.DB_KEY)
  )

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SupabaseContext.Provider value={supabase}>
          <Outlet />
        </SupabaseContext.Provider>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}
