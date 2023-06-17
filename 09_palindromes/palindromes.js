const palindromes = function (string) {
    const insensitiveCaseAndPunctuationString = string.toLowerCase().replace(/[!,.\s]/g, "");
    const reversedString = reverseString(insensitiveCaseAndPunctuationString);
    return insensitiveCaseAndPunctuationString === reversedString;
};

const reverseString = ((string) => {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
});

// Do not edit below this line
module.exports = palindromes;
