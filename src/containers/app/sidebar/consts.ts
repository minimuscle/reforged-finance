import { NavButtonProps } from "./components/navButton"
import {
  IconCash,
  IconChartPie,
  IconChartPieFilled,
  IconCoins,
  IconHeartHandshake,
  IconHelpCircle,
  IconHelpCircleFilled,
  IconHistory,
  IconHome,
  IconHomeFilled,
  IconLogout2,
  IconSettings,
  IconSettingsFilled,
  IconTrendingDown,
} from "@tabler/icons-react"

export const navOptions: NavButtonProps[] = [
  {
    label: "Dashboard",
    to: "/",
    icon: IconHome,
    activeIcon: IconHomeFilled,
  },
  {
    label: "Cash",
    to: "/cash",
    icon: IconCoins,
  },
  {
    label: "Debts / Liabilities",
    to: "/debts",
    icon: IconTrendingDown,
  },
  {
    label: "Side Income",
    to: "/side-income",
    icon: IconCash,
  },
  {
    label: "Superannuation",
    to: "/super",
    icon: IconHeartHandshake,
  },
  {
    label: "Budget",
    to: "/budget",
    icon: IconChartPie,
    activeIcon: IconChartPieFilled,
  },
  {
    label: "History",
    to: "/history",
    icon: IconHistory,
  },
]

export const bottonNavOptions: NavButtonProps[] = [
  {
    label: "Settings",
    to: "/settings",
    icon: IconSettings,
    activeIcon: IconSettingsFilled,
  },
  {
    label: "Help",
    to: "/help",
    icon: IconHelpCircle,
    activeIcon: IconHelpCircleFilled,
  },
  {
    label: "Logout",
    to: "/logout",
    icon: IconLogout2,
    preload: false,
  },
]
