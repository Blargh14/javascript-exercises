const palindromes = function (text) {
    text = text.toLowerCase()
        .replace(/ |,|\.|;|\?|!|'/g, "") // Excuse the regex
    reverse = text.split("")
        .reverse()
        .join("");
    return text === reverse;
};

// Do not edit below this line
module.exports = palindromes;
