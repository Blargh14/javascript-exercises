const findTheOldest = function(array) {
    let oldest = 0;
    let oldestPerson = {};
    let death = 0;
    array.forEach(person => {
        if (person.yearOfDeath === undefined) {
            death = (new Date()).getFullYear() - person.yearOfBirth;
        }
        else {
            death = person.yearOfDeath - person.yearOfBirth;
        }
        if (death > oldest) {
            oldest = death;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
