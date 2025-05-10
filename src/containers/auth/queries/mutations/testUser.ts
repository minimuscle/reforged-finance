import { notifications } from "@mantine/notifications"
import { auth } from "../../../../api/auth"
import { createMutation } from "utils/query/createMutation"
import { successNotification } from "utils/notifications"

export const testUser = createMutation({
  mutationFn: auth.POST.test,
  onSuccess: () => {
    console.log("NEW MUTATION WORKING")
    notifications.show(successNotification("success!"))
  },
})
