import {BrowserWindow} from 'electron';
import path from 'path';

export function createList(): BrowserWindow {
  const win = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'modules/list/preload.js'),
    },
  })
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        win.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/src/modules/list/index.html`);
  } else {
    win.loadFile(path.join(__dirname, `../renderer/list_window/src/modules/list/index.html`));
  }
  win.webContents.openDevTools(); 
  return win;
}
