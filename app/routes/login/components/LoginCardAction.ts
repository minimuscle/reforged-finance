export default function LoginCardAction(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")
  const errors: { email?: string; password?: string } = {}

  if (!email) errors.email = "Email is required"
  if (!password) errors.password = "Password is required"

  return errors
}
