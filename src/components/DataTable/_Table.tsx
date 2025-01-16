import clsx from "clsx"
import "./_Table.css"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Table({ children, className }: { children?: React.ReactNode; className?: string }) {
  /*********  RENDER  *********/
  return (
    <table className={clsx("Table", className)} border={0} cellPadding={0} cellSpacing={0}>
      {children}
    </table>
  )
}
