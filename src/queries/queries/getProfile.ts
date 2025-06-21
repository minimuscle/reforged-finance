import { account } from "api/account"
import { queryKeys } from "src/queries/queries/queryKeys"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getProfile = createQuery(() => ({
  queryKey: queryKeys.user.profile(),
  queryFn: account.GET.profile,
}))
