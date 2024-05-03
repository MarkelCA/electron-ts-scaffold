// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
//

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    openWindow2: () => ipcRenderer.send('open-window2')
});

console.log('home preload loadedt');

