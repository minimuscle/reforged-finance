import { useForm } from "react-hook-form"
import "./_login.scss"
import { Link } from "@tanstack/react-router"

export function Login() {
  const methods = useForm()
  return (
    <div className="login">
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input {...methods.register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...methods.register("password")} />
        </div>
        <p>
          Not registered? <Link to="/signup">Login here</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
