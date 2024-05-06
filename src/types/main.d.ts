export {}

declare global {
    interface Window {
        api: IPCApi
    }
    interface IPCApi {
        openHome: () => void
    }
}
