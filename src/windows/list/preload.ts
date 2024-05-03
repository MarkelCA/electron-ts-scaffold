import { contextBridge, ipcRenderer } from 'electron';

console.log('list preload')

contextBridge.exposeInMainWorld('api', {
    openHome: () => ipcRenderer.send('open-home')
});

