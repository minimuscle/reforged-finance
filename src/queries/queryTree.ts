import { loginUser } from "src/queries/mutations/loginUser"
import { signupUser } from "src/queries/mutations/signupUser"
import { getCash } from "src/queries/queries/getCash"
import { getProfile } from "src/queries/queries/getProfile"
import { getUser } from "src/queries/queries/getUser"

export const query = {
  user: Object.assign(getUser, {
    cash: getCash,
    profile: getProfile,
  }),
  auth: {
    login: loginUser,
    signup: signupUser,
  },
}
