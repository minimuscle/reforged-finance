import { _THead } from "components/DataTable/_THead"
import { _Table } from "./_Table"
import { _TBody } from "components/DataTable/_TBody"
import { _TRow } from "components/DataTable/_TRow"
import { _THeading } from "components/DataTable/_THeading"
import { _TCol } from "components/DataTable/_TCol"

export const DataTable = Object.assign(_Table, {
  Head: _THead,
  Body: _TBody,
  Row: _TRow,
  Heading: _THeading,
  Col: _TCol,
})
