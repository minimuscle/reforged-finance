import clsx from "clsx"
import styles from "./_Table.module.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Table({ children, className }: { children?: React.ReactNode; className?: string }) {
  /*********  RENDER  *********/
  return (
    <table className={clsx(styles.table, className)} border={0} cellPadding={0} cellSpacing={0}>
      {children}
    </table>
  )
}
