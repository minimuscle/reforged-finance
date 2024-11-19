import { useForm } from "react-hook-form"
import "./_login.scss"
import { Link } from "@tanstack/react-router"
import { queries } from "../../../../utils/queryTree"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Login() {
  /**********  HOOKS  **********/
  const methods = useForm()
  const { mutate: loginUser } = queries.auth.loginUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: any) {
    loginUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="login">
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
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
