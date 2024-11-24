import { useForm } from "react-hook-form"
import "./_signup.scss"
import { Link } from "@tanstack/react-router"
import { auth } from "../../queries"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Signup() {
  /**********  HOOKS  **********/
  const methods = useForm()
  const { mutate: signupUser } = auth.signupUser.useMutation()

  /********  FUNCTIONS  ********/
  function handleSubmit(data: any) {
    signupUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="signup">
      <div>
        <h1>Sign Up</h1>
      </div>

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
          Already registered? <Link to="/login">Login here</Link>
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
