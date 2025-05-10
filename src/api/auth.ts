import { Database, Tables } from "utils/types/database.types"
import { API, supabase } from "../utils/query/supabase"

export const auth = {
  GET: {
    session: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user ?? false
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
    test: async (attributes: Tables<"test">["colname"]) => {
      return await supabase.from("test").insert({ colname: attributes })
    },
  },
}
