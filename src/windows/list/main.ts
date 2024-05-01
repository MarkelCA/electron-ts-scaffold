import {BrowserWindow} from 'electron';

export function createWindow2(): BrowserWindow {
  const win = new BrowserWindow({ backgroundColor: '#2e2c29' })
  win.loadURL('https://github.com');
  return win;
}
