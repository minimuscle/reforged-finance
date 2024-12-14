import clsx from "clsx"
import type { Input } from "components/Form/types"
import "./_Input.css"
import { IconEye, IconEyeClosed } from "@tabler/icons-react"
import { useBoolean } from "utils/hooks/useBoolean"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Input({ label, placeholder, type, className, ...rest }: Input.InputProps) {
  const { value: passwordShown, toggle: toggleShowPassword } = useBoolean(false)

  return (
    <div
      className={clsx(
        "Input",
        { [className as string]: Boolean(className) },
        { password: Boolean(type === "password") }
      )}
    >
      <label className="Input__label">{label}</label>
      <input {...rest} placeholder={placeholder} type={passwordShown ? "text" : type} />
      {type === "password" &&
        (passwordShown ? (
          <IconEyeClosed className="Input__icon" onClick={toggleShowPassword} />
        ) : (
          <IconEye className="Input__icon" onClick={toggleShowPassword} />
        ))}
    </div>
  )
}
