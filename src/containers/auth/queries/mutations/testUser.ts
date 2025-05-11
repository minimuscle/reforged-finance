import { notifications } from "@mantine/notifications"
import { auth } from "../../../../api/auth"
import { createMutation } from "utils/query/createMutation"
import {
  autosaveFailNotification,
  autosaveLoadingNotification,
  autosaveSuccessNotification,
  pushNotification,
  successNotification,
  updateNotification,
} from "utils/notifications"

export const testUser = createMutation({
  mutationFn: auth.POST.test,
  onMutate: () => {
    const notification = pushNotification(autosaveLoadingNotification())
    return { notificationId: notification }
  },
  onSuccess(_, __, context) {
    updateNotification(context.notificationId, autosaveSuccessNotification())
  },
  onError: (_, __, context) => {
    !!context && updateNotification(context.notificationId, autosaveFailNotification())
  },
})
