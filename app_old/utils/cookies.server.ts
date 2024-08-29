import { createCookie } from "@remix-run/node"

export const collapsedCookie = createCookie("collapsed", {
  maxAge: 604_800, // one week
})

export const authCookie = createCookie("auth", {
  httpOnly: true,
  secure: true,
  secrets: [process.env.COOKIE_SECRET!],
})