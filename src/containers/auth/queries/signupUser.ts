import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../api/auth"
import { notifications } from "@mantine/notifications"
import { successNotification } from "../../../utils/notifications"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface SignupUserInput {
  email: string
  password: string
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
function _useMutation() {
  return useMutation({
    mutationFn: ({ email, password }: SignupUserInput) => {
      return auth.POST.signup(email, password)
    },
    onSuccess: () => {
      notifications.show(successNotification("Account created successfully."))
    },
  })
}

/******************************************************************
 *  COMPONENT END                                                 *
 ******************************************************************/
export const signupUser = Object.freeze({
  useMutation: _useMutation,
})
