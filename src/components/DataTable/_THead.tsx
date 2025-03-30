import styles from "./_Table.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _THead({ children }: { children?: React.ReactNode }) {
  /*********  RENDER  *********/
  return <thead className={styles.header}>{children}</thead>
}
