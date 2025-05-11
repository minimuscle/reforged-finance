import { Database, Tables } from "utils/types/database.types"
import { api, supabase } from "../utils/query/supabase"
import { DB } from "utils/types"

export const auth = {
  GET: {
    session: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user ?? false
    },
  },
  POST: {
    signup: (email: string, password: string) => {
      return //API(supabase.auth.signUp({ email, password }))
    },

    login: (email: string, password: string) => {
      return //API(supabase.auth.signInWithPassword({ email, password }))
    },
    logout: () => {
      return supabase.auth.signOut()
    },
    test: (attributes: DB.Insert<"test">) => {
      return Math.random() > 0.5
        ? new Promise((_, reject) => {
            setTimeout(() => {
              reject(new Error("Simulated failure"))
            }, 1000)
          })
        : new Promise((resolve) => {
            setTimeout(() => {
              resolve("")
            }, 1000)
          })
      //api.post({ from: "test", type: "insert", data: attributes })
    },
  },
}
