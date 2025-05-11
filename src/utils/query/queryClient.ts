import { QueryClient } from "@tanstack/react-query"
import { errorNotification, pushNotification, successNotification } from "../notifications"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        pushNotification(errorNotification(err))
      },
      onSuccess: (response) => {
        const message =
          (response as { message?: string })?.message ??
          (response as { statusText?: string })?.statusText ??
          "Successfully Completed"
        pushNotification(successNotification(message))
      },
    },
  },
})
