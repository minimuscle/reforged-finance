import BankAccounts from "~/components/BankAccounts"
import Tile from "~/components/Tile"

export default function Cash() {
  return (
    <>
      <Tile rows={4} cols={3}>
        <BankAccounts />
      </Tile>
    </>
  )
}
