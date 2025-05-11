import { api, supabase } from "../utils/query/supabase"
import { DB } from "utils/types"

export namespace auth {
  export namespace POST {
    export interface authParams {
      email: string
      password: string
    }
  }
}

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

    login: async (attributes: auth.POST.authParams) => {
      return await supabase.auth.signInWithPassword(attributes)
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
              resolve(api.post({ from: "test", type: "insert", data: attributes }))
            }, 1000)
          })
      //
    },
  },
}
