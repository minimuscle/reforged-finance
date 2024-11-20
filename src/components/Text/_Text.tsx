import "./_Text.scss"
/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface TextProps {
  children: React.ReactNode
}

interface TextSizes {
  sm: string
}
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Text({ children }: TextProps) {
  /*********  RENDER  *********/
  return <p className="Text">{children}</p>
}
