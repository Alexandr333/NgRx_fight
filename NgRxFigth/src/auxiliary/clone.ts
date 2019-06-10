export function clone<T>(obj: T, newInstance: T): T {
    const jsonClone = JSON.parse(JSON.stringify(obj));
    for (let k in jsonClone) {
        newInstance[k] = obj[k];
    }
    return newInstance;
}