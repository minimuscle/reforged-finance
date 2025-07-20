import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import { _AppFormInput } from "components/Form/AppForm/Input"
import * as z from "zod"

/******************************************************************
 *  FORM START
 ******************************************************************/
export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
  formComponents: {},
  fieldComponents: {
    Input: Object.assign(_AppFormInput, {}),
  },
  formContext,
  fieldContext,
})
