import type { useAppForm } from 'components/Form'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type Form = React.FC<{
  children: React.ReactNode
  form: ReturnType<typeof useAppForm>
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Form: Form = ({ children, form }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      {children}
    </form>
  )
}
