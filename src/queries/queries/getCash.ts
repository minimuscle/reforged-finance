import { account } from "api/account"
import { queryKeys } from "src/queries/queries/queryKeys"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getCash = createQuery(() => ({
  queryKey: queryKeys.user.cash(),
  queryFn: account.GET.cash.accounts,
}))
