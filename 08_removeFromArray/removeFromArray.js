const removeFromArray = function(array) {
    newArray = [...array]
    for (const arg of arguments) {
        if ([...arguments].indexOf(arg) === 0) continue;
        while (newArray.indexOf(arg) !== -1) {
            newArray.splice(newArray.indexOf(arg), 1)
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
