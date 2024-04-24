import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { getSessionToken, verifySessionCookie } from "./db.server";

const storage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
  }
})

export async function createUserSession(idToken: string) {
  const token = await getSessionToken(idToken)
  const session = await storage.getSession();
  session.set("token", token);

  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export const isSessionValid = async (request: any) => {
  const session = await storage.getSession(request.headers.get("cookie"));
  try {
    const decodedClaims = await verifySessionCookie(session.get("token"))
    return { success: true, decodedClaims };
  } catch (error: Error | any) {
    // Session cookie is unavailable or invalid. Force user to login.
    // return { error: error?.message };
    throw redirect("/login", {
      statusText: error?.message,
    });
  }
};