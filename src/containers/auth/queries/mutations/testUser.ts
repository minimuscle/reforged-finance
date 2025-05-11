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
  onSuccess: () => console.log("createMutation success"),
})
