const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {return "OOPS"};
    if (num === 0) {return 0};
    if (num === 1) {return 1};
    first = 1;
    second = 1;
    for (let i = num; i > 2; i--) {
        [first, second] = [second, second + first];
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
