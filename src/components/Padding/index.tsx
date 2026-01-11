import type { PaddingProps } from 'components/Padding/types'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Padding: PaddingProps = ({ xy, x, y, top, bottom, left, right, children }) => {
  return (
    <div
      style={{
        paddingLeft: left ? `${left}px` : x ? `${x}px` : xy ? `${xy}px` : '0',
        paddingRight: right ? `${right}px` : x ? `${x}px` : xy ? `${xy}px` : '0',
        paddingTop: top ? `${top}px` : y ? `${y}px` : xy ? `${xy}px` : '0',
        paddingBottom: bottom ? `${bottom}px` : y ? `${y}px` : xy ? `${xy}px` : '0',
      }}
    >
      {children}
    </div>
  )
}
