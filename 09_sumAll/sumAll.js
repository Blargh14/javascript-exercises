const sumAll = function(a, b) {
    if (a !== Math.floor(a) || b !== Math.floor(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";

    let low, high
    a < b ? [low,high] = [a,b] : [low,high] = [b,a];

    let total = 0;

    for (let i = low; i <= high; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
