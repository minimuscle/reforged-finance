import { auth } from "api/auth"
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
  onSuccess: () => {},
})
