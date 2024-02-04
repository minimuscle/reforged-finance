import { createCookie } from "@remix-run/node"

export const collapsedCookie = createCookie("collapsed", {
  maxAge: 604_800, // one week
})
