import type { ColorOptions, TextProps, TextSizeOptions } from 'components/Text/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Text: TextProps = ({ children, ...props }) => {
  const { h1, h2, h3, h4, h5, h6, p, span, color, italic, strikethrough, underline, size, className } = props
  const { regular, medium, semiBold, bold, extraBold, black } = props

  const semanticProps = { h1, h2, h3, h4, h5, h6, p, span }
  const Component = (Object.entries(semanticProps).find(([, val]) => val)?.[0] ?? 'p') as keyof React.JSX.IntrinsicElements

  // Colours
  const colorMap: Record<ColorOptions, string> = {
    grey: 'var(--slate-500)',
    error: 'var(--red-600)',
    warning: 'var(--amber-500)',
    success: 'var(--green-600)',
    info: 'var(--cyan-600)',
    default: 'var(--slate-800)',
  }

  // Size
  const sizeMap: Record<TextSizeOptions, string> = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  }

  // Weight
  const weights = { regular, medium, semiBold, bold, extraBold, black }
  const activeWeight = Object.entries(weights).find(([, val]) => val)?.[0] ?? ('regular' as keyof typeof weights)

  const weightMap: Record<keyof typeof weights, string> = {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  }

  return (
    <Component
      style={{
        color: color ? colorMap[color as ColorOptions] ?? color : colorMap['default'],
        fontStyle: italic ? 'italic' : 'normal',
        fontWeight: weightMap[activeWeight as keyof typeof weightMap] ?? '400',
        fontSize: size ? sizeMap[size] ?? size : sizeMap['md'],
        textDecoration: `${underline ? 'underline ' : ''}${strikethrough ? 'line-through' : ''}`,
      }}
      className={className}
    >
      {children}
    </Component>
  )
}
