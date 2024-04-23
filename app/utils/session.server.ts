import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { getSessionToken } from "./db.server";

const storage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
  }
})

export async function createUserSession(idToken: string) {
  console.log('we got here')
  const token = await getSessionToken(idToken)
  const session = await storage.getSession();
  session.set("token", token);

  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}