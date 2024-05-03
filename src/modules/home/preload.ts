// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
//

import { contextBridge,ipcRenderer } from 'electron';
// import {ipcHandler} from '../../ipc';

contextBridge.exposeInMainWorld('api', {
    // openList: () => ipcHandler(ipcRenderer,IPCChannel.OPEN_LIST)
    openList: () => ipcRenderer.send('open-list')
});

console.log('home preload loadedt');

