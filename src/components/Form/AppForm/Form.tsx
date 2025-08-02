import { ComponentType, PropsWithChildren } from "react"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type Form = React.FC<
  PropsWithChildren & {
    form: {
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
      AppForm: ComponentType<PropsWithChildren> //FIXME: Types here are wrong but I cbf fixing them
    }
  }
>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const Form: Form = ({ form, children, ...props }) => {
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit(e)
      }}
    >
      <form.AppForm>{children}</form.AppForm>
    </form>
  )
}
