import { LoaderFunctionArgs } from "@remix-run/node"
import { API } from "~/api/users.server"

export async function action({ request }: LoaderFunctionArgs) {
  const { data, error } = await API.users.GET.user(request)
  return { data }
}
