import { loginUser } from "./mutations/loginUser"
import { signupUser } from "./mutations/signupUser"

export const auth = Object.freeze({
  signupUser,
  loginUser,
})
