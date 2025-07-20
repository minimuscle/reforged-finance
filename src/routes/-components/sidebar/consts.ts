import {
  IconCash,
  IconChartPie,
  IconChartPieFilled,
  IconCoins,
  IconHeartFilled,
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
import { NavButtonProps } from "routes/-components/sidebar/types"

export const navOptions: Array<NavButtonProps> = [
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
    activeIcon: IconHeartFilled,
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

export const bottonNavOptions: Array<NavButtonProps> = [
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

export const otherNavOptions: Array<Partial<NavButtonProps>> = [
  {
    label: "Premium",
    to: "/premium",
  },
]
