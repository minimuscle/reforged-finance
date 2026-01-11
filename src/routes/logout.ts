import { createFileRoute, redirect } from '@tanstack/react-router'
import { API } from 'api/index'

/******************************************************
 *   ROUTE START
 ******************************************************/
export const Route = createFileRoute('/logout')({
  loader: async () => {
    await API.auth.logout()
    throw redirect({ to: '/login' })
  },
})
