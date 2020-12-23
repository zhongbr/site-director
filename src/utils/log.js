export function log(...args) {
    console.log(`[Site-Director ${new Date().toLocaleTimeString()}]`, ...args);
}
