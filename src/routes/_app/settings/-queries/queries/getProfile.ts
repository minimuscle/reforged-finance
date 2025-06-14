import { account } from "api/account"
import { settingsQueryKey } from "routes/_app/settings/-queries/queryKeys"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  QUERY START
 ******************************************************************/
export const getProfile = createQuery(() => ({
  queryKey: settingsQueryKey.profile(),
  queryFn: account.GET.profile,
}))
