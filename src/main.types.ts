export {}

declare global {
    interface Window {
        api: ApiExtension
    }
    interface ApiExtension {}
}
