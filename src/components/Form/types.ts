import React from "react"

export namespace Input {
  export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    className?: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
  }

  export interface HookFormInputProps extends InputProps {
    name: string
  }
}
