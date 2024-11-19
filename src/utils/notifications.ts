import { Icon } from "../components/Icons"

export function errorNotification(err: Error) {
  return {
    title: "Error",
    message: err.message,
    color: "error",
    icon: Icon.Close(),
  }
}

export function successNotification(message: string, title?: string) {
  return {
    title: title ?? "Success",
    message,
    color: "success",
    icon: Icon.Check(),
  }
}

export function warningNotification(message: string, title?: string) {
  return {
    title: title ?? "Warning",
    message,
    color: "warning",
    icon: Icon.Exclaimation(),
  }
}

export function infoNotification(message: string, title?: string) {
  return {
    title: title ?? "Info",
    message,
    color: "info",
    icon: Icon.Info(),
  }
}
