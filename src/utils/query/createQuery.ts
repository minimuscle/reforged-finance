import {
  useQuery as _useQuery,
  useSuspenseQuery as _useSuspenseQuery,
  QueryFunction,
  QueryKey,
  UseSuspenseQueryOptions,
  type UseQueryOptions,
} from "@tanstack/react-query"

/**
 * createQuery is an obstraction allowing to simplify the user of react query
 *
 */

export function createQuery<TVariables, TQueryFnData, TError = unknown, TData = TQueryFnData>(
  configFn: (variables: TVariables) => {
    queryKey: [TVariables] | [TVariables, ...any[]] | [...any[], TVariables]
    queryFn: QueryFunction<TQueryFnData>
    select?: (data: TQueryFnData) => TData
  } & Omit<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, "queryKey" | "queryFn" | "select">
) {
  /**
   * Base useQuery, used to get data from the backend
   */
  function useQuery<TFinalData = TData>(
    variables: TVariables,
    options?: {
      select?: (data: TData) => TFinalData
    } & Omit<UseQueryOptions<TQueryFnData, TError, TFinalData, QueryKey>, "queryKey" | "queryFn" | "select">
  ) {
    const baseConfig = configFn(variables)

    const mergedSelect =
      baseConfig.select && options?.select
        ? (data: TQueryFnData) => options.select!(baseConfig.select!(data))
        : (baseConfig.select ?? options?.select)

    return _useQuery<TQueryFnData, TError, TFinalData, QueryKey>({
      ...(baseConfig as any),
      ...options,
      select: mergedSelect,
    })
  }

  /**
   * useSelectQuery. A query without any other data except for a select, that is implied as a returned object.
   */
  function useSelectQuery<TFinalData = TData>(variables: TVariables, select: (data: TData) => TFinalData) {
    const baseConfig = configFn(variables)
    const mergedSelect = baseConfig.select ? (data: TQueryFnData) => select(baseConfig.select!(data)) : select

    return _useQuery<TQueryFnData, TError, TFinalData, QueryKey>({
      ...(baseConfig as any),
      select: mergedSelect,
    })
  }

  /**
   * useSuspenseQuery. A suspense version that garauntees data
   */
  function useSuspenseQuery<TFinalData = TData>(
    variables: TVariables,
    options?: {
      select?: (data: TData) => TFinalData
    } & Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TFinalData, QueryKey>, "queryKey" | "queryFn" | "select">
  ) {
    const baseConfig = configFn(variables)

    const mergedSelect =
      baseConfig.select && options?.select
        ? (data: TQueryFnData) => options.select!(baseConfig.select!(data))
        : (baseConfig.select ?? options?.select)

    return _useSuspenseQuery<TQueryFnData, TError, TFinalData, QueryKey>({
      ...(baseConfig as any),
      ...options,
      select: mergedSelect,
    })
  }

  /**
   * useSuspenseSelectQuery. A suspense version that garauntees data but also assumes a select
   */
  function useSuspenseSelectQuery<TFinalData = TData>(variables: TVariables, select: (data: TData) => TFinalData) {
    const baseConfig = configFn(variables)
    const mergedSelect = baseConfig.select ? (data: TQueryFnData) => select(baseConfig.select!(data)) : select

    return _useSuspenseQuery<TQueryFnData, TError, TFinalData, QueryKey>({
      ...(baseConfig as any),
      select: mergedSelect,
    })
  }

  return { useQuery, useSelectQuery, useSuspenseQuery, useSuspenseSelectQuery }
}
