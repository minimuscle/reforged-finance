import { account } from "api/account"
import { queryKeys } from "src/queries/queries/queryKeys"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getUser = createQuery(() => ({
  queryKey: queryKeys.user(),
  queryFn: account.GET.user,
}))
