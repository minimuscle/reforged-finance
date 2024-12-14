import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../api/auth"
import { useNavigate } from "@tanstack/react-router"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface LoginUserInput {
  email: string
  password: string
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
function _useMutation() {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ email, password }: LoginUserInput) => {
      return auth.POST.login(email, password)
    },
    onSuccess: () => {
      return navigate({ to: "/" })
    },
  })
}

/******************************************************************
 *  COMPONENT END                                                 *
 ******************************************************************/
export const loginUser = Object.freeze({
  useMutation: _useMutation,
})
