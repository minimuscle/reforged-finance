import { useMutation as _useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import {
  autosaveFailNotification,
  autosaveLoadingNotification,
  autosaveSuccessNotification,
  pushNotification,
  updateNotification,
} from "utils/notifications"

/**
 * createMutation is an abstraction over useMutation that allows the user to create mutations easier and simpler
 */
export function createMutation<TData, TError = unknown, TVariables = void, TContext = unknown>(
  baseConfig: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  /**
   * Base mutation extension that allows the correct types
   */
  function useMutation(options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">) {
    return _useMutation({
      ...baseConfig,
      ...options,
      onMutate: async (variables) => {
        const baseContext = await baseConfig.onMutate?.(variables)
        const optionsContext = await options?.onMutate?.(variables)

        return {
          ...baseContext,
          ...optionsContext,
        } as TContext
      },
      onSuccess: (data, variables, context) => {
        baseConfig.onSuccess?.(data, variables, context)
        options?.onSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        baseConfig.onError?.(error, variables, context)
        options?.onError?.(error, variables, context)
      },
      onSettled(data, error, variables, context) {
        baseConfig.onSettled?.(data, error, variables, context)
        options?.onSettled?.(data, error, variables, context)
      },
    })
  }

  /**
   * Autosave mutation is used when making a POST request that needs to automatically save and show a notification when doing so
   */
  function useAutoSaveMutation(
    options?: Omit<UseMutationOptions<TData, TError, TVariables, { notificationId: string }>, "mutationFn">
  ) {
    const castBaseConfig = baseConfig as unknown as UseMutationOptions<
      TData,
      TError,
      TVariables,
      { notificationId: string }
    >

    return _useMutation({
      ...castBaseConfig,
      ...options,
      onMutate: async (variables) => {
        const notificationId = pushNotification(autosaveLoadingNotification())
        const baseContext = await castBaseConfig.onMutate?.(variables)
        const optionsContext = await options?.onMutate?.(variables)

        return {
          notificationId,
          ...baseContext,
          ...optionsContext,
        }
      },
      onSuccess: (data, variables, context) => {
        updateNotification(context.notificationId, autosaveSuccessNotification())

        castBaseConfig.onSuccess?.(data, variables, context)
        options?.onSuccess?.(data, variables, context)
      },
      onError: (error, variables, context) => {
        !!context?.notificationId && updateNotification(context.notificationId, autosaveFailNotification())

        castBaseConfig.onError?.(error, variables, context)
        options?.onError?.(error, variables, context)
      },
      onSettled(data, error, variables, context) {
        castBaseConfig.onSettled?.(data, error, variables, context)
        options?.onSettled?.(data, error, variables, context)
      },
    })
  }
  return {
    useMutation,
    useAutoSaveMutation,
  }
}
