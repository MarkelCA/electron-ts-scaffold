import { contextBridge, ipcRenderer } from 'electron';
import {IPCChannel} from '../../constants'

console.log('list preload')

contextBridge.exposeInMainWorld('api', {
    openHome: () => ipcRenderer.send(IPCChannel.OPEN_HOME)
});

