import { TextInput, TextInputProps } from "@mantine/core"
import styles from "./_Input.module.css"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const _TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <TextInput
      {...props}
      classNames={{
        label: styles.label,
        description: styles.description,
        section: styles.section,
        input: props.leftSection ? styles.inputWithSection : styles.input,
      }}
    />
  )
}
