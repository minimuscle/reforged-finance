import {
  IconAlertSquareRoundedFilled,
  IconHelpSquareRoundedFilled,
  IconSquareRoundedCheckFilled,
  IconSquareRoundedXFilled,
} from "@tabler/icons-react"

export function errorNotification(err: Error) {
  return {
    title: "Error",
    message: err.message,
    color: "error",
    icon: <IconSquareRoundedXFilled size={36} />,
  }
}

export function successNotification(message: string, title?: string) {
  return {
    title: title ?? "Success",
    message,
    color: "success",
    icon: <IconSquareRoundedCheckFilled size={36} />,
  }
}

export function warningNotification(message: string, title?: string) {
  return {
    title: title ?? "Warning",
    message,
    color: "warning",
    icon: <IconAlertSquareRoundedFilled size={36} />,
  }
}

export function infoNotification(message: string, title?: string) {
  return {
    title: title ?? "Info",
    message,
    color: "info",
    icon: <IconHelpSquareRoundedFilled size={36} />,
  }
}
