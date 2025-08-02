import type { NumberInputProps, PasswordInputProps, TextInputProps } from "@mantine/core"

export namespace Input {
  type TextProps = Omit<TextInputProps, "type"> & { type?: "text" }
  type NumberProps = Omit<NumberInputProps, "type"> & { type: "number" }
  type PasswordProps = Omit<PasswordInputProps, "type"> & { type: "password" }
  export type Props = TextProps | NumberProps | PasswordProps
}
