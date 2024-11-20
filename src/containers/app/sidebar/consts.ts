import { Icon } from "../../../components/Icons"
import { NavButtonProps } from "./components/navButton"

export const navOptions: NavButtonProps[] = [
  {
    label: "Dashboard",
    to: "/",
    icon: Icon.Dashboard(),
  },
  {
    label: "Cash",
    to: "/cash",
    icon: Icon.Cash(),
  },
  {
    label: "Debts / Liabilities",
    to: "/debts",
    icon: Icon.Cash(),
  },
  {
    label: "Side Income",
    to: "/side-income",
    icon: Icon.Cash(),
  },
  {
    label: "Superannuation",
    to: "/super",
    icon: Icon.Cash(),
  },
  {
    label: "Budget",
    to: "/budget",
    icon: Icon.Cash(),
  },
  {
    label: "History",
    to: "/history",
    icon: Icon.Cash(),
  },
]

export const bottonNavOptions: NavButtonProps[] = [
  {
    label: "Settings",
    to: "/settings",
    icon: Icon.Settings(),
  },
  {
    label: "Help",
    to: "/help",
    icon: Icon.Question(),
  },
  {
    label: "Logout",
    to: "/logout",
    icon: Icon.Logout(),
    preload: false,
  },
]
