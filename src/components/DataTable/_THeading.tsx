import { Text } from "components/Text"
import styles from "./_Table.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _THeading({ children }: { children?: string }) {
  /*********  RENDER  *********/
  return (
    <th className={styles.heading}>
      <Text uppercase size="sm" className="Table__heading--text">
        {children}
      </Text>
    </th>
  )
}
