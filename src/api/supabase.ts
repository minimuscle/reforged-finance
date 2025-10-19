import { queryOptions } from "@tanstack/react-query"
import { getUser } from "api/serverFunctions"

export const getUserQueryOptions = queryOptions({
  queryKey: ["user"],
  queryFn: () => getUser(),
})
