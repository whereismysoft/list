export function deepCopy(obj) {
    const copy = JSON.parse(JSON.stringify(obj));

    return copy;
}