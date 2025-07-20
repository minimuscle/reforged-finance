import { createFormHook, createFormHookContexts } from "@tanstack/react-form"

/******************************************************************
 *  FORM START
 ******************************************************************/
const { fieldContext, formContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
  formComponents: {},
  fieldComponents: {},
  formContext,
  fieldContext,
})
