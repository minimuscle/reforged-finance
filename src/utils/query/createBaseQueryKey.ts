import { account } from "api/account"
import { auth } from "containers/auth/queries"
import { queryClient } from "utils/query/queryClient"

export const createBaseQueryKey = (key: Array<string>): typeof key => {
  const test = queryClient.fetchQuery({ queryKey: ["user"] })
  return key
}
