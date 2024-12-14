import { notifications } from "@mantine/notifications"
import { QueryClient } from "@tanstack/react-query"
import { errorNotification, infoNotification, successNotification, warningNotification } from "./notifications"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        notifications.show(errorNotification(err))
      },
      onSuccess: (response: any) => {
        if (response?.message) {
          notifications.show(successNotification(response.message))
        }
      },
    },
  },
})
