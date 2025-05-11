import { NotificationData, notifications } from "@mantine/notifications"
import { IconCircleXFilled } from "@tabler/icons-react"
import { IconCircleCheckFilled } from "@tabler/icons-react"
import {
  IconAlertSquareRoundedFilled,
  IconHelpSquareRoundedFilled,
  IconSquareRoundedCheckFilled,
  IconSquareRoundedXFilled,
} from "@tabler/icons-react"

export function errorNotification(err?: Error, title?: string): NotificationData {
  console.log(err?.message)
  return {
    title: title ?? "Something went wrong",
    message: Boolean(err?.message) ? err?.message : "Contact support if this persists.",
    color: "error",
    icon: <IconSquareRoundedXFilled size={36} />,
  }
}

export function successNotification(message: string, title?: string): NotificationData {
  return {
    title: title ?? "Success",
    message,
    color: "success",
    icon: <IconSquareRoundedCheckFilled size={36} />,
  }
}

export function warningNotification(message: string, title?: string): NotificationData {
  return {
    title: title ?? "Warning",
    message,
    color: "warning",
    icon: <IconAlertSquareRoundedFilled size={36} />,
  }
}

export function infoNotification(message: string, title?: string): NotificationData {
  return {
    title: title ?? "Info",
    message,
    color: "info",
    icon: <IconHelpSquareRoundedFilled size={36} />,
  }
}

export function autosaveLoadingNotification(): NotificationData {
  notifications.clean()
  return {
    loading: true,
    message: "Autosaving...",
    color: "autosaveLoading",
    position: "bottom-right",
    autoClose: false,
  }
}

export function autosaveSuccessNotification(): NotificationData {
  return {
    loading: false,
    message: "Saved Successfully!",
    color: "autosaveSuccess",
    icon: <IconCircleCheckFilled size={36} />,
    position: "bottom-right",
    autoClose: true,
  }
}

export function autosaveFailNotification(): NotificationData {
  return {
    loading: false,
    message: "Autosave Failed!",
    color: "autosaveFail",
    icon: <IconCircleXFilled size={36} />,
    position: "bottom-right",
    autoClose: 10000,
  }
}

export function updateNotification(notificationId: string, notification: NotificationData) {
  return notifications.update({
    id: notificationId,
    ...notification,
  })
}

export function pushNotification(
  notification:
    | NotificationData
    | { status: number; message: string; title?: string }
    | { error: Error; title?: string }
) {
  if ("status" in notification) {
    const { status, message, title } = notification

    if (status >= 200 && status < 400) {
      return notifications.show(successNotification(message, title))
    }

    if (status >= 400 && status < 600) {
      return notifications.show(errorNotification(new Error(message), title))
    }
  }

  if ("error" in notification) {
    return notifications.show(errorNotification(notification.error))
  }

  if (!notification || typeof notification !== "object") {
    return notifications.show(errorNotification(new Error()))
  }

  return notifications.show(notification)
}
