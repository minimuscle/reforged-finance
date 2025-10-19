import { createServerFn } from "@tanstack/react-start"
import { getSupabaseServerClient } from "utils/supabase/serverClient"

export const getUser = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = getSupabaseServerClient()
  const { data, error: _error } = await supabase.auth.getUser()
  if (!data.user?.email) return "no email" + Math.random().toFixed(2).toString()
  return {
    data,
  }
})
