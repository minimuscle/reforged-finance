import { useFieldContext } from 'components/Form'
import styles from './Input.module.css'
import { useStore } from '@tanstack/react-form'

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
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...props}
      />
      <p className={styles.errorMessage}>{errors.join(', ')}</p>
    </div>
  )
}
