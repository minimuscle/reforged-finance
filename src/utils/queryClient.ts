import { notifications } from "@mantine/notifications"
import { QueryClient } from "@tanstack/react-query"
import { errorNotification } from "./notifications"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        notifications.show(errorNotification(err))
      },
    },
  },
})
