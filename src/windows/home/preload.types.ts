export {}

declare global {
    interface Window {
        api: {
            openWindow2: () => void;
        };
    }
}
