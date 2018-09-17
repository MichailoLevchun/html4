const str = "3312455678";
function findRepeat(str) {
    const arr = str.split('');
    const hash = new Map();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (hash.get(arr[i]) === undefined) {
            hash.set(arr[i], true);
        } else {
            const value = hash.get(arr[i]);
            if (value) {
                hash.set(arr[i], !value);
            }
        }
    }
    hash.forEach((v, k) => {
        if (!v)
            result.push(k);
    });
    return result;
}
console.log(...findRepeat(str));