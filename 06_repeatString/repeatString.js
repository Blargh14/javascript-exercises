const repeatString = function(word, repeats) {
    if (repeats < 0) return "ERROR";
    repeated = ""
    for (let i = 0; i < repeats; i++) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
