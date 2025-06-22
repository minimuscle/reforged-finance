import { loginUser } from "src/queries/mutations/loginUser"
import { signupUser } from "src/queries/mutations/signupUser"
import { getCash } from "src/queries/queries/getCash"
import { getHistory } from "src/queries/queries/getHistory"
import { getProfile } from "src/queries/queries/getProfile"
import { getUser } from "src/queries/queries/getUser"

export const query = {
  user: Object.assign(getUser, {
    cash: getCash,
    profile: getProfile,
    history: getHistory,
  }),
  auth: {
    login: loginUser,
    signup: signupUser,
  },
}
