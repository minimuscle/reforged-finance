import { auth } from "../../../../api/auth"
import { createMutation } from "utils/query/createMutation"

/******************************************************************
 *  MUTATION START                                               *
 ******************************************************************/
export const testUser = createMutation({
  mutationFn: auth.POST.test,
})
