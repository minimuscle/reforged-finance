import { Button } from "@mantine/core"
import { useFormContext } from "components/Form/AppForm"
import React from "react"

/******************************************************************
 *  TYPE DEFINITIONS
 ******************************************************************/
type AppFormSubmitButton = React.FC<{
  label?: React.ReactNode
}>

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const InternalAppFormSubmitButton: AppFormSubmitButton = ({ label }) => {
  /*****  HOOKS  *****/
  const form = useFormContext()

  /*****  RENDER  *****/
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          fullWidth
          type="submit"
          loading={isSubmitting}
          variant={isSubmitting ? "light" : "filled"}
          loaderProps={{ type: "dots" }}
          color="sky"
        >
          {label ?? "Submit"}
        </Button>
      )}
    </form.Subscribe>
  )
}
