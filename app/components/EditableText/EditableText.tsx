import { useFetcher } from "@remix-run/react"
import styles from "./EditableText.module.css"
import { useRef, useState } from "react"
import { IMaskInput } from "react-imask"

const EditableText = ({
  fieldName,
  id,
  value,
  type,
  inputClassName,
  formatter,
  buttonClassName,
}: {
  children?: React.ReactNode
  fieldName: string
  id: string | number
  value: string | number
  type?: "currency"
  formatter?: (currency: string, amount: number) => string
  inputClassName?: string
  inputLabel?: string
  buttonClassName?: string
  buttonLabel?: string
}) => {
  const fetcher = useFetcher()
  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  if (fetcher.formData?.has(fieldName)) {
    if (type === "currency") {
      value = parseFloat(
        String(fetcher.formData.get(fieldName)).replace(/[$,]/g, "")
      )
    } else {
      value = String(fetcher.formData.get(fieldName))
    }
  }

  return edit ? (
    <fetcher.Form method="POST">
      <input type="hidden" name="intent" value="updateCashField" />
      <input type="hidden" name="id" value={id} />
      <IMaskInput
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        ref={inputRef}
        unmask={true}
        mask={type === "currency" ? "$num" : ""}
        blocks={
          type === "currency"
            ? {
                num: {
                  mask: Number,
                  thousandsSeparator: ",",
                  scale: 2,
                  padFractionalZeros: true,
                  normalizeZeros: true,
                  radix: ".",
                  mapToRadix: [",", "."],
                },
              }
            : {}
        }
        name={fieldName}
        placeholder={value ? value.toString() : ""}
        defaultValue={value}
        value={value.toString()}
        className={`${styles.input} ${
          inputClassName ? styles[inputClassName] : ""
        }`}
        onBlur={(event) => {
          if (
            !/^\s*$/.test(event.target.value) &&
            event.target.value !== value
          ) {
            fetcher.submit(event.currentTarget.form)
          }
          setEdit(false)
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setEdit(false)
          } else if (event.key === "Enter") {
            event.currentTarget.blur()
          }
        }}
      />
    </fetcher.Form>
  ) : (
    <button
      ref={buttonRef}
      onClick={() => {
        setEdit(true)
        inputRef.current?.select()
      }}
      className={`${styles.btn} ${
        buttonClassName ? styles[buttonClassName] : ""
      }`}
    >
      {formatter
        ? formatter("AUD", typeof value === "string" ? parseInt(value) : value)
        : value}
    </button>
  )
}

export default EditableText
