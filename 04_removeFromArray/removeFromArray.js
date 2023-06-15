const removeFromArray = function(array, ...elements) {
    const arrayCopy = [...array];
    for (const element of elements) {
        if (arrayCopy.indexOf(element) !== -1) {
            arrayCopy.splice(arrayCopy.indexOf(element), 1);
        }
    }
    return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
