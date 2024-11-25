import { useViewportSize } from "@mantine/hooks"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
const breakpoints = {
  xs: "0",
  sm: "576",
  md: "768",
  lg: "1024",
  xl: "1280",
} as const

type Breakpoints = keyof typeof breakpoints
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
/**
 * Returns true if the current viewport size is equal to or smaller than the given size
 */
export function useAppViewport(size: Breakpoints[]) {
  //Get the window size
  const { width } = useViewportSize()
  const orderedSizes = size.sort((a, b) => Object.keys(breakpoints).indexOf(a) - Object.keys(breakpoints).indexOf(b))

  //Get the last size in the array
  const getKeys = Object.keys(breakpoints)
  const lastSize =
    orderedSizes.length === 1
      ? (getKeys[
          getKeys.findIndex((key) => key === orderedSizes[orderedSizes.length - 1]) + 1
        ] as keyof typeof breakpoints)
      : (orderedSizes[orderedSizes.length - 1] as keyof typeof breakpoints)

  if (width > Number(breakpoints[orderedSizes[0]])) {
    if (width < Number(breakpoints[lastSize])) {
      return true
    }
  }
  return false
}
