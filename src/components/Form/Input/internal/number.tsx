import { NumberInput, NumberInputProps, PasswordInput, PasswordInputProps } from "@mantine/core"
import styles from "./_Input.module.css"
import { IconEyeClosed } from "@tabler/icons-react"
import { IconEye } from "@tabler/icons-react"
import clsx from "clsx"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const InternalNumberInput: React.FC<NumberInputProps> = (props) => {
  /*****  RENDER  *****/
  return (
    <NumberInput
      classNames={{
        label: styles.label,
        description: styles.description,
        section: styles.section,
        input: clsx(props.leftSection ? styles.inputWithSection : styles.input, [props.error && styles.error]),
      }}
      hideControls
      rightSection={null}
      {...props}
    />
  )
}
