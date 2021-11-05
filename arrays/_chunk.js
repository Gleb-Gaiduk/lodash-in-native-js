const chunk = require('lodash/chunk');

// Creates an array of elements split into groups the length of size.
const testArray = [
  { name: 'Max', age: 20 },
  { name: 'Mochael', age: 25 },
  { name: 'Valentino', age: 29 },
  { name: 'Arnold', age: 34 },
  { name: 'Franek', age: 21 },
  { name: 'Magdalena', age: 40 },
];

const result = chunk(testArray, 3);
// console.log(result);

const nativeChunk = (array, chunkSize) => {
  return array.reduce((resultArray, item, index) => {
    const chunkArrayIndex = Math.floor(index / chunkSize);
    const isChunkArrayExists = Boolean(resultArray[chunkArrayIndex]);

    if (!isChunkArrayExists) resultArray[chunkArrayIndex] = [];

    resultArray[chunkArrayIndex].push(item);
    return resultArray;
  }, []);
};

const nativeResult = nativeChunk(testArray, 2);
console.log(nativeResult);
