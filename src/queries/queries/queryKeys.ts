export const queryKeys = {
  user: Object.assign(() => ["user"] as const, {
    details: () => [...queryKeys.user(), "details"] as const,
    profile: () => [...queryKeys.user(), "profile"] as const,
    cash: () => [...queryKeys.user(), "cash"] as const,
    debts: () => [...queryKeys.user(), "debts"] as const,
    super: () => [...queryKeys.user(), "super"] as const,
    history: () => [...queryKeys.user(), "history"] as const,
  }),
}
