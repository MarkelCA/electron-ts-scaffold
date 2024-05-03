import {createList} from './modules/list/main'

declare global {
    enum IPCChannel {
        GET_USER_DATA = 'get-user-data',
        ANOTHER_USE_CASE = 'another-use-case',
        OPEN_LIST = 'open-list'
    }

}

interface IPCRouter {
    [key: string]: (event: Electron.IpcMainInvokeEvent, ...args: any[]) => any;
}

const ipcRouter: IPCRouter = {
    [IPCChannel.GET_USER_DATA]: (event: Electron.IpcMainInvokeEvent, data: any) => {
        console.log('Received data from renderer process:', data);
        return data;
    },
    [IPCChannel.OPEN_LIST]: (event: Electron.IpcMainInvokeEvent, data: any) => {
        createList();
        return data;
    }
};

export function initializeHandlers(ipcMain: Electron.IpcMain) {
    Object.keys(ipcRouter).forEach((key) => {
        ipcMain.handle(key, ipcRouter[key]);
    });
}

export type IPCHandler = (channel: IPCChannel, data?: any) => Promise<any>;

export function ipcHandler(ipcRenderer: Electron.IpcRenderer,channel: IPCChannel, data?: any): Promise<any> {
    return ipcRenderer.invoke(channel.toString(), data);
}
