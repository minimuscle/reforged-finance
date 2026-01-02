import { formOptions } from '@tanstack/react-form'
import * as z from 'zod/v3'

/******************************************************
 *   COMPONENT START
 ******************************************************/
export const createFormOptions = <TSchema extends z.ZodTypeAny = z.ZodTypeAny>(
  schema: z.input<TSchema>,
  defaultValues?: z.infer<TSchema>
) => {
  return formOptions({
    defaultValues,
    validators: {
      onChange: schema,
      onMount: schema,
    },
  })
}
