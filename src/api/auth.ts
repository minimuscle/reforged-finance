import { API, supabase } from "../utils/query/supabase"

export const auth = {
  GET: {
    session: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user ?? false
    },
    test: (): { example: { layer2: string } } => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ example: { layer2: "found_me" } })
        }, 6000)
      }) as any
    },
  },
  POST: {
    signup: (email: string, password: string) => {
      return API(supabase.auth.signUp({ email, password }))
    },

    login: (email: string, password: string) => {
      return API(supabase.auth.signInWithPassword({ email, password }))
    },
    logout: () => {
      return supabase.auth.signOut()
    },
  },
}
