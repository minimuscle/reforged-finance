import { auth } from "api/auth"
import { createQuery } from "utils/query/createQuery"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export const getUserData = createQuery((dfs: string) => ({
  queryKey: ["f", dfs],
  queryFn: auth.GET.test,
  select: (data) => data.example.layer2,
}))
