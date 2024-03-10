import { cssBundleHref } from '@remix-run/css-bundle'
import { type ActionFunctionArgs, type LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from './theme'
import '@mantine/charts/styles.css'
import { collapsedCookie } from './utils/cookies.server'
import './global.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export const action = async ({ request }: ActionFunctionArgs) => {
  //if update cookie is set, update the cookie
  const formData = await request.formData()
  const intent = formData.get('intent')
  switch (intent) {
    case 'updateCollapsed':
      //Create remix cookie and set it to the value of the form data
      // eslint-disable-next-line no-case-declarations

      return new Response('Cookie updated', {
        headers: {
          'Set-Cookie': await collapsedCookie.serialize(
            formData.get('collapsed') as string
          ),
        },
      })
  }
  return null
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={'auto'}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </MantineProvider>
      </body>
    </html>
  )
}
