import { useFieldContext, useFormContext } from 'components/Form'
import styles from './Input.module.css'

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type TextInput = React.FC<
  {
    label?: string
  } & React.InputHTMLAttributes<HTMLInputElement>
>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const TextInput: TextInput = ({ label, ...props }) => {
  const field = useFieldContext<string>()
  const {
    state: { submissionAttempts },
  } = useFormContext()

  /***** RENDER *****/
  return (
    <div className={styles.container}>
      <label htmlFor={field.name} className={styles.label}>
        {label}
      </label>
      <input
        id={field.name}
        className={styles.input}
        type="text"
        value={field.state.value ?? ''}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...props}
      />

      {field.state.meta.errors && submissionAttempts > 0 && <p className={styles.errorMessage}>{field.state.meta.errors[0]?.message}</p>}
    </div>
  )
}
