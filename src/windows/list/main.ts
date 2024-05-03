import {BrowserWindow} from 'electron';
import path from 'path';

export function createWindow2(): BrowserWindow {
  const win = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'windows/list/preload.js'),
    },
  })
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        win.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/src/windows/list/list.html`);
  } else {
    win.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/src/windows/list/list.html`));
  }
  win.webContents.openDevTools(); 
  return win;
}
