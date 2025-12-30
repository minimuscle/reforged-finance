export type ReactWithChildren<TProps = unknown> = React.FC<
  {
    children: React.ReactNode
  } & TProps
>
