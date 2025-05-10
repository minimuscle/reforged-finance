import { createClient } from "@supabase/supabase-js"
import { Database } from "utils/types/database.types"

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
)

//FIXME: need to properly define the supabase type here tbh, this is just a stopgap
export async function API<T>(fn: Promise<{ data: T; error: Error | null; status: number }>) {
  const { data, error, status } = await fn
  if (error) throw error
  if (!data && status > 399) throw new Error("Something unexpected happened. Please contact support")

  return data
}
