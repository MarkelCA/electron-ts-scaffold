// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
//

import { contextBridge,ipcRenderer } from 'electron';
import {IPCChannel} from '../../constants'

contextBridge.exposeInMainWorld('api', {
    // openList: () => ipcHandler(ipcRenderer,IPCChannel.OPEN_LIST)
    openList: () => ipcRenderer.send(IPCChannel.OPEN_LIST)
});

console.log('home preload loadedt');

