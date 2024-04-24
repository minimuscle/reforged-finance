import { LoaderFunctionArgs } from "@remix-run/node"
import { destroyUserSession } from "~/utils/session.server"

export async function loader({ request }: LoaderFunctionArgs) {
  return destroyUserSession(request)
}
