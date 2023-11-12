import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.DATABASE_URL, process.env.DB_KEY)

export const supabaseGetSummary = async () => {
  const { data, error } = await supabase
    .from("summary")
    .select("*")
    .order("id", { ascending: false })
    .limit(1)

  if (error) {
    throw error
  }

  return data
}
