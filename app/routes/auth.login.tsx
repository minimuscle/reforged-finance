import { LoaderFunctionArgs } from "@remix-run/node"
import { getRedirectResult } from "firebase/auth"
import { auth } from "~/utils/auth"
import { createUserSession } from "~/utils/session.server"

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const token = url.searchParams.get("token")
}
