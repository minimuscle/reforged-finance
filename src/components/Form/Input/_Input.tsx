import clsx from "clsx"
import type { Input } from "components/Form/types"
import styles from "./_Input.module.css"
import { IconEye, IconEyeClosed } from "@tabler/icons-react"
import { useBoolean } from "utils/hooks/useBoolean"
import { NumberInputProps, TextInput } from "@mantine/core"
import { NumberInput, TextInputProps } from "@mantine/core"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Input({ type, className, ...rest }: Input.InputProps) {
  /**********  HOOKS  **********/
  const { value: passwordShown, toggle: toggleShowPassword } = useBoolean(false)

  /*********  RENDER  *********/
  return (
    <div className={clsx(styles.input, { [styles.password]: Boolean(type === "password") }, className)}>
      {type === "number" ? (
        <NumberInput
          {...(rest as NumberInputProps)}
          classNames={{
            label: styles.label,
            description: styles.description,
            section: styles.section,
            input: rest.leftSection ? styles.inputWithSection : styles.input,
          }}
          hideControls
          rightSection={null}
        />
      ) : (
        <>
          <TextInput
            {...(rest as TextInputProps)}
            type={passwordShown ? "text" : type}
            classNames={{
              label: styles.label,
              description: styles.description,
              section: styles.section,
              input: rest.leftSection ? styles.inputWithSection : styles.input,
            }}
          />
          {type === "password" &&
            (passwordShown ? (
              <IconEyeClosed className={styles.icon} onClick={toggleShowPassword} />
            ) : (
              <IconEye className={styles.icon} onClick={toggleShowPassword} />
            ))}
        </>
      )}
    </div>
  )
}
