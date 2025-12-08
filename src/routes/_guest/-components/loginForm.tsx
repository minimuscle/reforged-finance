import { useAppForm } from 'components/Form'
import { Form } from 'components/Form/form'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const LoginForm = () => {
  const form = useAppForm({
    onSubmit: ({ value }) => {
      console.log('Form submitted with values:', value)
    },
  })

  /***** RENDER *****/
  return (
    <Form form={form}>
      <form.AppField name="email" children={(field) => <field.TextInput label="Email Address" />} />
      <form.AppField name="password" children={(field) => <field.TextInput label="Password" />} />
      <button type="submit">Login</button>
    </Form>
  )
}
