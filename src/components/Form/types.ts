import type { NumberInputProps, InputProps } from "@mantine/core"

export namespace Input {
  export type Props = { type: "number" | "password" } & Omit<InputProps, "type">
}
