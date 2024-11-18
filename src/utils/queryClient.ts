import { notifications } from "@mantine/notifications"
import { QueryClient } from "@tanstack/react-query"
import { RiCloseLine } from "@remixicon/react"
import { Notification } from "@mantine/core"
import { ReactNode } from "react"
import { Icon } from "../components/Icons"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        notifications.show({
          title: "Error",
          message: err.message,
          color: "error",
          icon: Icon.Close(),
        })
      },
      onSuccess: (data, variables, context) => {
        console.log("Mutation success", data, variables, context)
      },
    },
  },
})
