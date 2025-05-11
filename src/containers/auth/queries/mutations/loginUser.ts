import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../../api/auth"
import { useNavigate } from "@tanstack/react-router"
import { createMutation } from "utils/query/createMutation"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface Params {
  email: string
  password: string
}

/******************************************************************
 * MUTATION START
 ******************************************************************/
export const loginUser = createMutation({
  mutationFn: (attributes: Params) => auth.POST.login(attributes),
  onSuccess: () => {
    const navigate = useNavigate()
    return navigate({
      to: "/",
    })
  },
})
