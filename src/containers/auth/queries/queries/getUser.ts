import { account } from "api/account"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getUser = createQuery(() => ({
  queryKey: ["user"],
  queryFn: account.GET.user,
}))
