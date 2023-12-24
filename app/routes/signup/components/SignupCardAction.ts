export type password =
  | {
      minLength: boolean
      containsNumber: boolean
      containsLowerCase: boolean
      containsUpperCase: boolean
      containsSpecialCharacter: boolean
    }
  | string

export default function SignupCardAction(formData: FormData) {
  const email = String(formData.get("email"))
  const password = String(formData.get("password"))
  const confirmPassword = String(formData.get("confirmPassword"))
  const errors: {
    email?: string
    password?: password
    confirmPassword?: string
  } = {}

  if (!email) errors.email = "Email is required"
  if (!password) {
    errors.password = "Password is required"
  } else {
    const passwordLength = password.length
    const containsNumber = /\d/.test(password)
    const containsLowerCase = /[a-z]/.test(password)
    const containsUpperCase = /[A-Z]/.test(password)
    const containsSpecialCharacter = /[^a-zA-Z0-9]/.test(password)

    const errorsList = {
      minLength: passwordLength >= 8,
      containsNumber,
      containsLowerCase,
      containsUpperCase,
      containsSpecialCharacter,
    }

    if (Object.values(errorsList).includes(false)) {
      errors.password = errorsList
    }
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Password confirmation is required"
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords does not match"
  }

  return Object.keys(errors).length ? errors : null
}
