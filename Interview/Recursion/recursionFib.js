
//Solution 1

function fibonacci(n,cache = {}) {
    if (n < 0 || n === undefined) return null;
    if (n < 2) return n;
    if (cache[n]) return cache[n];
    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    return cache[n];
}

//Solution 2

function fibonacci(n) {
    let previous = 0;
    let current = 1;
    if (n < 0 || n === undefined) return null;
    if (n < 2) return n;
    for (let i = 1; i < n; i++) {
        let temp = current;
        current = current + previous;
        previous = temp;
    }
    return current;
}

//Solution 3 

function fibonacci(n) {
    if (n < 0 || n === undefined) return null;
    return Math.round(Math.pow(((1 + Math.sqrt(5)) / 2), n) / Math.sqrt(5));
}

//Solution 4

function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

