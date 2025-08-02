import { NumberInput, NumberInputProps } from "@mantine/core"
import clsx from "clsx"
import styles from "./_Input.module.css"

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
