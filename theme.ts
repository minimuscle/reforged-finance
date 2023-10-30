"use client"

import { createTheme } from "@mantine/core"
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({ subsets: ["latin"] })

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: roboto.style.fontFamily,
  headings: {
    fontFamily: roboto.style.fontFamily,
  },
})
