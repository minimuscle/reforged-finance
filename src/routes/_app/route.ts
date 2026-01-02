import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  beforeLoad: async ({ context: { supabase } }) => {
    const { data } = await supabase.auth.getUser()
    if (!data) throw redirect({ to: '/' })
  },
})
