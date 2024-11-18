import { createTheme, Notification } from "@mantine/core"

// Custom theme configuration
export const theme = createTheme({
  components: {
    Notification: Notification.extend({
      styles: (theme, { color }) => {
        switch (color) {
          case "error":
            return {
              root: {
                backgroundColor: theme.colors.red[1],
              },
              title: {
                color: theme.colors.red[9],
              },
              description: {
                color: theme.colors.red[7],
              },
              icon: {
                backgroundColor: theme.colors.red[9],
              },
            }
          case "warning":
            return {
              root: {
                backgroundColor: theme.colors.yellow[1],
              },
              title: {
                color: theme.colors.yellow[9],
              },
              description: {
                color: theme.colors.yellow[7],
              },
              icon: {
                backgroundColor: theme.colors.yellow[9],
              },
            }
          case "success":
            return {
              root: {
                backgroundColor: theme.colors.green[1],
              },
              title: {
                color: theme.colors.green[9],
              },
              description: {
                color: theme.colors.green[7],
              },
              icon: {
                backgroundColor: theme.colors.green[9],
              },
            }
          case "info":
            return {
              root: {
                backgroundColor: theme.colors.blue[1],
              },
              title: {
                color: theme.colors.blue[9],
              },
              description: {
                color: theme.colors.blue[7],
              },
              icon: {
                backgroundColor: theme.colors.blue[9],
              },
            }
          default:
            return {} // Return empty styles for any other color
        }
      },
    }),
  },
})
