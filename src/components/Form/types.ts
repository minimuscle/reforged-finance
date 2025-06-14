import type { NumberInputProps, TextInputProps } from "@mantine/core"

export namespace Input {
  export type InputProps = ({ type: "number" } & Omit<NumberInputProps, "type">) | TextInputProps

  export type HookFormInputProps = {
    name: string
  } & InputProps
}
