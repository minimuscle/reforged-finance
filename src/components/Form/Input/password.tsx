import { PasswordInput, PasswordInputProps, TextInput, TextInputProps } from "@mantine/core"
import styles from "./_Input.module.css"
import { IconEyeClosed } from "@tabler/icons-react"
import { IconEye } from "@tabler/icons-react"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const ToggleIcon = ({ reveal }: { reveal: boolean }) =>
    reveal ? <IconEyeClosed className={styles.icon} /> : <IconEye className={styles.icon} />
  /*****  RENDER  *****/
  return (
    <PasswordInput
      {...props}
      visibilityToggleIcon={ToggleIcon}
      classNames={{
        label: styles.label,
        description: styles.description,
        section: styles.section,
        input: props.leftSection ? styles.inputWithSection : styles.input,
      }}
    />
  )
}
