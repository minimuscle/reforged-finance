import { Text } from 'components/Text'
import type { HeadingProps } from 'components/Text/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Heading: HeadingProps = ({ children, ...props }) => {
  const { h1, h2, h3, h4, h5, h6, ...restProps } = props

  const semanticProps = { h1, h2, h3, h4, h5, h6 }
  const SemanticProp = Object.entries(semanticProps).find(([, val]) => val)?.[0] ?? 'h1'
  return (
    <Text {...restProps} {...{ [SemanticProp]: true }}>
      {children}
    </Text>
  )
}
