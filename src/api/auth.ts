import { supabase } from "../utils/supabase"

export const auth = {
  GET: {
    session: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user ?? false
    },
  },
  POST: {
    signup: async (email: string, password: string) => {
      const test = await supabase.auth.signUp({ email, password })
      if (test.error) {
        throw new Error(test.error.message)
      }
      return test
    },
  },
}
