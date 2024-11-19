import { Icon } from "../../../components/Icons"
import { NavButtonProps } from "./components/navButton"

export const navOptions: NavButtonProps[] = [
  {
    label: "Dashboard",
    to: "/",
    icon: Icon.Dashboard,
  },
  {
    label: "Cash",
    to: "/cash",
    icon: Icon.Cash,
  },
  {
    label: "$505",
    to: "/notifications",
    icon: Icon.Exclaimation,
  },
]

export const bottonNavOptions: NavButtonProps[] = [
  {
    label: "Settings",
    to: "/settings",
    icon: Icon.Settings,
  },
  {
    label: "Help",
    to: "/help",
    icon: Icon.Question,
  },
  {
    label: "Logout",
    to: "/logout",
    icon: Icon.Logout,
  },
]
