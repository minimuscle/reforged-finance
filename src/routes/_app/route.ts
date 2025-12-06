import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  beforeLoad: () => {
    if (true) {
      throw redirect({ to: '/login' })
    }
  },
})
