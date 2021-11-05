const difference = require('lodash/difference');

// Returns an array of values from array that are not present in the other arrays.
console.log(difference([1, 2, 3, 4, 5], [5, 2, 10]));

const nativeDifference = (...arrays) => {
  return arrays.reduce((resultArray, currentArray) =>
    resultArray.filter((value) => !currentArray.includes(value))
  );
};

console.log(nativeDifference([1, 2, 3, 4, 5], [5, 2, 10]));
