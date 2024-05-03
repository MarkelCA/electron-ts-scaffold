import { app, BrowserWindow, ipcMain } from 'electron';
import { createHome } from './modules/home/main';
import { createList } from './modules/list/main';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let currentWindow: BrowserWindow | null = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    currentWindow = createHome();

    ipcMain.on('open-home', () => {
        replaceWindow(createHome());
    });
     

    ipcMain.on('open-list', () => {
        replaceWindow(createList());
    });
});

function replaceWindow(window: BrowserWindow) {
    currentWindow?.close();
    currentWindow = window;
}


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
