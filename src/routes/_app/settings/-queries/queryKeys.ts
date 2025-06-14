/******************************************************************
 *  QUERY KEY START
 ******************************************************************/
export const settingsQueryKey = Object.assign(() => ["settings"] as const, {
  profile: () => [...settingsQueryKey(), "profile"] as const,
})
