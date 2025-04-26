import { notifications } from "@mantine/notifications"
import { QueryClient } from "@tanstack/react-query"
import { errorNotification, successNotification } from "./notifications"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        notifications.show(errorNotification(err))
      },
      onSuccess: (response: unknown) => {
        const message = (response as { message?: string })?.message
        if (message) {
          notifications.show(successNotification(message))
        }
      },
    },
  },
})
