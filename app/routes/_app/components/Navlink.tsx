import { Text, ThemeIcon } from '@mantine/core'
import { Link, useLocation } from '@remix-run/react'
import styles from '../_app.module.css'
import { cloneElement } from 'react'

interface NavLinkProps {
  children: React.ReactNode
  icon: React.ReactElement
  to: string
  premium?: boolean
}
//TODO: Add text option
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
      prefetch='intent'
      to={to}
      className={`${premium ? styles.premiumLink : styles.link} ${
        premium ? active && styles.premiumActive : active && styles.active
      }`}
    >
      <ThemeIcon
        className={styles.icon}
        color={premium ? 'yellow' : ''}
        variant='subtle'
      >
        {cloneElement(icon, {
          style: { height: '80%', width: '80%' },
        })}
      </ThemeIcon>
      <Text className={styles.navText}>{children}</Text>
    </Link>
  )
}
