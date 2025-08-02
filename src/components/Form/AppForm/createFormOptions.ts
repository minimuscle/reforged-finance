import { formOptions } from "@tanstack/react-form"
import * as z from "zod"

/******************************************************************
 *  COMPONENT START
 ******************************************************************/
export const createFormOptions = <TSchema extends z.ZodType>(schema: TSchema, defaultValues?: z.input<TSchema>) =>
  formOptions({
    validators: {
      onChange: schema,
    },
    defaultValues,
  })
