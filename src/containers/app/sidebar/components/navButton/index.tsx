import { Link, LinkProps } from "@tanstack/react-router"
import { clsx } from "clsx"
import { AnimatePresence, motion } from "motion/react"
import "./_navButton.css"
import type { ForwardRefExoticComponent, RefAttributes } from "react"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
export interface NavButtonProps {
  icon: ForwardRefExoticComponent<any & RefAttributes<any>>
  label: string
  to: LinkProps["to"]
  isSidebarHidden?: boolean
  preload?: false | "intent"
  activeIcon?: ForwardRefExoticComponent<any & RefAttributes<any>>
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function NavButton({
  icon: Icon,
  activeIcon: ActiveIcon,
  label,
  to,
  isSidebarHidden = false,
  preload = "intent",
}: NavButtonProps) {
  /*********  RENDER  *********/
  return (
    <Link to={to} preload={preload}>
      {({ isActive }) => {
        return (
          <div className="NavButton">
            <div className={clsx("NavButtonContent", { active: isActive })}>
              {isActive && ActiveIcon ? <ActiveIcon /> : <Icon />}
              <AnimatePresence>
                {!isSidebarHidden && (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{ delay: 0.2 }}
                    exit={{ x: -50, opacity: 0, transition: { delay: 0, duration: 0.2 } }}
                    className="NavButton__label"
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {isActive && (
              <motion.div
                layoutId="activeBtn"
                transition={{ duration: 0.15 }}
                className={clsx("activeBtn", { small: isSidebarHidden })}
              />
            )}
          </div>
        )
      }}
    </Link>
  )
}
