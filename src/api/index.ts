import { supabase } from 'utils/supabase'
/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
export declare namespace API {
  namespace auth {
    namespace signup {
      type Params = {
        email: string
        password: string
      }
    }
  }
}

/**********************************************************************************************************
 *   API START
 **********************************************************************************************************/
export const API = {
  auth: {
    signup: async ({ email, password }: API.auth.signup.Params) => {
      return await supabase.auth.signUp({
        email,
        password,
      })
    },
  },
}
