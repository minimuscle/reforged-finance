import { api, supabase } from "utils/query/supabase"
import { DB } from "utils/types"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
export namespace account {}

/******************************************************************
 *  API START
 ******************************************************************/
export const account = {
  GET: {
    user: async () => {
      return await supabase.auth.getUser()
    },
    profile: async () => {
      return await api.get("profile").single()
    },
  },
  POST: {
    profile: async (attributes: DB.Row<"profile">) => {
      const res = await api.post({ from: "profile", data: attributes, type: "update" })
      console.log(res)
      return res
    },
    autosaveTest: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("")
        }, 1000)
      })
      //
    },
  },
}
