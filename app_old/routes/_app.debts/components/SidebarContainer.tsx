import Sidebar from "~/components/Sidebar"
import useDebts from "~/utils/hooks/useDebts"

const SidebarContainer = () => {
  const { debts, debtsTotal } = useDebts()
  return (
    <Sidebar
      data={debts}
      title="Liabilities / Debts"
      type="debt"
      totalBalance={debtsTotal}
    />
  )
}

export default SidebarContainer
