import { ThemeIcon } from "@mantine/core"
import { Link, useLocation } from "@remix-run/react"
import styles from "../_app.module.css"
import { cloneElement } from "react"

interface NavLinkProps {
  children: React.ReactNode
  icon: React.ReactNode
  to: string
  premium?: boolean
}

export default function NavLink({
  children,
  icon,
  to,
  premium = false,
}: NavLinkProps) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      prefetch="intent"
      to={to}
      className={`${premium ? styles.premiumLink : styles.link} ${
        premium ? active && styles.premiumActive : active && styles.active
      }`}
    >
      <ThemeIcon
        color={premium ? "yellow" : active ? "blue" : "black"}
        variant="subtle"
      >
        {cloneElement(icon as React.ReactElement, {
          style: { height: "80%", width: "80%" },
        })}
      </ThemeIcon>
      {children}
    </Link>
  )
}
