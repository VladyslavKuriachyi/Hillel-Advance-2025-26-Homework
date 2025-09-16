function curryAdd(x) {
    return function (y) {
        return x * y;
    };
}

console.log(curryAdd(5)(2));