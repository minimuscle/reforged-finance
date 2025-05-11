import { notifications } from "@mantine/notifications"
import { QueryClient } from "@tanstack/react-query"
import { errorNotification, successNotification, warningNotification } from "../notifications"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        console.log("error: ", err)
        notifications.show(errorNotification(err))
      },
      onSuccess: (response: unknown) => {
        console.log(response)
        const message = (response as { message?: string })?.message
        if (message) {
          notifications.show(successNotification(message))
        } else if (response.statusText) {
          notifications.show(errorNotification(new Error()))
        }
      },
    },
  },
})
