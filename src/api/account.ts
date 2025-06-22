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
      return new Promise((resolve) => {
        setTimeout(async () => {
          resolve(await supabase.auth.getUser())
        }, 10000)
      })
    },
    profile: async () => {
      return await api.get("profile").single()
    },
    cash: {
      accounts: async () => {
        return await api.get("cash").select("*")
      },
    },
    history: async () => {
      return await api.get("history").select("*").order("date", { ascending: true })
    },
  },
  POST: {
    profile: async (attributes: DB.Row<"profile">) => {
      const res = await api.post({ from: "profile", data: attributes, type: "update" })

      return res
    },
    autosaveTest: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("")
        }, 1000)
      })
    },
  },
}
