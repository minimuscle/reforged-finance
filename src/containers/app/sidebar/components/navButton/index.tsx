import { Link, LinkProps } from "@tanstack/react-router"
import { clsx } from "clsx"
import "./_navButton.scss"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
export interface NavButtonProps {
  icon: JSX.Element
  label: string
  to: LinkProps["to"]
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function NavButton({ icon, label, to }: NavButtonProps) {
  /*********  RENDER  *********/
  return (
    <Link to={to} className="NavButton" preload="intent">
      {({ isActive }) => {
        return (
          <div className={clsx("NavButtonContent", { active: isActive })}>
            {icon}
            {label}
          </div>
        )
      }}
    </Link>
  )
}
