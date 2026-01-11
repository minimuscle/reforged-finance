import { Text } from 'components/Text'
import type { HeadingProps } from 'components/Text/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Heading: HeadingProps = ({ children, ...props }) => {
  const { h1, h2, h3, h4, h5, h6, size, ...restProps } = props

  const semanticProps = { h1, h2, h3, h4, h5, h6 }
  const SemanticProp = Object.entries(semanticProps).find(([, val]) => val)?.[0] ?? 'h1'

  // Header Sizes
  const headerSizeMap: Record<string, number> = {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 18,
  }

  return (
    <Text size={size ?? headerSizeMap[SemanticProp] ?? 24} {...restProps} {...{ [SemanticProp]: true }}>
      {children}
    </Text>
  )
}
