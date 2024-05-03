import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    openHome: () => ipcRenderer.send('open-home')
});

