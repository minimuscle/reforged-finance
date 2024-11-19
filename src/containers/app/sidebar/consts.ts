import { Icon } from "../../../components/Icons"
import { NavButtonProps } from "./components/navButton"

export const navOptions: NavButtonProps[] = [
  {
    label: "Dashboard",
    to: "/",
    icon: Icon.Dashboard(),
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Icon.Info(),
  },
  {
    label: "Notifications",
    to: "/notifications",
    icon: Icon.Exclaimation(),
  },
]
