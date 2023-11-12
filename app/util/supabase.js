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

export const supabaseSignIn = async () => {
  console.log(process.env.DATABASE_URL, process.env.DB_KEY)
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/auth/callback`,
    },
  })

  if (error) {
    throw error
  }
  console.log(data)
}
