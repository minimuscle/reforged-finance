import { Text } from "components/Text"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _THeading({ children }: { children?: string }) {
  /*********  RENDER  *********/
  return (
    <th className="Table__heading">
      <Text uppercase size="sm" className="Table__heading--text">
        {children}
      </Text>
    </th>
  )
}
