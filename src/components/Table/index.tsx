import { _THead } from "components/Table/_THead"
import { _Table } from "./_Table"
import { _TBody } from "components/Table/_TBody"
import { _TRow } from "components/Table/_TRow"
import { _THeading } from "components/Table/_THeading"
import { _TCol } from "components/Table/_TCol"

export const Table = Object.assign(_Table, {
  Head: _THead,
  Body: _TBody,
  Row: _TRow,
  Heading: _THeading,
  Col: _TCol,
})
