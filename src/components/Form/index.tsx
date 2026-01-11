import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { TextInput } from 'components/Form/Input/Text'

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextInput,
  },
  formComponents: {},
  fieldContext,
  formContext,
})
