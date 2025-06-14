import { testUser } from "containers/auth/queries/mutations/testUser"
import { loginUser } from "./mutations/loginUser"
import { signupUser } from "./mutations/signupUser"
import { getUser } from "containers/auth/queries/queries/getUser"

export const auth = Object.freeze({
  signupUser,
  loginUser,
  getUser,
})
