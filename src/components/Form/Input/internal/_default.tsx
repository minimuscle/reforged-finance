import { TextInput, TextInputProps } from "@mantine/core"
import styles from "./_Input.module.css"
import clsx from "clsx"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const InternalTextInput: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      {...props}
      classNames={{
        label: styles.label,
        description: styles.description,
        section: styles.section,
        input: clsx(props.leftSection ? styles.inputWithSection : styles.input, [props.error && styles.error]),
      }}
    />
  )
}
