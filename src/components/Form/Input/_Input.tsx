import clsx from "clsx"
import type { Input } from "components/Form/types"
import styles from "./_Input.module.css"
import { IconEye, IconEyeClosed } from "@tabler/icons-react"
import { useBoolean } from "utils/hooks/useBoolean"
import { Input as InputComponent } from "@mantine/core"
import type { InputProps } from "@mantine/core"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Input({ label, placeholder, type, className, ...rest }: Input.InputProps & InputProps) {
  /**********  HOOKS  **********/
  const { value: passwordShown, toggle: toggleShowPassword } = useBoolean(false)

  /*********  RENDER  *********/
  return (
    <div className={clsx(styles.input, { [styles.password]: Boolean(type === "password") }, className)}>
      <label className={styles.label}>{label}</label>
      <InputComponent {...rest} placeholder={placeholder} type={passwordShown ? "text" : type} />
      {type === "password" &&
        (passwordShown ? (
          <IconEyeClosed className={styles.icon} onClick={toggleShowPassword} />
        ) : (
          <IconEye className={styles.icon} onClick={toggleShowPassword} />
        ))}
    </div>
  )
}
