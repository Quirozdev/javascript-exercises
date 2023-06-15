const sumAll = function(firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        return "ERROR";
    }
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    let start;
    let end;
    if (firstNumber <= secondNumber) {
        start = firstNumber;
        end = secondNumber;
    } else {
        start = secondNumber;
        end = firstNumber;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
