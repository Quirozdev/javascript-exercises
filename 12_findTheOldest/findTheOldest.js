const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = oldestPerson.yearOfDeath 
        ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
        : new Date().getFullYear() - oldestPerson.yearOfBirth;
        const currentPersonAge = currentPerson.yearOfDeath 
        ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
        : new Date().getFullYear() - currentPerson.yearOfBirth;
        if (oldestPersonAge > currentPersonAge) {
            return oldestPerson;
        }
        return currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
