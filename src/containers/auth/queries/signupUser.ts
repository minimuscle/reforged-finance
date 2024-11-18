import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../api/auth"
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
    onError: (error) => {
      console.log("ERROR")
      console.error(error)
    },
    onSuccess: (data) => {
      console.log("SUCCESS")
      console.log(data)
    },
  })
}

/******************************************************************
 *  COMPONENT END                                                 *
 ******************************************************************/
export const signupUser = Object.freeze({
  useMutation: _useMutation,
})
