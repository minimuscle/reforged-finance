import {
  IconAlertSquareFilled,
  IconHelpSquareFilled,
  IconSquareRoundedCheckFilled,
  IconSquareRoundedXFilled,
} from "@tabler/icons-react"

export function errorNotification(err: Error) {
  return {
    title: "Error",
    message: err.message,
    color: "error",
    icon: IconSquareRoundedXFilled,
  }
}

export function successNotification(message: string, title?: string) {
  return {
    title: title ?? "Success",
    message,
    color: "success",
    icon: IconSquareRoundedCheckFilled,
  }
}

export function warningNotification(message: string, title?: string) {
  return {
    title: title ?? "Warning",
    message,
    color: "warning",
    icon: IconAlertSquareFilled,
  }
}

export function infoNotification(message: string, title?: string) {
  return {
    title: title ?? "Info",
    message,
    color: "info",
    icon: IconHelpSquareFilled,
  }
}
