import { account } from "api/account"
import { queryKeys } from "src/queries/queries/queryKeys"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getHistory = createQuery(() => ({
  queryKey: queryKeys.user.history(),
  queryFn: account.GET.history,
}))
