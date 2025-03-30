import styles from "./_Table.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _TBody({ children }: { children?: React.ReactNode }) {
  /*********  RENDER  *********/
  return <tbody className={styles.body}>{children}</tbody>
}
