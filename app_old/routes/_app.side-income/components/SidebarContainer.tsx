import Sidebar from "~/components/Sidebar"
import useSideIncome from "~/utils/hooks/useSideIncome"

const SidebarContainer = () => {
  const { incomeData, incomeDataTotal } = useSideIncome()
  return (
    <Sidebar
      data={incomeData}
      title="Side Income Accounts"
      totalBalance={incomeDataTotal}
    />
  )
}

export default SidebarContainer
