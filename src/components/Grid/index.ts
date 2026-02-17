import { InternalGridColumn } from './column'
import { InternalGrid } from './grid'

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Grid = Object.assign(InternalGrid, {
  Col: InternalGridColumn,
})
