import { Link } from "@tanstack/react-router"
import { clsx } from "clsx"
import { AnimatePresence, motion } from "motion/react"
import styles from "./_navButton.module.css"
import { NavButtonProps } from "containers/app/sidebar/types"

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
          <div className={styles.navButton}>
            <div className={clsx(styles.content, { [styles.active]: isActive })}>
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
                    className={styles.label}
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
                className={clsx(styles.activeBtn, { [styles.small]: isSidebarHidden })}
              />
            )}
          </div>
        )
      }}
    </Link>
  )
}
