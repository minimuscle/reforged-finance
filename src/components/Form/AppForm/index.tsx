import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import { InternalAppFormInput } from "components/Form/AppForm/fieldComponents/Input"
import { InternalAppFormInputPassword } from "components/Form/AppForm/fieldComponents/Input/password"
import { InternalAppFormSubmitButton } from "components/Form/AppForm/formComponents/submit"

/******************************************************************
 *  FORM START
 ******************************************************************/
export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
  formComponents: {
    Submit: InternalAppFormSubmitButton,
  },
  fieldComponents: {
    Input: Object.assign(InternalAppFormInput, {
      Password: InternalAppFormInputPassword,
    }),
  },
  formContext,
  fieldContext,
})
