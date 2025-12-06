import type { ColorOptions, TextProps } from 'components/Text/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Text: TextProps = ({ children, ...props }) => {
  const { h1, h2, h3, h4, h5, h6, p, span, color, italic, bold, strikethrough, underline, className } = props

  const semanticProps = { h1, h2, h3, h4, h5, h6, p, span }
  const Component = (Object.entries(semanticProps).find(([, val]) => val)?.[0] ?? 'p') as keyof React.JSX.IntrinsicElements

  //Colours
  const colorMap: Record<ColorOptions, string> = {
    grey: 'var(--slate-500)',
    error: 'var(--red-600)',
    warning: 'var(--amber-500)',
    success: 'var(--green-600)',
    info: 'var(--sky-600)',
    default: 'var(--slate-900)',
  }

  return (
    <Component
      style={{
        color: color ? colorMap[color as ColorOptions] ?? color : colorMap['default'],
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: bold ? 'bold' : 'normal',
        textDecoration: `${underline ? 'underline ' : ''}${strikethrough ? 'line-through' : ''}`,
      }}
      className={className}
    >
      {children}
    </Component>
  )
}
