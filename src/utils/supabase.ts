import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY!)

async function _API(fn: Promise<any>) {
  const { data, error } = await fn

  if (error) throw error
  if (!data) throw new Error("Something unexpected happened. Please contact support")

  return data
}

export const API = Object.assign(_API)
