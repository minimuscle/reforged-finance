import { useMutation as _useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

/**
 * createMutation is an abstraction over useMutation that allows the user to create mutations easier and simpler
 */
export function createMutation<TData, TError = unknown, TVariables = void, TContext = unknown>(
  baseConfig: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  function useMutation(
    options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">
  ): UseMutationResult<TData, TError, TVariables, TContext> {
    return _useMutation({
      ...baseConfig,
      ...options,
    })
  }

  return {
    useMutation,
  }
}
