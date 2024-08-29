import { Text, ThemeIcon } from '@mantine/core'
import { NavLink as Link } from '@remix-run/react'
import classes from '../_app.module.css'
import { cloneElement } from 'react'

interface NavLinkProps {
  children: React.ReactNode
  icon: React.ReactElement
  to: string
  target?: '_blank'
}
//TODO: Add text option
export default function NavLink({ children, icon, to, target }: NavLinkProps) {
  return (
    <Link
      target={target ? target : ''}
      rel={target ? 'noreferrer' : ''}
      prefetch='intent'
      to={to}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.active : ''}`
      }
    >
      <ThemeIcon className={classes.icon} variant='subtle'>
        {cloneElement(icon, {
          style: { height: '80%', width: '80%' },
        })}
      </ThemeIcon>
      <Text className={classes.navText}>{children}</Text>
    </Link>
  )
}
