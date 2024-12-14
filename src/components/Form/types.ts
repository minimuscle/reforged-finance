export namespace Input {
  export interface InputProps {
    label?: string
    className?: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
  }

  export interface HookFormInputProps extends InputProps {
    name: string
  }
}
