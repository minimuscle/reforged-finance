import { MutationFunction, UseMutationOptions } from "@tanstack/react-query"
import { createMutation } from "utils/query/createMutation"

/******************************************************************
 *  MUTATION START
 ******************************************************************/
export const autosaveInputMutation = (mutationFn: MutationFunction) => {
  return createMutation({
    mutationFn,
  })
}
