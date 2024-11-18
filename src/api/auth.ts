import { API, supabase } from "../utils/supabase"

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
  },
}
