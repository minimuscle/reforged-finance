import { PasswordInput, PasswordInputProps } from "@mantine/core"
import styles from "./_Input.module.css"
import { IconEyeClosed } from "@tabler/icons-react"
import { IconEye } from "@tabler/icons-react"
import clsx from "clsx"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const ToggleIcon = ({ reveal }: { reveal: boolean }) => (reveal ? <IconEyeClosed /> : <IconEye />)
  /*****  RENDER  *****/
  return (
    <PasswordInput
      {...props}
      visibilityToggleIcon={ToggleIcon}
      classNames={{
        label: styles.label,
        description: styles.description,
        input: clsx(props.leftSection ? styles.inputWithSection : styles.input, [props.error && styles.error]),
      }}
    />
  )
}
