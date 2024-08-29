import Sidebar from "~/components/Sidebar"
import useSuper from "~/utils/hooks/useSuper"

const SidebarContainer = () => {
  const { superData, superDataTotal } = useSuper()
  return (
    <Sidebar
      data={superData}
      title="Super Accounts"
      totalBalance={superDataTotal}
    />
  )
}

export default SidebarContainer
