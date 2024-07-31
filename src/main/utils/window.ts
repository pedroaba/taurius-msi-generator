import { BrowserWindow } from 'electron'

export function getCurrentWindow() {
  const window = BrowserWindow.getAllWindows().at(0)

  return window
}
