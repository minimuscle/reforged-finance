import type { ColorOptions, TextProps } from 'components/Text/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Text: TextProps = ({ children, ...props }) => {
  const { h1, h2, h3, h4, h5, h6, p, span, color } = props

  const semanticProps = { h1, h2, h3, h4, h5, h6, p, span }
  const Component = (Object.entries(semanticProps).find(([, val]) => val)?.[0] ?? 'p') as keyof React.JSX.IntrinsicElements

  //Colours
  const colorMap: Record<ColorOptions, string> = {
    primary: 'var(--slate-900)',
    secondary: 'var(--slate-700)',
    tertiary: 'var(--slate-500)',
    error: 'var(--red-600)',
    warning: 'var(--yellow-600)',
    success: 'var(--green-600)',
    info: 'var(--blue-600)',
    default: 'var(--slate-900)',
  }

  return <Component style={{ color: colorMap[color ?? 'default'] }}>{children}</Component>
}
