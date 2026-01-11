import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import 'utils/css/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { supabase } from 'utils/supabase'

const queryClient = new QueryClient()

//Create Router Instance
const router = createRouter({
  context: {
    queryClient,
    supabase,
  },
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
